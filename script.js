"use strict";
class Slider extends HTMLElement {
    constructor() {
        super();
        this.handleClick = (e) => {
            const target = e.target;
            if (target.nodeName !== "BUTTON")
                return;
            this.isLeft = target.classList.contains("left");
            this.slider.classList.add("slide-image");
            this.scrollImageWidth();
        };
        this.reorderImages = () => {
            this.slider.classList.remove("slide-image");
            if (Math.abs(this.scrolled) > 0)
                return (this.scrolled = 0);
            // using length prevents a negative number in the subsequent modulo call
            let offset = this.isLeft ? this.images.length - 1 : 1;
            this.images.forEach((el, i) => {
                this.imageOrder[i] = (this.imageOrder[i] + offset) % this.images.length;
                el.style.order = this.imageOrder[i].toString();
            });
            this.scrollReset();
        };
        this.handlePointerDown = (e) => {
            e.preventDefault();
            const currentTarget = e.currentTarget;
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
            this.slider.style.transform = `translateX(${this.scrolled}px)`;
            if (Math.abs(this.scrolled / this.imageWidth) > 1) {
                this.scrolled = 0;
                this.reorderImages();
                this.start = e.clientX;
            }
        };
        this.handlePointerUp = (e) => {
            e.preventDefault();
            this.slider.classList.add("slide-image");
            if (Math.abs(this.scrolled / this.imageWidth) > 0.5) {
                this.scrolled = 0;
                this.scrollImageWidth();
            }
            else {
                this.scrollReset();
            }
            this.isScrolling = false;
        };
        this.slider = this.querySelector(".slider__wrapper");
        this.sliderControls = this.querySelector(".slider__controls");
        this.images = this.slider.querySelectorAll(".slider__slide");
        this.imageOrder = [];
        this.isLeft = true;
        this.isScrolling = false;
        this.start = 0;
        this.scrolled = 0;
        this.imageWidth = this.images[0].getBoundingClientRect().width;
        this.setEvents();
        this.setInitImageOrder(this.images);
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
        window.addEventListener("resize", () => (this.imageWidth = this.images[0].getBoundingClientRect().width));
    }
    setInitImageOrder(imgList) {
        return this.imageOrder = Array.from({ length: imgList.length }, (el, i) => i);
    }
    scrollImageWidth() {
        let ratio = (this.imageWidth / this.slider.getBoundingClientRect().width) *
            (this.isLeft ? -1 : 1) *
            100;
        this.slider.style.transform = `translateX(${ratio}%)`;
    }
    ;
    scrollReset() {
        this.slider.style.transform = "translateX(0)";
    }
}
customElements.define("image-slider", Slider);
