import {tns} from "tiny-slider/src/tiny-slider"
import {$, $$} from "./helper"

document.addEventListener("DOMContentLoaded", function () {

    /* slideshow */
    if ($('.slider')) {
        tns({
            container: '.slider',
            items: 1,
            controls: false,
            slideBy: 'page',
            autoplay: true,
            autoplayButton: false,
            autoplayButtonOutput: false,
            autoplayHoverPause: true,
            navPosition: 'bottom'
        });
    }

    /* slideshow */
    if ($('.dfit_slider')) {
        tns({
            container: '.dfit_slider',
            slideBy: 'page',
            mode: "gallery",
            speed : 1600,
            autoplay: false,
            autoplayButton: false,
            autoplayButtonOutput: false,
            autoplayHoverPause: true,
            navPosition: 'bottom',
            controlsText: ['<i class="icofont-rounded-left"></i>', '<i class="icofont-rounded-right"></i>'],
            responsive: {
                350: {
                    items: 1,
                    controls: true,
                    // edgePadding: 30
                },
                600: {
                    items: 3,
                    controls: true,
                    gutter: 20
                }
            },
        });
    }
    // /* Product Slider */
    // const productSlider = $$('.product_slider');
    //
    // productSlider.forEach(el => {
    //     tns({
    //         container: el,
    //         mode: "gallery",
    //         speed : 1600,
    //         items: 1,
    //         slideBy: 'page',
    //         autoplay: true,
    //         autoplayButton: false,
    //         autoplayButtonOutput: false,
    //         autoplayHoverPause: true,
    //         navPosition: 'bottom',
    //         controlsText: ['<i class="icofont-rounded-left"></i>', '<i class="icofont-rounded-right"></i>']
    //     });
    // });

});
