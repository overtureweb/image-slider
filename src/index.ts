declare global {
    interface Window { Slider: any; }
}

import Slider from "./slider-image";
customElements.define("image-slider", Slider);
window.Slider = Slider || {};