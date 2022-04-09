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

    // const $formOverlay = $('#frm_overlay');
    // if ($formOverlay) {
    //     $(".page-overlay .close").addEventListener('click', (e) => {
    //         e.preventDefault();
    //         $('.page-overlay').style.display = 'none';
    //     }, true);
    // }

    const $formOverlay = $('#frm_overlay');
    if ($formOverlay) {
        $('.page-overlay').style.display = 'none';
        $(".page-overlay .close").addEventListener('click', (e) => {
            e.preventDefault();
            $('.page-overlay').style.display = 'none';
        }, true);
    }

    const $frm_overlayClose = $('#frm_overlayClose');
    if ($frm_overlayClose) {
        $(".page-overlay-close .close").addEventListener('click', (e) => {
            e.preventDefault();
            $('.page-overlay-close').style.display = 'none';
            $('.page-overlay').style.display = 'flex';
        }, true);
    }

});
