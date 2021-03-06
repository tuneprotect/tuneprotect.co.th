import {$, $$} from "./helper";
import Swal from "sweetalert2";
import validate from "validate.js";
import {showFieldError, validateField} from "./validate_form";

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
});
