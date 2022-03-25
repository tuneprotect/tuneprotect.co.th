import Swal from "sweetalert2";

require('./bootstrap');
require('./main');
import {tns} from "tiny-slider/src/tiny-slider"
import ScrollReveal from 'scrollreveal'
import {$, $$, scrollToTargetAdjusted} from "./helper"
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
    const $form = $('#frm_policyenquiry');
    if ($form) {
        $$('cite', $form).forEach($el => $el.remove());
        $$('.controls-wrapper', $form).forEach($el => $el.classList.remove('error'));
        $$('input,select,textarea', $form).forEach($el => $el.classList.remove('error'));

        $$('button[name="action"]', $form).forEach($el => $el.addEventListener("click", async function (e) {
            e.preventDefault();
            const data = {
                PolicyNo: $('#policyNumber').value,
                IDCard: $('#IDCard').value,
                InvoiceNo: $('#InvoiceNumber').value,
                RefCode: $('#RefCode').value,
            }

            await apiPolicyEnquiry(data);

            return false;
        }));

        const apiPolicyEnquiry = async (data) => {
            $form.classList.add('ajax_loader');
            const $summary_section = $('#summary_section');
            $summary_section.innerHTML = ``;
            try {
                let res = await fetch(`/${$('html').getAttribute('lang')}/PolicyEnquiry/CheckPolicyEnquiry`, {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').getAttribute('content')
                    },
                    body: JSON.stringify(data)
                });

                let group_p = document.getElementById("group_p");

                const response = await res.json();
                let respData = response.data;
                let innerHTML =  ``;
                let NumOfPol = 1;
                if (response.status) {
                    innerHTML = `<h2 class="text-primary">จำนวนกรมธรรม์ที่ค้นพบ ${response.message} กรมธรรม์</h2><br>`;
                    respData.map(v => {
                        innerHTML = innerHTML + `<u><h3 class="text-primary">${NumOfPol}. ข้อมูลการประกันภัย</h3></u><br>
                            <div class="two-col">
                                <div><span>เลขกรมธรรม์ : </span><strong>${v.POLICY_NO}</strong></div>
                                <div><span>วันที่ออกกรมธรรม์ : </span><strong>${v.FDISSUEDATE}</strong></div>
                                <div><span>แผนประกันภัย : </span><strong>${v.PLANNAME}</span></strong></div>
                                <div><span>ราคา : </span><strong>${v.FDPAYAMT} บาท</strong></div>
                                <div><span>วันที่เริ่มคุ้มครอง : </span><strong>${v.FDFROMDATE}</strong></div>
                                <div><span>วันที่สิ้นสุดความคุ้มครอง : </span><strong>${v.FDTODATE}</strong></div>
                                <div><span>เลขอ้างอิง (Ref Code.) : </span><strong>${v.REFCODE}</strong></div>
                                <div><span>เลขอินวอยซ์ : </span><strong>${v.FDINVOICE}</strong></div>
                                <div><span>สถานะ : </span><strong>${v.ACTIVE}</strong></div>
                                ${group_p.value == 'tune' ? `<div class="btn-wrapper"><a class="btn btn-primary" target="_blank" href="/${$('html').getAttribute('lang')}/PolicyEnquiry/Unlock/${v.FDNATIONALID}">Unlock</a></div>` : ''}

                            </div>
                            <br>
                            <h3 class="text-primary">ข้อมูลผู้เอาประกันภัย</h3><br>
                            <div class="two-col">
                                <div><span>ชื่อ : </span><strong>${v.FDNAME}  ${v.FDSURNAME}</strong></div>
                                <div><span>เพศ : </span><strong>${v.FDSEX === 'F' ? 'หญิง' : 'ชาย'}</strong></div>
                                <div><span>บัตรประจำตัวประชาชน : </span><strong>${v.FDNATIONALID}</strong></div>
                                <div><span>วันเกิด : </span><strong>${v.FDHBD}</strong></div>
                                <div><span>เบอร์โทรศัพท์มือถือ : </span><strong>${v.FDTELEPHONE}</strong></div>
                                <div><span>อีเมล : </span><strong>${v.FDEMAIL}</strong></div>
                                <div class="controls-wrapper full no-lable"><span>ที่อยู่ : </span><strong>${v.FDADDR_NUM}</strong></div>
                                <div class="controls-wrapper full no-lable"><span>ผู้รับผลประโยชน์ : </span><strong>${v.FDBENEFIT}</strong></div>
                            </div>
                            <br>`;
                        NumOfPol= NumOfPol+1;
                    });
                }else{
                    innerHTML = `<h3 class="text-primary">ไม่พบข้อมูล</h3><br>`;
                }
                $summary_section.innerHTML = innerHTML;

                // $form.classList.remove('ajax_loader');
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

// <br>
//     <h3 className="text-primary">ข้อมูลการเดินทาง</h3><br>
//     <div className="two-col">
//         <div><span>ต้นทาง : </span><strong>${v.FDDESTFROM_DESC}</strong></div>
//         <div><span>ปลายทาง : </span><strong>${v.FDDESTTO_DESC}</strong></div>
//     </div>
//<div><button class="btn btn-primary" name="unlock" type="button" value=${v.POLICY_NO}>unlock</button></div>

// <div><span>ลิ้งกรมธรรม์ (กรมธรรม์ที่รองรับการดูแบบออนไลน์เท่านั้น) : </span><strong><a href="${v.PUBLICLINKPOLICY}" target="_blank" title=""><u>คลิก</u></a></strong></div>

//
// const apiCheckPolicyEnquiry = async (data) => {
//     $form.classList.add('ajax_loader');
//     const $policy_section = $('#policy_section');
//     $policy_section.innerHTML = ``;
//     try {
//         let res = await fetch(`/${$('html').getAttribute('lang')}/PolicyEnquiry/CheckPolicyEnquiry`, {
//             method: 'post',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').getAttribute('content')
//             },
//             body: JSON.stringify(data)
//         });
//         const response = await res.json()
//         let filteredData = response.data;
//         let innerHTML =  `<h3 class="text-primary">รายการกรมธรรม์ที่ยังมีความคุ้มครอง</h3>`;
//         if (response.status) {
//             filteredData.map(v => {
//                 innerHTML = innerHTML +  `<div class="two-col">
//                 <div><span>เลขกรมธรรม์ : </span><strong>${v.DOC_NBR}</span></strong></div>
//                 <div onclick='alert("1");'><span>รายละเอียดกรมธรรม์ : </span><strong><a>คลิก</a></span></strong></div>
//                 <div><span>วันที่เริ่มคุ้มครอง : </span><strong>${v.POLM_EDATE}</span></strong></div>
//                 <div><span>วันที่สิ้นสุดความคุ้มครอง : </span><strong>${v.POLM_XDATE}</span></strong></div>
//                 </div><br>`;
//             });
//
//         }else{
//             innerHTML = `<h3 class="text-primary">ไม่พบข้อมูล</h3><br>`;
//         }
//         $policy_section.innerHTML = innerHTML;
//         $form.classList.remove('ajax_loader');
//     } catch (err) {
//         Swal.fire(
//             {
//                 title: `<i class="icofont-alarm" style="color:red"></i>`,
//                 html: `<strong>${$form.getAttribute('data-error')}</strong><br>${$form.getAttribute('data-error-description')}`,
//                 confirmButtonText: $form.getAttribute('data-error-button'),
//             }
//         )
//     }
// }


// $summary_section.innerHTML = `<h3 class="text-primary">ข้อมูลการประกันภัย</h3><br>
//     <div class="two-col">
//         <div><span>เลขกรมธรรม์ : </span><strong>${respData.POLICY_NO}</strong></div>
//         <div><span>วันที่ออกกรมธรรม์ : </span><strong>${respData.FDISSUEDATE}</strong></div>
//         <div><span>แผนประกันภัย : </span><strong>${respData.PLANNAME}</span></strong></div>
//         <div><span>ราคา : </span><strong>${respData.FDPAYAMT} บาท</strong></div>
//         <div><span>วันที่เริ่มคุ้มครอง : </span><strong>${respData.FDFROMDATE}</strong></div>
//         <div><span>วันที่สิ้นสุดความคุ้มครอง : </span><strong>${respData.FDTODATE}</strong></div>
//         <div><span>เลขอ้างอิง : </span><strong>${respData.REFCODE}</strong></div>
//         <div><span>เลขอินวอยซ์ : </span><strong>${respData.FDINVOICE}</strong></div>
//     </div>
//     <br>
//     <h3 class="text-primary">ข้อมูลผู้เอาประกันภัย</h3><br>
//     <div class="two-col">
//         <div><span>ชื่อ : </span><strong>${respData.FDNAME}  ${respData.FDSURNAME}</strong></div>
//         <div><span>เพศ : </span><strong>${respData.FDSEX === 'F' ? 'หญิง' : 'ชาย'}</strong></div>
//         <div><span>บัตรประจำตัวประชาชน : </span><strong>${respData.FDNATIONALID}</strong></div>
//         <div><span>วันเกิด : </span><strong>${respData.FDHBD} (${respData.FDAGE} ปี ณ วันออกกรมธรรม์)</strong></div>
//         <div><span>เบอร์โทรศัพท์มือถือ : </span><strong>${respData.FDTELEPHONE}</strong></div>
//         <div><span>อีเมล : </span><strong>${respData.FDEMAIL}</strong></div>
//         <div class="controls-wrapper full no-lable"><span>ที่อยู่ : </span><strong>${respData.FDADDR_NUM}</strong></div>
//         <div class="controls-wrapper full no-lable"><span>ผู้รับผลประโยชน์ : </span><strong>${respData.FDBENEFIT}</strong></div>
//     </div>
//     <br>
//     <h3 class="text-primary">ข้อมูลการเดินทาง</h3><br>
//     <div class="two-col">
//         <div><span>ต้นทาง : </span><strong>${respData.FDDESTFROM_DESC}</strong></div>
//         <div><span>ปลายทาง : </span><strong>${respData.FDDESTTO_DESC}</strong></div>
//     </div>`;
