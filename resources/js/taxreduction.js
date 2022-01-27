import Swal from "sweetalert2";

require('./bootstrap');
require('./main');
import {tns} from "tiny-slider/src/tiny-slider"
import ScrollReveal from 'scrollreveal'
import {$, $$} from "./helper"
import validate from "validate.js";
import {showFieldError, validateField} from "./validate_form";

document.addEventListener("DOMContentLoaded", function () {
    const $form = $('#frm_taxreduction');
    if ($form) {
        let contactConstraints = {
            card_id: {
                presence: {
                    allowEmpty: false,
                    message: '^' + $('#ctrl_card_id').getAttribute('data-error-required')
                },
            }
        };

        const saveData = async (data) => {
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

                console.log(data);
                console.log(response);


                if (response.status == 'accept') {
                    Swal.fire(
                        {
                            icon:'success',
                            title: `${$form.getAttribute('data-success')}`,
                            html: `${$form.getAttribute('data-success-description')}<br><a href="/" style="display: inline-block;color: #FFFFFF" class="swal2-confirm swal2-styled">${$form.getAttribute('data-success-button')}</a>`,
                            showConfirmButton: false,
                        }
                    )
                }else if(response.status == 'decline')
                {
                    Swal.fire(
                        {
                            title: `<i class="icofont-alarm" style="color:red"></i>`,
                            html: `<strong>${$form.getAttribute('data-error')}</strong><br>${$form.getAttribute('data-success-description')}`,
                            confirmButtonText: $form.getAttribute('data-success-button'),
                        }
                        )
                }
                else {
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

        $form.addEventListener('submit', async (e) => {
            e.preventDefault();
            $$('cite', $form).forEach($el => $el.remove());
            $$('.controls-wrapper', $form).forEach($el => $el.classList.remove('error'));
            $$('input,select,textarea', $form).forEach($el => $el.classList.remove('error'));

            let data = {
                name: $('#ctrl_name').value,
                card_id: $('#ctrl_card_id').value,
                tax_id: $('#ctrl_tax_id').value,
                action:''
            }

            // console.log(document.getElementById("action").value);

            // const result = validate(data, contactConstraints);
            // console.log(result);
            // if (result) {
            //     Object.keys(result).map(k => showFieldError($(`#ctrl_${k}`), result[k]));
            //     console.log('false');
            //     return false;
            // }

            await saveData(data);


        });

        ['change'].forEach(evt => {
            $$('input,select,textarea', $form).forEach($el => $el.addEventListener(evt, function (e) {
                e.preventDefault();
                validateField($el, contactConstraints);
            }));
        });

    }

});
