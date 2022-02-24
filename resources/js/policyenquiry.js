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

// const callValidateApi = async (data) => {
//     const response = await fetch(`/${$('html').getAttribute('lang')}/Product/checkDup`, {
//         method: 'post',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'X-CSRF-TOKEN': $('meta[name="csrf-token"]').getAttribute('content')
//         },
//         body: JSON.stringify({...data, CheckType: null})
//     })
//
//     return await response.json();
// }


document.addEventListener("DOMContentLoaded", function () {
    const $form = $('#frm_policyenquiry');
    if ($form) {

        $$('cite', $form).forEach($el => $el.remove());
        $$('.controls-wrapper', $form).forEach($el => $el.classList.remove('error'));
        $$('input,select,textarea', $form).forEach($el => $el.classList.remove('error'));

        $$('button[name="action"]', $form).forEach($el => $el.addEventListener("click", async function (e) {
            e.preventDefault();
            const data = {
                PolicyNo: $('#policyNumber').value
            }
            console.log(data);
            await apiPolicyEnquiry(data);
            return false;
        }));

        const apiPolicyEnquiry = async (data) => {
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

                console.log(response);

                const $summary_section = $('#summary_section');
                $summary_section.innerHTML = `<h3 class="text-primary">ข้อมูลการประกันภัย</h3><br>
                        <div class="two-col">
                            <div><span>แผนประกันภัย : </span><strong> iSafe Extra <span id="form-head">แผน 2</span></strong></div>
                            <div><span>ราคา : </span><strong>875 บาท</strong></div>

                        </div>
                        <br>
                        <h3 class="text-primary">ข้อมูลผู้เอาประกันภัย</h3><br>
                        <div class="two-col">
                            <div><span>ชื่อ : </span><strong>นาย DHONG DHONG</strong></div>
                            <div><span>เพศ : </span><strong>ชาย</strong></div>
                            <div><span>บัตรประจำตัวประชาชน : </span><strong>3821631020932</strong></div>
                            <div><span>วันเกิด : </span><strong>11/01/2527 (38 ปี)</strong></div>
                            <div><span>เบอร์โทรศัพท์มือถือ : </span><strong>0222222222</strong></div>
                            <div><span>อีเมล : </span><strong>pattarapong.k@tuneprotect.com</strong></div>
                            <div class="controls-wrapper full no-lable"><span>ที่อยู่ : </span><strong>xxxxx xxx เขตลาดพร้าว, กรุงเทพมหานคร 10230</strong></div>
                            <div class="controls-wrapper full no-lable"><span>ผู้รับผลประโยชน์ : </span><strong>ทายาทโดยชอบธรรม</strong></div>
                            <div><span>การขอสิทธิ์ลดหย่อนภาษี : </span><strong>ไม่ใช่</strong></div>
                            <div><span>ต้องการรับกรมธรรม์ประกันภัยผ่านช่องทาง : </span><strong>อีเมล</strong></div>
                            <div class="controls-wrapper full no-lable"><span>โรคประจำตัว : </span><strong>ไม่มี</strong></div>
                        </div>`;


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




    }

});
