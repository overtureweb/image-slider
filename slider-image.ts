// todo setup src, dist files and build tools

class Slider extends HTMLElement {
	// slider wrapper for the image slides
	slider: HTMLDivElement;

	// container for left, right buttons
	sliderControls: HTMLDivElement;

	// collection of image slides which contain the image elements
	slides: NodeListOf<HTMLImageElement>;

	// current flex order of the image slides
	imageOrder: number[]

	// is slider moving left?
	isLeft: boolean = true;

	// is this a pointer event?
	isScrolling: boolean = false;

	// stores the current X position of a pointer event
	start: number = 0;

	// cumulative amount scrolled since the start of the pointer event
	scrolled: number = 0;

	// the actual image width set by the CSS flex property
	slideWidth: number;

	DOM: ShadowRoot | HTMLElement;

	settings: { maxWidth?: string }; // there will be other settings

	constructor() {
		super();
		let defaults = {maxWidth: "100%"};
		this.settings = {...defaults, ...this.dataset};

		// comment out the next line to use the DOM vs Shadow DOM (dev vs prod)
		// this.attachShadow({mode: "open"});
		this.DOM = this.shadowRoot || this;
		if (this.shadowRoot) {
			this.DOM.innerHTML = this.addHTML();
			this.addStyleSheet();
		}
		this.slider = this.DOM.querySelector(".slider__slides") as HTMLDivElement;
		this.sliderControls = this.DOM.querySelector(".slider__controls") as HTMLDivElement;
		this.slides = this.slider.querySelectorAll(".slider__slide")!;
		this.imageOrder = [];
		this.slideWidth = this.slides[0].getBoundingClientRect().width;
		this.setEvents();
		this.setInitImageOrder(this.slides);
	}

	addHTML() {
		return `<div class="slider"><div class="slider__slides"><div class="slider__slide"><img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/9b150b8274a605cf6ebd5cf0e071622a_522a91de-c7ed-4773-940b-a75b4e719ff0_350x.jpg?v=1573653815" width="350" height="520" alt="Star Wars Episode I The Phantom Menace"></div><div class="slider__slide"><img src="https://m.media-amazon.com/images/I/61zAkpvYLqL._AC_SY741_.jpg" width="488" height="741" alt="Star Wars Episode II: Attack of the Clones"></div><div class="slider__slide"><img src="https://m.media-amazon.com/images/I/61jCCwfO6HL._AC_SL1000_.jpg" width="666" height="1000" alt="Star Wars Episode III: Revenge of the Sith"></div><div class="slider__slide"><img src="https://m.media-amazon.com/images/I/A1wnJQFI82L._AC_SY879_.jpg" width="563" height="879" alt="Star Wars Episode IV: A New Hope"></div><div class="slider__slide"><img src="https://cdn.shopify.com/s/files/1/1523/1900/products/il_570xN.1577839917_stum.jpg?v=1571496990" width="570" height="879" alt="Star Wars Episode V: The Empire Strikes Back"></div><div class="slider__slide"><img src="https://m.media-amazon.com/images/I/512x-5tuQLL._AC_.jpg" width="339" height="500" alt="Star Wars Episode VI: The Return of the Jedi"></div><div class="slider__slide"><img src="https://m.media-amazon.com/images/I/A16XEWILpEL._AC_SL1500_.jpg" width="1000" height="1500" alt="Star Wars Episode VII: The Force Awakens"></div><div class="slider__slide"><img src="https://i5.walmartimages.com/asr/73ba1c54-12e2-4b7f-87a7-5cc2156bcfb3_1.ae7da2809defd06508aa680a0c55c7f1.jpeg" width="473" height="709" alt="Star Wars Episode VIII: The Last Jedi"></div><div class="slider__slide"><img src="https://i5.walmartimages.com/asr/354ced6f-f4d3-4f92-8530-c4185f7af5b4.456921c26b8b4ba7d3d860695f23ab5f.jpeg" width="668" height="1000" alt="Star Wars Episode IX: The Rise of Skywalker"></div></div><div class="slider__controls"><span><button class="slider__button left">&lt;&lt;</button><button class="slider__button right">&gt;&gt;</button></span></div></div>`
	}

	addStyleSheet() {
		const styles = document.createElement("style");
		styles.textContent = `.slider {display: flex;justify-content: center;max-width: ${this.settings.maxWidth};overflow: hidden;margin: 0 auto;flex-direction: column;touch-action: none;}  .slider :hover {cursor: grab;}  .slider__slides {display: flex;justify-content: center;}  .slider__slides.slide-image {transition: transform 0.5s ease;}  .slider__slide {flex: 0 0 33.3%; display: flex;flex-direction: column;padding: 0 0.25rem;box-sizing: border-box;}  .slider__slide img {width: 100%;height: 100%;}  .slider__controls {display: grid;place-content: center;padding: 20px;}  .slider__button {background: steelblue;border: 1px solid steelblue;padding: 1rem 1.25rem;margin: 0 1rem;color: #fff;font-size: 1rem;transition: all 0.25s ease;}  .slider__button:hover {color: steelblue;background: white;border: 1px solid steelblue;}`;
		this.DOM.append(styles);
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
	setInitImageOrder(slideList: NodeListOf<HTMLImageElement>): number[] {
		return this.imageOrder = Array.from({length: slideList.length}, (el, i) => i);
	}


	/**
	 * Sets the targeted direction, adds CSS class for smooth transition and calls the scroll function
	 * @param e
	 */
	handleClick = (e: MouseEvent) => {
		const target = e.target as HTMLDivElement;
		if (target.nodeName !== "BUTTON") return;
		this.isLeft = target.classList.contains("left");
		this.slider.classList.add("slide-image");
		this.slideX();
	};

	/**
	 * called as either the transitionend handler or manually when this.scrolled / this.imageWidth > 1
	 */
	reorderImages = () => {
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

	handlePointerDown = (e: PointerEvent) => {
		e.preventDefault();
		const currentTarget = e.currentTarget as HTMLDivElement;
		// shows the grab cursor for mouseevents until the pointerup event is called
		currentTarget.setPointerCapture(e.pointerId);
		currentTarget.style.cursor = "grabbing";
		e.preventDefault();
		this.isScrolling = true;
		this.start = e.clientX;
	};

	handlePointerMove = (e: PointerEvent) => {
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

	handlePointerUp = (e: PointerEvent) => {
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
	slideX = () => this.slider.style.transform = this.scrolled ? `translateX(${this.scrolled}px)` : `translateX(${(this.isLeft ? -1 : 1) * this.slideWidth}px)`;

	/**
	 * TranslateX back to zero
	 */
	slideReset = () => this.slider.style.transform = "translateX(0)";
}

customElements.define("image-slider", Slider);

console.log("hello");