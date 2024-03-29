import {$, $$} from "./helper";
import Swal from "sweetalert2";
import validate from "validate.js";
import {showFieldError, validateField} from "./validate_form";

import {tns} from "tiny-slider/src/tiny-slider"
import {showTitle} from "./form/productHelper";

document.addEventListener("DOMContentLoaded", function () {
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


    const $frmBloodCheck = $('#frm_bloodcheck');
    if ($frmBloodCheck) {
        let contactConstraints3 = {
            RefCode: {
                presence: {
                    allowEmpty: false,
                    message: '^' + $('#ctrl_ref_code').getAttribute('data-error-required')
                },
            }
        };

        const checkBloodTestCode = async (data) => {

            $frmBloodCheck.classList.add('ajax_loader');
            try {
                let res = await fetch($frmBloodCheck.getAttribute('action'), {
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
                    const $summary_section = $('#summary_section');
                    $summary_section.innerHTML = ``;

                    let respData = response.data;
                    let innerHTML =  ``;
                    respData.map(v => {
                        innerHTML = innerHTML + `<br>
                            <h3 class="text-primary">${$('label[for=policy_info]').innerText}</h3>
                            <div class="two-col">
                               <div><span>${$('label[for=policy_name]').innerText} </span><strong>${v.FDNAME}</strong><span> ${$('label[for=policy_sure_name]').innerText} </span><strong>${v.FDSURNAME}</strong></div>
                               <div><span>${$('label[for=policy_no]').innerText} </span><strong>${v.POLICY_NO}</strong></div>
                               <div><span>${$('label[for=policy_plan]').innerText} </span><strong>${$('label[for=policy_plan_description]').innerText}</span></strong></div>
                               <div><span>${$('label[for=policy_from]').innerText} </span><strong>${v.FDFROMDATE}</strong></div>
                               <div><span>${$('label[for=policy_to]').innerText} </span><strong>${v.FDTODATE}</strong></div>
                               <div><span>Free Blood Test </span><strong>${$('label[for=policy_privilege]').innerText}</strong></div>
                            </div>
                            <br>`;
                    });

                    const $ddlHospital = $('#ctrl_hospital');
                    const hospital = $ddlHospital.options[$ddlHospital.selectedIndex].text;
                    let param = $('#ctrl_ref_code').value + '|' + hospital;
                    $summary_section.innerHTML = innerHTML;
                    const $submit_section = $('#submit_section');
                    $submit_section.innerHTML = `<div class="btn-wrapper"><a id="btnThank" class="btn btn-primary" href="/${$('html').getAttribute('lang')}/BloodTest/UsedBloodTest/${param}">${$('label[for=policy_submit3]').innerText}</a></div>`;

                    toggltField(true);

                } else {
                    Swal.fire(
                        $frmBloodCheck.getAttribute('data-error'),
                        response.message,
                        'error'
                    )
                }
            } catch (err) {
                Swal.fire({
                    title: $frmBloodCheck.getAttribute('data-error'),
                    text: $frmBloodCheck.getAttribute('data-error-description'),
                    icon: 'error',
                })
            }
            $frmBloodCheck.classList.remove('ajax_loader');
        }


        $frmBloodCheck.addEventListener('submit', async (e) => {
            e.preventDefault();
            $$('cite', $frmBloodCheck).forEach($el => $el.remove());
            $$('.controls-wrapper', $frmBloodCheck).forEach($el => $el.classList.remove('error'));
            $$('input,select,textarea', $frmBloodCheck).forEach($el => $el.classList.remove('error'));

            toggltField(false);

            let data = {
                RefCode: $('#ctrl_ref_code').value,
                Lang:$('html').getAttribute('lang')
            }

            const result = validate(data, contactConstraints3);

            if (result) {
                Object.keys(result).map(k => showFieldError($(`#ctrl_${k}`), result[k]));
                return false;
            }

            await checkBloodTestCode(data);

        });

        $$("#ctrl_hospital").forEach($el => {
            $el.addEventListener("change", function (e) {

                let url = $frmBloodCheck.getAttribute('action2') + $('#ctrl_ref_code').value + '|' + $el.options[$el.selectedIndex].text;
                let btnThank = document.getElementById('btnThank');
                btnThank.href = url;

            });
        });
    }
});
