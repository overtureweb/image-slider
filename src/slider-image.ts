import css from "./slider-image.scss";
import html from "./slider-image.html";

const template = document.createElement("template");
template.innerHTML = html;

class Slider extends HTMLElement {
    // slider wrapper for the image slides
    slidesWrapper: HTMLDivElement;

    // collection of image slides which contain the image elements
    slides: HTMLDivElement[] = [];

    // current flex order of the image slides
    imageOrder: number[] = [];

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

    stylesheet: CSSStyleSheet;

    // autoplay function is
    autoplay: () => NodeJS.Timer | void = () => {
    };
    autoPlayIntervalID?: NodeJS.Timer | any;

    sliderButtons: NodeListOf<HTMLButtonElement>;

    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowDOM = this.shadowRoot as ShadowRoot;
        this.shadowDOM.appendChild(template.content.cloneNode(true));
        this.stylesheet = this.addStyleSheet();
        this.slidesWrapper = this.shadowDOM.querySelector(".slider__slides") as HTMLDivElement;
        this.sliderButtons = this.shadowDOM.querySelectorAll("button");
        try {
            this.slides = this.initSlides();
            this.slidesWrapper.append(...this.slides);
            this.imageOrder = this.initSlidesFlexOrder(this.slides);
            this.setSlidesFlexOrder();
            this.handleUserSettings();
        } catch (error) {
            if (error instanceof Error) {
                console.log(`Image Loading Error: ${error.message}`);
            }
        }
    }

    connectedCallback() {
        this.setEvents();
        this.hidden = false;
    }

    initSlides(): HTMLDivElement[] {
        const slot = document.createElement("slot");
        slot.name = "slide";
        this.shadowDOM.append(slot);
        if (!slot.assignedNodes().length) throw new Error("No properly formatted images found")
        const slides: HTMLDivElement[] = Array.from({length: slot.assignedNodes().length * 2});
        for (let i = 0; i <= slides.length / 2 - 1; i++) {
            let [image] = slot.assignedNodes();
            const slideWrapper: HTMLDivElement = document.createElement("div");
            slideWrapper.classList.add("slider__slide");
            slideWrapper.append(image);
            slides[i] = slideWrapper;
            slides[i + slides.length / 2] = slideWrapper.cloneNode(true) as HTMLDivElement;
        }
        return slides;
    }

    initAutoPlay() {
        const mode = this.getAttribute("auto-play-mode");
        const [leftBtn, rightBtn] = this.sliderButtons;
        return () => {
            switch (mode) {
                case "crawl":
                    this.slidesWrapper.removeEventListener("pointerdown", this.handlePointerDown);
                    this.slidesWrapper.removeEventListener("pointermove", this.handlePointerMove);
                    this.slidesWrapper.removeEventListener("pointerup", this.handlePointerUp);
                    const crawlTiming = this.getAttribute("crawl-timing")
                    const DEFAULT_CRAWLTIMING = 6000;
                    this.stylesheet.insertRule(`.slider__slides.slide-image{--transition-speed:${crawlTiming || DEFAULT_CRAWLTIMING}ms`, this.stylesheet.cssRules.length);
                    this.stylesheet.insertRule(`.slider:hover{cursor:default}`, this.stylesheet.cssRules.length);
                    return this.isSlidingLeft ? leftBtn.click() : rightBtn.click();
                case "step":
                    if (this.autoPlayIntervalID) return;
                    const interval = this.getAttribute("step-timing");
                    const DEFAULT_INTERVAL = 3000;
                    return this.autoPlayIntervalID = setInterval(() => this.isSlidingLeft ? leftBtn.click() : rightBtn.click(), Number(interval) || DEFAULT_INTERVAL);
                default:
                    break;
            }
        }
    }

    disableStepInterval() {
        clearInterval(this.autoPlayIntervalID);
        this.autoPlayIntervalID = null;
    }

    addStyleSheet(): CSSStyleSheet {
        const styles: HTMLStyleElement = document.createElement("style");
        styles.textContent = css;
        this.shadowDOM.append(styles);
        return styles.sheet!;
    }

    handleUserSettings(): void {
        this.autoplay = this.initAutoPlay();
        this.hasAttribute("hide-controls") && this.sliderButtons.forEach(btn => btn.hidden = true);
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
        window.addEventListener("load", () => {
            this.slideWidthPx = this.slides[0].getBoundingClientRect().width;
            this.autoplay();
        });
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
     * called as either the transitionend handler or manually when this.scrolled / this.imageWidth > 1
     */
    reorderSlides = (): void | number => {
        this.slidesWrapper.classList.remove("slide-image");
        if (Math.abs(this.scrolled) > 0) return (this.scrolled = 0);
        // using length prevents a negative number in the subsequent modulo call
        let offset = this.isSlidingLeft ? this.slides.length - 1 : 1;
        this.setSlidesFlexOrder(offset);
        this.slideReset();
        setTimeout(() => this.autoplay(), 0);
    };

    setSlidesFlexOrder(offset: number = 0): void {
        this.slides.forEach((slide, i) => {
            this.imageOrder[i] = (this.imageOrder[i] + offset) % this.slides.length;
            slide.style.order = this.imageOrder[i].toString();
        });
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

    handlePointerDown = (e: PointerEvent): void => {
        e.preventDefault();
        const currentTarget = e.currentTarget as HTMLDivElement;
        // shows the grab cursor for mouseevents until the pointerup event is called
        currentTarget.setPointerCapture(e.pointerId);
        currentTarget.style.cursor = "grabbing";
        this.isScrolling = true;
        this.start = e.clientX;
        this.disableStepInterval();
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

