import css from "./slider-image.scss";
import html from "./slider-image.html";

type ImageData = {
    src: string;
    alt: string;
}

type UserSettings = {
    imagesId: string | undefined;
    maxWidth?: string;
    numSlides: number;
    hideControls: boolean;
    autoplayMode?: string;
    autoplayStepTiming: number;
    autoplayCrawlTiming: number;
}

const template = document.createElement("template");
template.innerHTML = html;

class Slider extends HTMLElement {
    // slider wrapper for the image slides
    slidesWrapper: HTMLDivElement;

    // collection of image slides which contain the image elements
    slides: HTMLDivElement[] = [];

    // current flex order of the image slides
    imageOrder: number[] = []

    // is slider moving left?
    isSlidingLeft: boolean = true;

    // is a pointer event in progress
    isScrolling: boolean = false;

    // stores the current X position of a pointer event
    start: number = 0;

    // cumulative amount scrolled since the start of the pointer event
    scrolled: number = 0;

    // the actual image width set by the CSS flex property
    slideWidthPx: number = 0;

    shadowDOM: ShadowRoot;

    // settings provided by the user via HTML data-* attributes
    // todo need to validate types and discard bad values maybe a UserSettings class for validation and type assertion
    settings: UserSettings = {
        imagesId: undefined,
        autoplayStepTiming: 2000,
        autoplayCrawlTiming: 6000,
        numSlides: 3,
        hideControls: false
    };

    // autoplay function is
    autoplay: () => NodeJS.Timer | void = () => {
    };
    autoPlayIntervalID: NodeJS.Timer | any;

    sliderButtons: NodeListOf<HTMLButtonElement>;

    constructor() {
        super();
        this.settings = {...this.settings, ...this.dataset};
        this.attachShadow({mode: "open"});
        this.shadowDOM = this.shadowRoot as ShadowRoot;
        this.shadowDOM.innerHTML = html;
        this.addStyleSheet();
        this.slidesWrapper = this.shadowDOM.querySelector(".slider__slides") as HTMLDivElement;
        this.sliderButtons = this.shadowDOM.querySelectorAll("button");
        try {
            this.slides = this.initSlides();
            this.slidesWrapper.append(...this.slides);
            this.imageOrder = this.initSlidesFlexOrder(this.slides);
            this.setSlidesFlexOrder();
            this.handleUserSettings();
            this.setEvents();
        } catch (error) {
            if (error instanceof Error)
                console.log(error.message);
        }
    }

    initAutoPlay(settings: UserSettings) {
        const {autoplayMode: mode, autoplayStepTiming: interval} = settings;
        const [leftBtn, rightBtn] = this.sliderButtons
        return () => {
            switch (mode) {
                case "crawl":
                    this.slidesWrapper.removeEventListener("pointerdown", this.handlePointerDown);
                    this.slidesWrapper.removeEventListener("pointermove", this.handlePointerMove);
                    this.slidesWrapper.removeEventListener("pointerup", this.handlePointerUp);
                    return this.isSlidingLeft ? leftBtn.click() : rightBtn?.click();
                case "step":
                    return this.autoPlayIntervalID = setInterval(() => this.isSlidingLeft ? leftBtn.click() : rightBtn?.click(), interval)
                default:
                    break;
            }
        }
    }

    clearAutoPlay(intervalID: NodeJS.Timer) {
        return clearInterval(intervalID);
    }

    initSlides(): HTMLDivElement[] {
        if (typeof this.settings.imagesId !== "string") throw new Error("Web component requires a valid data-images-id attribute");
        const imagesJSON: string = document.getElementById(this.settings.imagesId)?.textContent!;
        if (!imagesJSON) throw new Error("No images were provided.");
        const imagesArr: ImageData[] = JSON.parse(imagesJSON);
        const slides: HTMLDivElement[] = [];

        for (let i = 0; i < imagesArr.length; i++) {
            const slideWrapper: HTMLDivElement = document.createElement("div");
            slideWrapper.classList.add("slider__slide");
            const img: HTMLImageElement = document.createElement("img");
            img.src = imagesArr[i].src;
            img.alt = imagesArr[i].alt;
            img.onload = (() => {
                img.width = img.naturalWidth;
                img.height = img.naturalHeight;
                this.slideWidthPx = this.slides[0].getBoundingClientRect().width;
            });
            slideWrapper.append(img);
            slides[i] = slideWrapper;
            slides[i + imagesArr.length] = slideWrapper.cloneNode(true) as HTMLDivElement;
        }
        return slides;
    }

    addStyleSheet(): void {
        const styles: HTMLStyleElement = document.createElement("style");
        styles.textContent = css;
        this.shadowDOM.append(styles);
    }

    handleUserSettings(): void {
        this.autoplay = this.initAutoPlay(this.settings);
        const styleEl: HTMLStyleElement = document.createElement("style");
        this.shadowDOM.append(styleEl);
        const stylesheet: CSSStyleSheet | null = styleEl.sheet;
        this.settings.maxWidth && stylesheet?.insertRule(`.slider{--max-width:${this.settings.maxWidth}}`);
        this.settings.numSlides && stylesheet?.insertRule(`.slider{--slide-width:${Math.floor(100 / +this.settings.numSlides * .95)}%}`);
        this.settings.hideControls && this.sliderButtons.forEach(btn => btn.hidden = true);
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
        this.sliderButtons.forEach(btn => btn.addEventListener("click", this.handleClick));
        this.slidesWrapper.addEventListener("transitionend", this.reorderSlides);
        this.slidesWrapper.addEventListener("pointerdown", this.handlePointerDown);
        this.slidesWrapper.addEventListener("pointermove", this.handlePointerMove);
        this.slidesWrapper.addEventListener("pointerup", this.handlePointerUp);
        window.onload = this.autoplay;
        window.addEventListener("resize", () => (this.slideWidthPx = this.slides[0].getBoundingClientRect().width));
    }

    /**
     * Create and populate an array with each slide's index, slideswrapper is offset left by one slide, this method makes the last slide first to counter the effect
     * @param slideList
     */
    initSlidesFlexOrder(slideList: Element[]): number[] {
        return Array.from({length: slideList.length}, (el, i) => (i + 1) % slideList.length);
    }

    /**
     * Sets the targeted direction, adds CSS class for smooth transition and calls the scroll function
     * @param e Event
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

