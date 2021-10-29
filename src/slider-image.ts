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
    isLeft: boolean = true;

    // is this a pointer event?
    isScrolling: boolean = false;

    // stores the current X position of a pointer event
    start: number = 0;

    // cumulative amount scrolled since the start of the pointer event
    scrolled: number = 0;

    // the actual image width set by the CSS flex property
    slideWidthPx: number = 0;

    DOM: ShadowRoot;

    slider: HTMLDivElement;

    settings: { maxWidth?: string; numSlides?: string } = {}; // there will be other settings

    constructor() {
        super();
        this.settings = {...this.settings, ...this.dataset};
        this.attachShadow({mode: "open"});
        this.DOM = this.shadowRoot as ShadowRoot;
        this.DOM.innerHTML = html;
        this.addStyleSheet();
        this.slider = this.DOM.querySelector(".slider") as HTMLDivElement;
        this.slidesWrapper = this.DOM.querySelector(".slider__slides") as HTMLDivElement;
        this.sliderControls = this.DOM.querySelector(".slider__controls") as HTMLDivElement;
        try {
            this.slides = this.initSlides();
            this.slidesWrapper.append(...this.slides);
            this.imageOrder = this.setInitialImageOrder(this.slides);
            this.setSlidesFlexOrder();
            this.addUserDefinedStyles();
            this.setEvents();
        } catch (error) {
            if (error instanceof Error)
                console.log(error.message);
        }
    }

    initSlides(): HTMLDivElement[] {
        const imagesData: string | null | undefined = document.getElementById("images-map")?.textContent;
        if (!imagesData) throw new Error("No images were provided.");
        const imagesJSON: ImageMap[] = JSON.parse(imagesData);
        return imagesJSON.map(el => {
            const slideWrapper: HTMLDivElement = document.createElement("div");
            slideWrapper.classList.add("slider__slide");

            const img: HTMLImageElement = document.createElement("img");
            img.src = el.src;
            img.alt = el.alt;
            img.onload = (() => {
                img.width = img.naturalWidth;
                img.height = img.naturalHeight;
                this.slideWidthPx = this.slides[0].getBoundingClientRect().width;
            });
            slideWrapper.append(img);
            return slideWrapper;
        });
    }

    addStyleSheet(): void {
        const styles: HTMLStyleElement = document.createElement("style");
        styles.textContent = css;
        this.DOM.append(styles);
    }

    addUserDefinedStyles(): void {
        const styleEl: HTMLStyleElement = document.createElement("style");
        this.DOM.append(styleEl);
        const stylesheet: CSSStyleSheet | null = styleEl.sheet;
        this.settings.maxWidth && stylesheet?.insertRule(`.slider{max-width:${this.settings.maxWidth}}`, 0);
        this.settings.numSlides && stylesheet?.insertRule(`.slider{--slide-width:${Math.floor(100 / +this.settings.numSlides * .95)}%}`, 0);
    }

    /**
     * Set all the event listeners
     * all the event handler methods have been defined using function expression syntax to avoid the need for .bind(this) here
     */
    setEvents(): void {
        this.sliderControls.addEventListener("click", this.handleClick);
        this.slider.addEventListener("transitionend", this.reorderSlides);
        this.slider.addEventListener("pointerdown", this.handlePointerDown);
        this.slider.addEventListener("pointermove", this.handlePointerMove);
        this.slider.addEventListener("pointerup", this.handlePointerUp);
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
        const target: HTMLDivElement = e.target as HTMLDivElement;
        if (target.nodeName !== "BUTTON") return;
        this.isLeft = target.classList.contains("left");
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
        let offset = this.isLeft ? this.slides.length - 1 : 1;
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
    };

    handlePointerMove = (e: PointerEvent): void => {
        e.preventDefault();
        if (!this.isScrolling) return;
        this.scrolled = e.clientX - this.start;
        this.isLeft = this.scrolled < 0;
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
    };

    /**
     * Apply translateX by either the amount scrolled by the user or, if this.scrolled = 0 (falsy when click event or during pointerup) by the current width of a slide
     */
    slideX = (): string => this.slidesWrapper.style.transform = this.scrolled ? `translateX(${this.scrolled}px)` : `translateX(${(this.isLeft ? -1 : 1) * this.slideWidthPx}px)`;

    /**
     * TranslateX back to zero
     */
    slideReset = (): string => this.slidesWrapper.style.transform = "translateX(0)";
}

export default Slider;

