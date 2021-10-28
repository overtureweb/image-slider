import css from "./slider-image.scss";
import html from "./slider-image.html";

type ImageMap = {
    src: string;
    alt: string;
}

class Slider extends HTMLElement {
    // slider wrapper for the image slides
    slider: HTMLDivElement;

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
    slideWidth: number = 0;

    DOM: ShadowRoot;

    settings: { maxWidth?: string; numSlides?: string } = {}; // there will be other settings

    constructor() {
        super();
        this.settings = {...this.settings, ...this.dataset};
        this.attachShadow({mode: "open"});
        this.DOM = this.shadowRoot as ShadowRoot;
        this.DOM.innerHTML = html;
        this.addStyleSheet();
        this.sliderControls = this.DOM.querySelector(".slider__controls") as HTMLDivElement;
        this.slider = this.DOM.querySelector(".slider__slides") as HTMLDivElement;
        try {
            this.slides = this.initSlides();
            this.setInitialImageOrder(this.slides);
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
                this.slideWidth = this.slides[0].getBoundingClientRect().width;
            });
            slideWrapper.append(img);
            this.slider.append(slideWrapper);
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
        this.settings.numSlides && stylesheet?.insertRule(`.slider__slide{flex-basis:${this.calculateSlideRatio(+this.settings.numSlides)}%}`, 0);
    }

    calculateSlideRatio(numSlides: number) {
        if (this.slides.length - numSlides >= 2) {
            return Math.round(100 / numSlides * .9)
        }
    }

    /**
     * Set all the event listeners
     * all the event handler methods have been defined using function expression syntax to avoid the need for .bind(this) here
     */
    setEvents(): void {
        this.sliderControls.addEventListener("click", this.handleClick);
        this.slider.addEventListener("transitionend", this.reorderImages);
        this.slider.addEventListener("pointerdown", this.handlePointerDown);
        this.slider.addEventListener("pointermove", this.handlePointerMove);
        this.slider.addEventListener("pointerup", this.handlePointerUp);
        window.addEventListener("resize", () => (this.slideWidth = this.slides[0].getBoundingClientRect().width));
    }

    /**
     * Create and populate an array with each slide's index
     * @param slideList
     */
    setInitialImageOrder(slideList: Element[]): number[] {
        return this.imageOrder = Array.from({length: slideList.length}, (el, i) => i);
    }


    /**
     * Sets the targeted direction, adds CSS class for smooth transition and calls the scroll function
     * @param e
     */
    handleClick = (e: MouseEvent): void => {
        const target: HTMLDivElement = e.target as HTMLDivElement;
        if (target.nodeName !== "BUTTON") return;
        this.isLeft = target.classList.contains("left");
        this.slider.classList.add("slide-image");
        this.slideX();
    };

    /**
     * called as either the transitionend handler or manually when this.scrolled / this.imageWidth > 1
     */
    reorderImages = (): void | number => {
        this.slider.classList.remove("slide-image");
        if (Math.abs(this.scrolled) > 0) return (this.scrolled = 0);
        // using length prevents a negative number in the subsequent modulo call
        let offset = this.isLeft ? this.slides.length - 1 : 1;
        this.slides.forEach((el, i) => {
            this.imageOrder[i] = (this.imageOrder[i] + offset) % this.slides.length;
            el.style.order = this.imageOrder[i].toString();
        });

        this.slideReset();
    };

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
        if (Math.abs(this.scrolled / this.slideWidth) > 1) {
            this.scrolled = 0;
            this.reorderImages();
            this.start = e.clientX;
        }
    };

    handlePointerUp = (e: PointerEvent): void => {
        e.preventDefault();
        this.slider.classList.add("slide-image");
        if (Math.abs(this.scrolled / this.slideWidth) > 0.5) {
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
    slideX = (): string => this.slider.style.transform = this.scrolled ? `translateX(${this.scrolled}px)` : `translateX(${(this.isLeft ? -1 : 1) * this.slideWidth}px)`;

    /**
     * TranslateX back to zero
     */
    slideReset = (): string => this.slider.style.transform = "translateX(0)";
}

export default Slider;

