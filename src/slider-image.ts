import css from "./slider-image.scss";
import html from "./slider-image.html";

type ImageMap = {
    src: string;
    alt: string;
}

class Slider extends HTMLElement {
    // slider wrapper for the image slides
    slidesWrapper: HTMLDivElement;

    // container for left, right buttons
    sliderControls: HTMLDivElement;

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

    settings: {
        maxWidth?: string;
        numSlides?: string;
        hideControls?: boolean;
        autoplay?: boolean;
        autoplayInterval?: number;
        crawlMode?: boolean;
        crawlSpeed?: number;
    } = {};

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
        this.sliderControls = this.shadowDOM.querySelector(".slider__controls") as HTMLDivElement;
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

    setAutoPlay() {
        const leftButton = this.shadowDOM.querySelector("button.left") as HTMLButtonElement;
        const rightButton = this.shadowDOM.querySelector("button.right") as HTMLButtonElement;
        const MIN_INTERVAL = 2000;
        let interval = this.settings.autoplay ? Math.max(MIN_INTERVAL, Number(this.settings.autoplayInterval)) : 0;
        return setInterval(() => this.isSlidingLeft ? leftButton.click() : rightButton?.click(), interval)
    }

    clearAutoPlay(intervalID: NodeJS.Timer) {
        return clearInterval(intervalID);
    }

    initSlides(): HTMLDivElement[] {
        const imagesData: string | null | undefined = document.getElementById("images-map")?.textContent;
        if (!imagesData) throw new Error("No images were provided.");
        const imagesJSON: ImageMap[] = JSON.parse(imagesData);
        const slides: HTMLDivElement[] = [];

        for (let i = 0; i < imagesJSON.length; i++) {
            const slideWrapper: HTMLDivElement = document.createElement("div");
            slideWrapper.classList.add("slider__slide");

            const img: HTMLImageElement = document.createElement("img");
            img.src = imagesJSON[i].src;
            img.alt = imagesJSON[i].alt;
            img.onload = (() => {
                img.width = img.naturalWidth;
                img.height = img.naturalHeight;
                this.slideWidthPx = this.slides[0].getBoundingClientRect().width;
            });
            slideWrapper.append(img);
            slides[i] = slideWrapper;
            slides[i + imagesJSON.length] = slideWrapper.cloneNode(true) as HTMLDivElement;
        }
        return slides;
    }

    addStyleSheet(): void {
        const styles: HTMLStyleElement = document.createElement("style");
        styles.textContent = css;
        this.shadowDOM.append(styles);
    }

    handleUserDefinedOptions(): void {
        (this.settings.autoplay || this.settings.crawlMode) && (this.autoPlayIntervalID = this.setAutoPlay());
        const styleEl: HTMLStyleElement = document.createElement("style");
        this.shadowDOM.append(styleEl);
        const stylesheet: CSSStyleSheet | null = styleEl.sheet;
        this.settings.maxWidth && stylesheet?.insertRule(`.slider{--max-width:${this.settings.maxWidth}}`);
        this.settings.numSlides && stylesheet?.insertRule(`.slider{--slide-width:${Math.floor(100 / +this.settings.numSlides * .95)}%}`);
        this.settings.hideControls && (this.sliderControls.style.display = "none");
        if (this.settings.crawlMode) {
            stylesheet?.insertRule(`.slider__slides.slide-image{--transition-speed:${Number(this.settings.crawlSpeed)}ms`);
            stylesheet?.insertRule(`.slider:hover{cursor:default}`);
        }
    }

    /**
     * Set all the event listeners
     * all the event handler methods have been defined using function expression syntax to avoid the need for .bind(this) here
     */
    setEvents(): void {
        window.addEventListener("resize", () => (this.slideWidthPx = this.slides[0].getBoundingClientRect().width));
        this.sliderControls.addEventListener("click", this.handleClick);
        this.slidesWrapper.addEventListener("transitionend", this.reorderSlides);
        if (!this.settings.crawlMode) {
            this.slidesWrapper.addEventListener("pointerdown", this.handlePointerDown);
            this.slidesWrapper.addEventListener("pointermove", this.handlePointerMove);
            this.slidesWrapper.addEventListener("pointerup", this.handlePointerUp);
        }
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
        const target: HTMLDivElement = e.target as HTMLDivElement;
        if (target.nodeName !== "BUTTON") return;
        this.isSlidingLeft = target.classList.contains("left");
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
        e.preventDefault();
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
        this.settings.autoplay && (this.autoPlayIntervalID = this.setAutoPlay());
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

