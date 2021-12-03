import css from "./slider-image.scss";
import html from "./slider-image.html";

class Slider extends HTMLElement {
    // slider wrapper for the image slides
    slidesWrapper: HTMLDivElement;

    // collection of image slides which contain the image elements
    slides: HTMLDivElement[] = [];

    // is the first/most recent transition direction left?
    isDirectionLeft: boolean = true;

    // is a pointer event in progress
    isScrolling: boolean = false;

    // stores the current X position of a pointer event
    start: number = 0;

    // cumulative amount scrolled since the start of the pointer event
    scrolled: number = 0;

    // the actual image width set by the CSS flex property
    slideWidthPx: number = 0;

    autoplay: () => void = () => {
    };

    autoPlayIntervalID?: NodeJS.Timer | any;

    sliderButtons: NodeListOf<HTMLButtonElement>;
    stylesheet: CSSStyleSheet;

    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot!.innerHTML = html;
        this.stylesheet = this.addStyleSheet();
        this.slidesWrapper = this.shadowRoot!.querySelector(".slider__slides") as HTMLDivElement;
        this.sliderButtons = this.shadowRoot!.querySelectorAll("button");
        try {
            this.slides = this.initSlides();
            this.slidesWrapper.append(...this.slides);
            this.setSlidesFlexOrder();
        } catch (error) {
            if (error instanceof Error) {
                console.log(`Image Loading Error: ${error.message}`);
            }
        }
    }

    connectedCallback() {
        this.setListeners();
        this.handleUserSettings();
    }

    initSlides(): HTMLDivElement[] {
        const slot: HTMLSlotElement = document.createElement("slot");
        this.shadowRoot!.append(slot);
        if (!slot.assignedElements().length) throw new Error("No properly formatted images found")
        const images = slot.assignedElements().filter(el => el.tagName === "IMG") as HTMLImageElement[];
        const slides: HTMLDivElement[] = Array(images.length * 2);
        for (let i = 0; i < slides.length / 2; i++) {
            const slideWrapper: HTMLDivElement = document.createElement("div");
            slideWrapper.classList.add("slider__slide");
            slideWrapper.append(images[i]);
            slides[i] = slideWrapper;
            slides[i + slides.length / 2] = slideWrapper.cloneNode(true) as HTMLDivElement;
        }
        return slides;
    }

    initAutoPlay(stepInterval: string | number = 3000, mode?: string | null) {
        switch (mode) {
            case "crawl":
                this.slidesWrapper.removeEventListener("pointerdown", this.handlePointerDown);
                this.slidesWrapper.removeEventListener("pointermove", this.handlePointerMove);
                this.slidesWrapper.removeEventListener("pointerup", this.handlePointerUp);
                this.setCrawlDirToggle();
                return this.doTransition;
            case "step":
                return () => {
                    if (this.autoPlayIntervalID) return;
                    this.autoPlayIntervalID = setInterval(() => this.doTransition(), +stepInterval);
                }
            // if no autoplay-mode attribute was passed or it's one of the cases then return a function stub
            default:
                return () => {
                }
        }
    }

    disableStepInterval() {
        clearInterval(this.autoPlayIntervalID);
        this.autoPlayIntervalID = null;
    }

    setCrawlDirToggle() {
        let pointerOrigin: number;
        this.slidesWrapper.addEventListener("pointerdown", (e) => {
            e.preventDefault();
            pointerOrigin = e.clientX
        });
        this.slidesWrapper.addEventListener("pointerup", (e) => {
            e.preventDefault();
            this.isDirectionLeft = e.clientX < pointerOrigin;
            this.doTransition();
        });
    }

    addStyleSheet(): CSSStyleSheet {
        const styles: HTMLStyleElement = document.createElement("style");
        styles.textContent = css;
        this.shadowRoot!.append(styles);
        return styles.sheet!;
    }

    handleUserSettings(): void {
        this.autoplay = this.initAutoPlay(this.getAttribute("step-interval") || undefined, this.getAttribute("autoplay-mode"));
        this.hasAttribute("hide-controls") && this.sliderButtons.forEach(btn => btn.hidden = true);
        [...this.attributes].forEach(({
                                          name,
                                          value
                                      }) => {
            const cssRule = (this.htmlAttrsToCssMap() as { [k: string]: (arg: string) => string })[name]?.(value);
            cssRule && this.stylesheet.insertRule(cssRule, this.stylesheet.cssRules.length)
        });
    }

    htmlAttrsToCssMap(): object {
        return {
            "max-width": (value: string) => `:host {--max-width: ${value}}`,
            "num-slides": (value: string) => `:host {--slide-width: calc(100 / ${+value} * .95%);}`,
            "transition-speed": (value: string) => `:host {--transition-speed: ${value}ms}`,
            "crawl-speed": (value: string) => `:host([autoplay-mode=crawl]) {--transition-speed: ${value}ms}`,
            "easing": (value: string) => `:host {--easing: ${value}`
        }
    }

    /**
     * Set all the event listeners
     * all the event handler methods have been defined using function expression syntax to avoid the need for .bind(this) here
     */
    setListeners(): void {
        this.sliderButtons.forEach(btn => btn.addEventListener("click", this.handleClick));
        this.slidesWrapper.addEventListener("transitionend", () => {
            this.reorderSlides();
            setTimeout(() => {
                this.autoplay();
            }, 0);

        });
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
     * called as either the transitionend handler or manually when this.scrolled / this.imageWidth > 1
     */
    reorderSlides = (): void | number => {
        this.slidesWrapper.classList.remove("slide-image");
        if (Math.abs(this.scrolled) > 0) return (this.scrolled = 0);
        // using length prevents a negative number in the subsequent modulo call
        let step = this.isDirectionLeft ? this.slides.length - 1 : 1;
        this.setSlidesFlexOrder(step);
        this.slideToZero();
    };

    /**
     * Sets the initial and current order of the flex elements, this combined with the translateX transition is what creates the scroll effect
     * The Image Slider is offset by the width of one slide (prevents a gap from appearing), the initial function call offsets by 1 to make the last image first, and outside the viewport
     * @param step
     */
    setSlidesFlexOrder(step: number = 1): void {
        this.slides.forEach((slide, i) => {
            slide.style.order = ((+(slide.style.order || i) + step) % this.slides.length).toString();
        });
    }

    /**
     * Sets the targeted direction, adds CSS class for smooth transition and calls the scroll function
     * @param e Event
     */
    handleClick = (e: MouseEvent): void => {
        const button = e.currentTarget as HTMLButtonElement;
        this.isDirectionLeft = button.classList.contains("left");
        this.doTransition();
    };

    doTransition() {
        this.slidesWrapper.classList.add("slide-image");
        this.slideX();
    }

    handlePointerDown = (e: PointerEvent): void => {
        e.preventDefault();
        this.isScrolling = true;
        this.autoPlayIntervalID && this.disableStepInterval();
        const currentTarget = e.currentTarget as HTMLDivElement;
        // shows the grab cursor for mouseevents until the pointerup event is called
        currentTarget.setPointerCapture(e.pointerId);
        currentTarget.style.cursor = "grabbing";
        this.start = e.clientX;

    };

    handlePointerMove = (e: PointerEvent): void => {
        e.preventDefault();
        if (!this.isScrolling) return;
        this.scrolled = e.clientX - this.start;
        this.isDirectionLeft = this.scrolled < 0;
        this.slideX(); // important - this has to be called before reorderSlides to prevent a flicker
        if (Math.abs(this.scrolled / this.slideWidthPx) > 1) {
            this.scrolled = 0;
            this.reorderSlides();
            this.start = e.clientX;
        }
    };

    handlePointerUp = (e: PointerEvent): void => {
        e.preventDefault();
        this.slidesWrapper.classList.add("slide-image");
        // mimic snap scroll
        if (Math.abs(this.scrolled / this.slideWidthPx) > 0.5) {
            this.scrolled = 0;
            this.slideX();
        } else {
            this.slideToZero();
        }
        this.isScrolling = false;
    };

    /**
     * Apply translateX by either the amount scrolled by the user or, if this.scrolled = 0 (falsy when click event or during pointerup) by the current width of a slide
     */
    slideX = (): string => this.slidesWrapper.style.transform = this.scrolled ? `translateX(${this.scrolled}px)` : `translateX(${(this.isDirectionLeft ? -1 : 1) * this.slideWidthPx}px)`;

    /**
     * TranslateX back to zero
     */
    slideToZero = (): string => this.slidesWrapper.style.transform = "translateX(0)";
}

export default Slider;