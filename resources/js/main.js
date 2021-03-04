import Swal from "sweetalert2";

require('./bootstrap');
import {tns} from "tiny-slider/src/tiny-slider"
import ScrollReveal from 'scrollreveal'
import {$, $$} from "./helper"
import validate from "validate.js";
import {showFieldError, validateField} from "./validate_form";


document.addEventListener("DOMContentLoaded", function () {

    /* change language */
    const $ddlLanguage = $('.language-switcher .current');
    if ($ddlLanguage) {
        $ddlLanguage.addEventListener('click', () => {
            $ddlLanguage.classList.toggle('on');
        });
    }

    /* mobile menu */

    const $navIcon = $('.nav-icon');
    if ($navIcon) {
        $navIcon.addEventListener("click", function (e) {
            e.preventDefault();
            $navIcon.classList.toggle('on');
            $('header nav').classList.toggle('on');
        });
    }

    const $hasSub = $$('.has_sub');
    if ($hasSub) {
        $hasSub.forEach($a => {
            $a.addEventListener("click", function (e) {
                e.preventDefault();

                const $parent = $a.closest('li');

                $parent.classList.toggle('on');
                $parent.querySelector('.sub').classList.toggle('on');
            });
        });
    }

    const $h3NoPackage = $$('h3.no-package');
    if ($h3NoPackage) {
        $h3NoPackage.forEach($h3 => {
            $h3.addEventListener("click", function (e) {
                e.preventDefault();

                $h3.classList.toggle('on');

                $(`div.no-package[data-index="${$h3.getAttribute('data-index')}"]`).classList.toggle('on');


                // const $parent = $a.closest('li');
                //
                // $parent.classList.toggle('on');
                // $parent.querySelector('.sub').classList.toggle('on');
            });
        });
    }


    /* search */

    const $btnSearch = $('#btn-search');
    if ($btnSearch) {
        $btnSearch.addEventListener("click", function (e) {
            e.preventDefault();

            $('#frn_search').classList.toggle('on');
        });
    }


    /* sticky menu */
    const $stickyMenu = $('.sticky-menu');
    const $stickyMenuClose = $stickyMenu.querySelector('.close');
    const $stickyMenuOpen = $stickyMenu.querySelector('.open');

    if ($stickyMenuClose) {

        $stickyMenuClose.addEventListener("click", function (e) {
            e.preventDefault();
            $stickyMenu.classList.remove('on');
        });
    }

    if ($stickyMenuOpen) {
        $stickyMenuOpen.addEventListener("click", function (e) {
            e.preventDefault();
            $stickyMenu.classList.add('on');
        });
    }

    /* footer collapse */

    const sitemapHeader = $$('footer nav h6');

    if (sitemapHeader) {
        sitemapHeader.forEach(header => {
            header.addEventListener("click", function (e) {
                e.preventDefault();

                header.classList.toggle('collapse');

                header.closest('section').querySelectorAll('ul:not(.social)').forEach(ul => {


                    ul.classList.toggle('collapse');
                });

            });
        });
    }

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

    window.addEventListener('scroll', function () {

        let scrollBarPosition = window.pageYOffset | document.body.scrollTop;
        const $header = $('header');
        if (scrollBarPosition === 0) {
            $header.classList.remove('fixed');
        } else {
            $header.classList.add('fixed');
        }
    });

    /* timeline */

    if ($('#timeline')) {
        tns({
            container: '#timeline',
            speed: 800,
            items: 1,
            loop: false,
            controls: true,
            slideBy: 1,
            nav: false,
            autoplay: false,
            controlsText: ['<i class="icofont-rounded-left"></i>', '<i class="icofont-rounded-right"></i>'],
            responsive: {
                640: {
                    items: 2
                },
                768: {
                    items: 3
                },
                900: {
                    items: 4
                }
            }
        });
    }

    /* review */

    if ($('#review_slider')) {
        tns({
            container: '#review_slider',
            speed: 800,
            loop: true,
            controls: false,
            slideBy: 1,
            fixedWidth: 200,
            gutter: 100,
            nav: false,
            center: true,
            autoplay: true,
            autoplayButton: false,
            autoplayButtonOutput: false,
            autoplayHoverPause: false
        });
    }

    /* product list */
    if ($('.item-wrapper')) {
        tns({
            container: '.item-wrapper',
            // speed : 800,
            controls: false,
            loop: false,
            items: 1,
            slideBy: 1,
            fixedWidth: 300,
            // mouseDrag:true,
            // autoplayButton: false,
            // autoplayButtonOutput: false,
            // autoplayHoverPause: false,
            navPosition: 'bottom',
            responsive: {
                640: {
                    items: 2
                },
                900: {
                    items: 3
                }
            }
        });
    }

    /* reveal */
    ScrollReveal().reveal('.reveal', {
        delay: 500,
        duration: 700,
        distance: '100px',
        // easing : 'ease-in',
        origin: 'bottom',
        afterReveal: (el) => {
            el.querySelectorAll('.no-rotate').forEach(img => {
                img.classList.remove('no-rotate');
            })
        }
    });

    /* faq */
    const $faq = $('.faq_section .wrapper .wrapper-inner');

    if ($faq) {
        let $inner = $faq.querySelector('.inner');

        $faq.querySelector('.title').classList.toggle('on');

        $inner.classList.toggle('on');
        $inner.querySelectorAll('li').forEach((el,index) => {
            if(index === 0){
                el.classList.toggle('on');
            }
        })
    }

    const faq_category = $$('.faq_section .title');

    if (faq_category) {
        faq_category.forEach(el => {
            el.addEventListener("click", function (e) {
                e.preventDefault();
                el.classList.toggle('on');

                const $parent = el.closest('.wrapper-inner');

                $parent.querySelector('.inner').classList.toggle('on');
                const $ul = $parent.querySelector('.inner ul');

                if($ul){
                    $ul.querySelectorAll('li').forEach((el,index) => {

                        el.classList.remove('on');
                    })
                }
            });
        });
    }

    const faq = $$('.faq_section li h3');
    if (faq) {
        faq.forEach(el => {
            const $parent = el.closest('li');
            el.addEventListener("click", function (e) {
                e.preventDefault();
                $parent.classList.toggle('on');
            });
        });
    }

    if ($$('.financeCollapse')) {
        $$('.financeCollapse').forEach($el => {
            $el.addEventListener('click', (e) => {
                e.preventDefault();
                $$(`.financeCollapsePanel`).forEach($section => {
                    if ($el.getAttribute('data-year') === $section.getAttribute('data-year')) {
                        $section.classList.toggle('on');
                    }
                })
            })
        });
    }


    /* conatact form */

    const $form = $('#frm_contact');

    if ($form) {

        const contactConstraints = {
            name: {
                presence: {
                    allowEmpty: false,
                    message: '^' + $('#ctrl_name').getAttribute('data-error-required')
                },
            },
            email: {
                presence: {
                    allowEmpty: false,
                    message: '^' + $('#ctrl_email').getAttribute('data-error-required')
                },
                email: {message: '^' + $('#ctrl_email').getAttribute('data-error-email')}
            },
            tel: {
                presence: {allowEmpty: false, message: '^' + $('#ctrl_tel').getAttribute('data-error-required')},
            },
            message: {
                presence: {allowEmpty: false, message: '^' + $('#ctrl_message').getAttribute('data-error-required')},
            },
        };

        const saveContact = async (data) => {
            $form.classList.add('ajax_loader');

            try {
                let res = await fetch($form.getAttribute('action'), {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').getAttribute('content')
                    },
                    body: JSON.stringify(data)
                });
                const response = await res.json();

                if (response.status == 'success') {
                    Swal.fire(
                        $form.getAttribute('data-success'),
                        $form.getAttribute('data-success-description'),
                        'success'
                    )
                } else {
                    Swal.fire(
                        $form.getAttribute('data-error'),
                        $form.getAttribute('data-errors-description'),
                        'error'
                    )
                }

                // $$('input,select,textarea',$form).forEach($el => {
                //    $el.value = '';
                // });
            } catch (err) {

                Swal.fire({
                    title: $form.getAttribute('data-error'),
                    text: $form.getAttribute('data-error-description'),
                    icon: 'error',
                })
            }
            $form.classList.remove('ajax_loader');
        }

        $form.addEventListener('submit', async (e) => {
            e.preventDefault();

            $$('cite', $form).forEach($el => $el.remove());
            $$('.controls-wrapper', $form).forEach($el => $el.classList.remove('error'));

            $$('input,select,textarea', $form).forEach($el => $el.classList.remove('error'));

            const data = {
                name: $('#ctrl_name').value,
                email: $('#ctrl_email').value,
                tel: $('#ctrl_tel').value,
                message: $('#ctrl_message').value
            }
            const result = validate(data, contactConstraints);
            if (result) {
                Object.keys(result).map(k => showFieldError($(`#ctrl_${k}`), result[k]));
                return false;
            }

            await saveContact(data);

        });

        ['change'].forEach(evt => {
            $$('input,select,textarea', $form).forEach($el => $el.addEventListener(evt, function (e) {
                e.preventDefault();
                validateField($el, contactConstraints);
            }));
        });

    }
});
