import Swal from "sweetalert2";

require('./bootstrap');
require('./main');
import {tns} from "tiny-slider/src/tiny-slider"
import ScrollReveal from 'scrollreveal'
import {$, $$} from "./helper"
import validate from "validate.js";
import {showFieldError, validateField} from "./validate_form";
import {validatePolicy} from "./form/productHelper";

validate.validators.idcard = function (value, options, key, attributes) {

    if (!value) {
        return "^" + $('#ctrl_card_id').getAttribute('data-error-idcard');
    }

    if (value.length !== 13) {
        return "^" + $('#ctrl_card_id').getAttribute('data-error-idcard');
    }

    for (var i = 0, sum = 0; i < 12; i++) {
        sum += parseFloat(value.charAt(i)) * (13 - i);
    }
    const result = ((11 - sum % 11) % 10 === parseFloat(value.charAt(12)));
    if (!result) {
        return "^" + $('#ctrl_card_id').getAttribute('data-error-idcard');
    }
};


document.addEventListener("DOMContentLoaded", function () {
    const $form = $('#frm_taxdeduction');
    if ($form) {
        let contactConstraints = {
            card_id: {
                presence: {
                    allowEmpty: false,
                    message: "^" + $('#ctrl_card_id').getAttribute('data-error-required')
                },
                length: {
                    is: 13,
                    message: "^" + $('#ctrl_card_id').getAttribute('data-error-idcard')
                },
                format: {
                    pattern: /^[0-9]{13}$/,
                    message: "^" + $('#ctrl_card_id').getAttribute('data-error-idcard')
                },
                idcard: {
                    message: "^" + $('#ctrl_card_id').getAttribute('data-error-idcard')
                }
            },
            email: {
                presence: {
                    allowEmpty: false,
                    message: "^" + $('#ctrl_email').getAttribute('data-error-email')
                }
            }
        };

        const apiTaxDeduction = async (data) => {
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

                if (response.status == 'success' && data.action == 'accept') {
                    Swal.fire(
                        {
                            icon: 'success',
                            title: `${$form.getAttribute('data-success')}`,
                            html: `${$form.getAttribute('data-success-description')}<br><a href="/" style="display: inline-block;color: #FFFFFF" class="swal2-confirm swal2-styled">${$form.getAttribute('data-success-button')}</a>`,
                            showConfirmButton: false,
                        }
                    )
                    $('#ctrl_name').value = '';
                    $('#ctrl_card_id').value = '';
                    $('#ctrl_tax_id').value = '';
                    $('#ctrl_mobile').value = '';
                    $('#ctrl_email').value = '';

                } else if (response.status == 'success' && data.action == 'decline') {
                    Swal.fire(
                        {
                            icon: 'success',
                            title: `${$form.getAttribute('data-error')}`,
                            html: `${$form.getAttribute('data-success-description')}<br><a href="/" style="display: inline-block;color: #FFFFFF" class="swal2-confirm swal2-styled">${$form.getAttribute('data-success-button')}</a>`,
                            showConfirmButton: false,
                        }
                    )

                    $('#ctrl_name').value = '';
                    $('#ctrl_card_id').value = '';
                    $('#ctrl_tax_id').value = '';
                    $('#ctrl_mobile').value = '';
                    $('#ctrl_email').value = '';

                } else if(response.message == 'duplicate')
                {
                    Swal.fire(
                        {
                            title: `<i class="icofont-alarm" style="color:red"></i>`,
                            html: `<strong>${$form.getAttribute('data-duplicate')}</strong><br>${$form.getAttribute('data-success-description')}`,
                            confirmButtonText: $form.getAttribute('data-error-button'),
                        }
                    )
                } else {
                    Swal.fire(
                        {
                            title: `<i class="icofont-alarm" style="color:red"></i>`,
                            html: `<strong>${$form.getAttribute('data-error')}</strong><br>${$form.getAttribute('data-error-description')}`,
                            confirmButtonText: $form.getAttribute('data-error-button'),
                        }
                    )
                }
            } catch (err) {
                Swal.fire(
                    {
                        title: `<i class="icofont-alarm" style="color:red"></i>`,
                        html: `<strong>${$form.getAttribute('data-error')}</strong><br>${$form.getAttribute('data-error-description')}`,
                        confirmButtonText: $form.getAttribute('data-error-button'),
                    }
                )
            }

            $form.classList.remove('ajax_loader');
        }


        $$('button[name="action"]', $form).forEach($el => $el.addEventListener("click", async function (e) {
            e.preventDefault();

            const data = {
                action: e.target.value,
                name: $('#ctrl_name').value,
                card_id: $('#ctrl_card_id').value,
                tax_id: $('#ctrl_tax_id').value,
                email: $('#ctrl_email').value,
                mobile: $('#ctrl_mobile').value,
            }

            $$('cite', $form).forEach($el => $el.remove());
            $$('.controls-wrapper', $form).forEach($el => $el.classList.remove('error'));
            $$('input,select,textarea', $form).forEach($el => $el.classList.remove('error'));

            const result = validate(data, contactConstraints);
            if (result) {
                Object.keys(result).map(k => showFieldError($(`#ctrl_${k}`), result[k]));
                console.log('false');
                return false;
            }

            await apiTaxDeduction(data);

            return false;
        }));

        ['change'].forEach(evt => {
            $$('input,select,textarea', $form).forEach($el => $el.addEventListener(evt, function (e) {
                e.preventDefault();
                validateField($el, contactConstraints);

                if (['ctrl_card_id'].includes($el.id)) {
                    $('#ctrl_tax_id').value = $('#ctrl_card_id').value;
                }

            }));
        });

    }

});
