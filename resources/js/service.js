import {$, $$} from "./helper";
import Swal from "sweetalert2";
import validate from "validate.js";
import {showFieldError, validateField} from "./validate_form";

import {tns} from "tiny-slider/src/tiny-slider"

document.addEventListener("DOMContentLoaded", async () => {

    const toggltField = (isShow) => {
        $$('.hideField').forEach($el => {
            if (isShow) {
                $el.style.removeProperty('display');
            } else {
                $el.style.display = 'none';
            }
        });
    }

    toggltField(false);

    const $formService = $('#frm_service_contact');
    if ($formService) {
        let contactConstraints = {
            policy: {
                presence: {
                    allowEmpty: false,
                    message: '^' + $('#ctrl_policy').getAttribute('data-error-required')
                },
            },
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
            consent: {
                presence: {
                    allowEmpty: false,
                    message: '^' + $('#ctrl_consent').getAttribute('data-error-required')
                },
            },
        };

        const checkPolicy = async (data) => {
            $formService.classList.add('ajax_loader');

            try {
                let res = await fetch($formService.getAttribute('data-check-action'), {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').getAttribute('content')
                    },
                    body: JSON.stringify(data)
                });
                const response = await res.json();

                if (response.status) {
                    toggltField(true);
                    $('#ctrl_name').value = response.data.Firstname + ' ' + response.data.Lastname;
                    $('#ctrl_email').value = response.data.Email;
                    $('#ctrl_tel').value = response.data.Telephone;
                } else {
                    Swal.fire(
                        $formService.getAttribute('data-error'),
                        $formService.getAttribute('data-errors-no-policy-found'),
                        'error'
                    )
                }

                // $$('input,select,textarea',$formService).forEach($el => {
                //    $el.value = '';
                // });
            } catch (err) {
                Swal.fire({
                    title: $formService.getAttribute('data-error'),
                    text: $formService.getAttribute('data-error-description'),
                    icon: 'error',
                })
            }
            $formService.classList.remove('ajax_loader');
        }
        const saveContact = async (data) => {
            $formService.classList.add('ajax_loader');

            try {
                let res = await fetch($formService.getAttribute('action'), {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').getAttribute('content')
                    },
                    body: JSON.stringify(data)
                });
                const response = await res.json();

                if (response.status) {
                    Swal.fire(
                        $formService.getAttribute('data-success'),
                        $formService.getAttribute('data-success-description'),
                        'success'
                    )
                    toggltField(false);
                    $('.page-overlay').style.display = 'none';
                } else {
                    Swal.fire(
                        $formService.getAttribute('data-error'),
                        $formService.getAttribute('data-errors-description'),
                        'error'
                    )
                }

                // $$('input,select,textarea',$formService).forEach($el => {
                //    $el.value = '';
                // });
            } catch (err) {
                Swal.fire({
                    title: $formService.getAttribute('data-error'),
                    text: $formService.getAttribute('data-error-description'),
                    icon: 'error',
                })
            }
            $formService.classList.remove('ajax_loader');
        }

        $formService.addEventListener('submit', async (e) => {
            e.preventDefault();

            $$('cite', $formService).forEach($el => $el.remove());
            $$('.controls-wrapper', $formService).forEach($el => $el.classList.remove('error'));

            $$('input,select,textarea', $formService).forEach($el => $el.classList.remove('error'));

            let data = {
                policy: $('#ctrl_policy').value,
                name: $('#ctrl_name').value,
                email: $('#ctrl_email').value,
                tel: $('#ctrl_tel').value,
                message: $('#ctrl_message').value,
                consent: $('#ctrl_consent').checked ? '1' : '',
            }

            const result = validate(data, contactConstraints);

            if (result) {
                Object.keys(result).map(k => showFieldError($(`#ctrl_${k}`), result[k]));
                return false;
            }

            await saveContact(data);

        });

        ['change'].forEach(evt => {
            $$('input,select,textarea', $formService).forEach($el => $el.addEventListener(evt, function (e) {
                e.preventDefault();
                validateField($el, contactConstraints);
            }));
        });


        $('#ctrl_policy').addEventListener('change', async (e) => {
            await checkPolicy({
                policy: $('#ctrl_policy').value
            })
        });

        $$('.btn-open-popup').forEach($el =>
            $el.addEventListener('click', (e) => {
                e.preventDefault();
                $('.page-overlay').style.display = 'flex';
            }, true)
        )

        $(".page-overlay .close").addEventListener('click', (e) => {
            e.preventDefault();
            $('.page-overlay').style.display = 'none';
        }, true);
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

    const $frmBloodtest = $('#frm_bloodtest');
    if ($frmBloodtest){
        let contactConstraints2 = {
            IDCard: {
                presence: {
                    allowEmpty: false,
                    message: '^' + $('#ctrl_card_id').getAttribute('data-error-required')
                },
            },
            Policy_No: {
                presence: {
                    allowEmpty: false,
                    message: '^' + $('#ctrl_policy_no').getAttribute('data-error-required')
                },
            },
            Mobile: {
                presence: {
                    allowEmpty: false,
                    message: '^' + $('#ctrl_mobile').getAttribute('data-error-required')
                },
            }

        };

        $frmBloodtest.addEventListener('submit', async (e) => {
            e.preventDefault();
            $$('cite', $frmBloodtest).forEach($el => $el.remove());
            $$('.controls-wrapper', $frmBloodtest).forEach($el => $el.classList.remove('error'));
            $$('input,select,textarea', $frmBloodtest).forEach($el => $el.classList.remove('error'));

            let data = {
                IDCard: $('#ctrl_card_id').value,
                Policy_No: $('#ctrl_policy_no').value,
                Mobile: $('#ctrl_mobile').value,
                Lang:$('html').getAttribute('lang'),
            }

            const result = validate(data, contactConstraints2);

            if (result) {
                Object.keys(result).map(k => showFieldError($(`#ctrl_${k}`), result[k]));
                return false;
            }

            // console.log(data);
            await sendBloodTestOTP(data);

        });

        const sendBloodTestOTP = async (data) => {
            $frmBloodtest.classList.add('ajax_loader');

            console.log(data);

            try {
                let res = await fetch($frmBloodtest.getAttribute('action'), {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').getAttribute('content')
                    },
                    body: JSON.stringify(data)
                });
                const response = await res.json();

                if (response.status) {
                    Swal.fire(
                        "Thank you",
                        $frmBloodtest.getAttribute('data-success-description'),
                        'success'
                    )
                    toggltField(false);
                    $('.page-overlay').style.display = 'none';

                    $('#ctrl_card_id').value ='';
                    $('#ctrl_policy_no').value='';
                    $('#ctrl_mobile').value='';

                } else {
                    Swal.fire(
                        $frmBloodtest.getAttribute('data-error'),
                        response.message,
                        'error'
                    )
                }
            } catch (err) {
                Swal.fire({
                    title: $frmBloodtest.getAttribute('data-error'),
                    text: $frmBloodtest.getAttribute('data-error-description'),
                    icon: 'error',
                })
            }
            $frmBloodtest.classList.remove('ajax_loader');
        }
    }
});
