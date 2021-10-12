"use strict";
class Slider extends HTMLElement {
    constructor() {
        super();
        /**
         * Sets the targeted direction, adds CSS class for smooth transition and calls the scroll function
         * @param e
         */
        this.handleClick = (e) => {
            const target = e.target;
            if (target.nodeName !== "BUTTON")
                return;
            this.isLeft = target.classList.contains("left");
            this.slider.classList.add("slide-image");
            this.slideX();
        };
        /**
         * called as either the transitionend handler or manually when this.scrolled / this.imageWidth > 1
         */
        this.reorderImages = () => {
            this.slider.classList.remove("slide-image");
            if (Math.abs(this.scrolled) > 0)
                return (this.scrolled = 0);
            // using length prevents a negative number in the subsequent modulo call
            let offset = this.isLeft ? this.slides.length - 1 : 1;
            this.slides.forEach((el, i) => {
                this.imageOrder[i] = (this.imageOrder[i] + offset) % this.slides.length;
                el.style.order = this.imageOrder[i].toString();
            });
            this.slideReset();
        };
        this.handlePointerDown = (e) => {
            e.preventDefault();
            const currentTarget = e.currentTarget;
            // shows the grab cursor for mouseevents until the pointerup event is called
            currentTarget.setPointerCapture(e.pointerId);
            currentTarget.style.cursor = "grabbing";
            e.preventDefault();
            this.isScrolling = true;
            this.start = e.clientX;
        };
        this.handlePointerMove = (e) => {
            e.preventDefault();
            if (!this.isScrolling)
                return;
            this.scrolled = e.clientX - this.start;
            this.isLeft = this.scrolled < 0;
            this.slideX();
            if (Math.abs(this.scrolled / this.slideWidth) > 1) {
                this.scrolled = 0;
                this.reorderImages();
                this.start = e.clientX;
            }
        };
        this.handlePointerUp = (e) => {
            e.preventDefault();
            this.slider.classList.add("slide-image");
            if (Math.abs(this.scrolled / this.slideWidth) > 0.5) {
                this.scrolled = 0;
                this.slideX();
            }
            else {
                this.slideReset();
            }
            this.isScrolling = false;
        };
        /**
         * Apply translateX either the amount scrolled by the user or, if this.scrolled = 0 (falsy when click event or during pointerup) by the current width of a slide
         */
        this.slideX = () => this.slider.style.transform = this.scrolled ? `translateX(${this.scrolled}px)` : `translateX(${(this.isLeft ? -1 : 1) * this.slideWidth}px)`;
        /**
         * TranslateX back to zero
         */
        this.slideReset = () => this.slider.style.transform = "translateX(0)";
        this.slider = this.querySelector(".slider__wrapper");
        this.sliderControls = this.querySelector(".slider__controls");
        this.slides = this.slider.querySelectorAll(".slider__slide");
        this.imageOrder = [];
        this.isLeft = true;
        this.isScrolling = false;
        this.start = 0;
        this.scrolled = 0;
        this.slideWidth = this.slides[0].getBoundingClientRect().width;
        this.setEvents();
        this.setInitImageOrder(this.slides);
    }
    /**
     * Set all the event listeners
     * all the event handler methods have been defined using function expression syntax to avoid the need for .bind(this) here
     */
    setEvents() {
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
    setInitImageOrder(slideList) {
        return this.imageOrder = Array.from({ length: slideList.length }, (el, i) => i);
    }
}
customElements.define("image-slider", Slider);
