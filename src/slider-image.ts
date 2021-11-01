import css from "./slider-image.scss";
import html from "./slider-image.html";

type ImageMap = {
    src: string;
    alt: string;
}

type UserSettings = {
    maxWidth?: string;
    numSlides?: string;
    hideControls?: boolean;
    autoplayMode?: string;
    autoplayStepTiming: number;
    autoplayCrawlTiming: number;
}

class Slider extends HTMLElement {
    // slider wrapper for the image slides
    slidesWrapper: HTMLDivElement;

    // collection of image slides which contain the image elements
    slides: HTMLDivElement[] = [];

    // current flex order of the image slides
    imageOrder: number[] = []

    // is slider moving left?
    isSlidingLeft: boolean = true;

    // is this a pointer event?
    isScrolling: boolean = false;

    // stores the current X position of a pointer event
    start: number = 0;

    // cumulative amount scrolled since the start of the pointer event
    scrolled: number = 0;

    // the actual image width set by the CSS flex property
    slideWidthPx: number = 0;

    shadowDOM: ShadowRoot;

    settings: UserSettings = {autoplayStepTiming: 2000, autoplayCrawlTiming: 6000};

    autoplay: () => NodeJS.Timer | void = () => {
    };
    autoPlayIntervalID: NodeJS.Timer | any;

    constructor() {
        super();
        // todo need to validate types and discard bad values
        this.settings = {...this.settings, ...this.dataset};
        this.attachShadow({mode: "open"});
        this.shadowDOM = this.shadowRoot as ShadowRoot;
        this.shadowDOM.innerHTML = html;
        this.addStyleSheet();
        this.slidesWrapper = this.shadowDOM.querySelector(".slider__slides") as HTMLDivElement;
        try {
            this.slides = this.initSlides();
            this.slidesWrapper.append(...this.slides);
            this.imageOrder = this.setInitialImageOrder(this.slides);
            this.setSlidesFlexOrder();
            this.handleUserDefinedOptions();
            this.setEvents();
        } catch (error) {
            if (error instanceof Error)
                console.log(error.message);
        }
    }

    initAutoPlay(settings: any) {
        const {autoplayMode, autoplayStepTiming} = settings;
        const [leftBtn, rightBtn]: NodeListOf<HTMLButtonElement> = this.shadowDOM.querySelectorAll("button");
        return () => {
            switch (autoplayMode) {
                case "crawl":
                    this.slidesWrapper.removeEventListener("pointerdown", this.handlePointerDown);
                    this.slidesWrapper.removeEventListener("pointermove", this.handlePointerMove);
                    this.slidesWrapper.removeEventListener("pointerup", this.handlePointerUp);
                    return this.isSlidingLeft ? leftBtn.click() : rightBtn?.click();
                case "step":
                    return this.autoPlayIntervalID = setInterval(() => this.isSlidingLeft ? leftBtn.click() : rightBtn?.click(), autoplayStepTiming)
                default:
                    break;
            }
        }
    }

    clearAutoPlay(intervalID: NodeJS.Timer) {
        return clearInterval(intervalID);
    }

    initSlides(): HTMLDivElement[] {
        const imagesData: string | null | undefined = document.getElementById("images-map")?.textContent;
        if (!imagesData) throw new Error("No images were provided.");
        const imageMap: ImageMap[] = JSON.parse(imagesData);
        const slides: HTMLDivElement[] = [];

        for (let i = 0; i < imageMap.length; i++) {
            const slideWrapper: HTMLDivElement = document.createElement("div");
            slideWrapper.classList.add("slider__slide");
            const img: HTMLImageElement = document.createElement("img");
            img.src = imageMap[i].src;
            img.alt = imageMap[i].alt;
            img.onload = (() => {
                img.width = img.naturalWidth;
                img.height = img.naturalHeight;
                this.slideWidthPx = this.slides[0].getBoundingClientRect().width;
            });
            slideWrapper.append(img);
            slides[i] = slideWrapper;
            slides[i + imageMap.length] = slideWrapper.cloneNode(true) as HTMLDivElement;
        }
        return slides;
    }

    addStyleSheet(): void {
        const styles: HTMLStyleElement = document.createElement("style");
        styles.textContent = css;
        this.shadowDOM.append(styles);
    }

    handleUserDefinedOptions(): void {
        this.autoplay = this.initAutoPlay(this.settings);
        const styleEl: HTMLStyleElement = document.createElement("style");
        this.shadowDOM.append(styleEl);
        const stylesheet: CSSStyleSheet | null = styleEl.sheet;
        this.settings.maxWidth && stylesheet?.insertRule(`.slider{--max-width:${this.settings.maxWidth}}`);
        this.settings.numSlides && stylesheet?.insertRule(`.slider{--slide-width:${Math.floor(100 / +this.settings.numSlides * .95)}%}`);
        if (this.settings.autoplayMode === "crawl") {
            stylesheet?.insertRule(`.slider__slides.slide-image{--transition-speed:${this.settings.autoplayCrawlTiming}ms`);
            stylesheet?.insertRule(`.slider:hover{cursor:default}`);
        }
    }

    /**
     * Set all the event listeners
     * all the event handler methods have been defined using function expression syntax to avoid the need for .bind(this) here
     */
    setEvents(): void {
        (this.shadowDOM.querySelector(".slider__button.left") as HTMLButtonElement).addEventListener("click", this.handleClick);
        (this.shadowDOM.querySelector(".slider__button.right") as HTMLButtonElement).addEventListener("click", this.handleClick);
        this.slidesWrapper.addEventListener("transitionend", this.reorderSlides);
        this.slidesWrapper.addEventListener("pointerdown", this.handlePointerDown);
        this.slidesWrapper.addEventListener("pointermove", this.handlePointerMove);
        this.slidesWrapper.addEventListener("pointerup", this.handlePointerUp);
        window.onload = this.autoplay;
        window.addEventListener("resize", () => (this.slideWidthPx = this.slides[0].getBoundingClientRect().width));
    }

    /**
     * Create and populate an array with each slide's index, slideswrapper is offset left by one slide, this makes the last slide first to offset this todo hacky
     * @param slideList
     */
    setInitialImageOrder(slideList: Element[]): number[] {
        return Array.from({length: slideList.length}, (el, i) => (i + 1) % slideList.length);
    }

    /**
     * Sets the targeted direction, adds CSS class for smooth transition and calls the scroll function
     * @param e
     */
    handleClick = (e: MouseEvent): void => {
        const button = e.currentTarget as HTMLButtonElement;
        this.isSlidingLeft = button.classList.contains("left");
        this.slidesWrapper.classList.add("slide-image");
        this.slideX();
    };

    /**
     * called as either the transitionend handler or manually when this.scrolled / this.imageWidth > 1
     */
    reorderSlides = (): void | number => {
        this.slidesWrapper.classList.remove("slide-image");
        if (Math.abs(this.scrolled) > 0) return (this.scrolled = 0);
        // using length prevents a negative number in the subsequent modulo call
        let offset = this.isSlidingLeft ? this.slides.length - 1 : 1;
        this.setSlidesFlexOrder(offset);
        this.slideReset();
        this.settings.autoplayMode === "crawl" && setTimeout(() => this.autoplay());
    };

    setSlidesFlexOrder(offset: number = 0): void {
        this.slides.forEach((slide, i) => {
            this.imageOrder[i] = (this.imageOrder[i] + offset) % this.slides.length;
            slide.style.order = this.imageOrder[i].toString();
        });
    }

    handlePointerDown = (e: PointerEvent): void => {
        e.preventDefault();
        const currentTarget = e.currentTarget as HTMLDivElement;
        // shows the grab cursor for mouseevents until the pointerup event is called
        currentTarget.setPointerCapture(e.pointerId);
        currentTarget.style.cursor = "grabbing";
        this.isScrolling = true;
        this.start = e.clientX;
        this.clearAutoPlay(this.autoPlayIntervalID);
    };

    handlePointerMove = (e: PointerEvent): void => {
        e.preventDefault();
        if (!this.isScrolling) return;
        this.scrolled = e.clientX - this.start;
        this.isSlidingLeft = this.scrolled < 0;
        this.slideX();
        if (Math.abs(this.scrolled / this.slideWidthPx) > 1) {
            this.scrolled = 0;
            this.reorderSlides();
            this.start = e.clientX;
        }
    };

    handlePointerUp = (e: PointerEvent): void => {
        e.preventDefault();
        this.slidesWrapper.classList.add("slide-image");
        if (Math.abs(this.scrolled / this.slideWidthPx) > 0.5) {
            this.scrolled = 0;
            this.slideX();
        } else {
            this.slideReset();
        }
        this.isScrolling = false;
        this.autoplay();
    };

    /**
     * Apply translateX by either the amount scrolled by the user or, if this.scrolled = 0 (falsy when click event or during pointerup) by the current width of a slide
     */
    slideX = (): string => this.slidesWrapper.style.transform = this.scrolled ? `translateX(${this.scrolled}px)` : `translateX(${(this.isSlidingLeft ? -1 : 1) * this.slideWidthPx}px)`;

    /**
     * TranslateX back to zero
     */
    slideReset = (): string => this.slidesWrapper.style.transform = "translateX(0)";
}

export default Slider;

