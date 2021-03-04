require('./main');
import {tns} from "tiny-slider/src/tiny-slider"
import {$, $$} from "./helper"

document.addEventListener("DOMContentLoaded", function () {

    /* Product Slider */
    const productSlider = $$('.product_slider');

    productSlider.forEach(el => {
        tns({
            container: el,
            mode: "gallery",
            speed : 1600,
            items: 1,
            slideBy: 'page',
            autoplay: true,
            autoplayButton: false,
            autoplayButtonOutput: false,
            autoplayHoverPause: true,
            navPosition: 'bottom',
            controlsText: ['<i class="icofont-rounded-left"></i>', '<i class="icofont-rounded-right"></i>']
        });
    });
});
