# A responsive, configurable image slider web component
## How to Use
Add the following script tag with the CDN version to your code just above the closing body tag:
```
<script src="https://cdn.jsdelivr.net/gh/overtureweb/image-slider@v1.0.0/dist/overturedev.io.carousel.js"></script>
```

Then add the web component to the body of your HTML
```
<image-slider>
    <!-- image elements go here, one per wrapper -->
    <div class="slider-slide">
        <img ... >
    </div>
    <div class="slider-slide">
        <img ... >
    </div>
</image-slider>
```
## How to customize
The web component tag can receive the following attributes:
### max-width
The width of the component. Can be in px|rem|em|%|vw. Default: 100%

### num-slides
The number of slides to display in the viewport. Default: 3

To change the value based device width breakpoints, include the following attributes:
num-slides-md (min-width 768px)
num-slides-lg (min-width 992px)
num-slides-xl (min-width 1200px)

**Important! This component is mobile first, values cascade upwards if larger breakpoint is not specified**
```
<image-slider num-slides="1" num-slides-md="3" num-slides-lg="5" num-slides-xl="7">
...
```

### hide-controls
When included the side buttons will be hidden

### autoplay-mode
step: slides advance at a fixed interval
crawl: moves continuously, the direction can be changed with a touch gesture
Default: undefined

### step-interval
When autoplay-mode is set to step, this is the time in milliseconds between transitions. Otherwise no effect.
Default: 3000

### transition-speed
The time it takes for a transition to complete
Default: 500

### crawl-speed
When autoplay-mode is set to crawl, this is the time in milliseconds to scroll the width of one slide. Otherwise no effect.
Default: 6000

### transition-easing
The easing function to use for transitions, ie ease-in, ease-out, linear, cubic-bezier
Default: linear

### lazyload
When the attribute is included an intersection observer will lazyload all images that contain the "lazyload" CSS class. A placeholder image such as a transparency, solid color or low-res version must be included to preserve the integrity of the layout. In this example the src tag is initially set to a low-res version and then later swapped out for the data-src attribute's value when the image is visible in the viewport.

```
<img class="lazyload" width="250" height="371"
         src="https://res.cloudinary.com/overture-web-development/image/upload/t_lqip/v1638811768/image-slider/sw/episode-iv_bcpqye.webp"
         data-src="https://res.cloudinary.com/overture-web-development/image/upload/q_auto/v1638811768/image-slider/sw/episode-iv_bcpqye.webp"
         alt="Star Wars Episode IV A New Hope">
```
[Examples](https://image-slider-test-814bd.web.app/)