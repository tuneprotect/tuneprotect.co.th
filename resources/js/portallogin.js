import Swal from "sweetalert2";

require('./bootstrap');
require('./main');
import {tns} from "tiny-slider/src/tiny-slider"
import ScrollReveal from 'scrollreveal'
import {$, $$} from "./helper"
import validate from "validate.js";
import {showFieldError, validateField} from "./validate_form";
import {validatePolicy} from "./form/productHelper";


document.addEventListener("DOMContentLoaded", function () {
    const $form = $('#frm_login');
    if ($form) {
        let myEle = document.getElementById("status");
        if(myEle){
            if(!myEle.value)
            {
                Swal.fire({
                    title: `<i class="icofont-alarm" style="color:red"></i>`,
                    html: `<strong>${$form.getAttribute('data-error')}</strong><br>${document.getElementById("message").value}`,
                    confirmButtonText: $form.getAttribute('data-error-button'),
                })
            }
        }
    }
    // if ($form) {
    //     let contactConstraints = {
    //         username: {
    //             presence: {
    //                 allowEmpty: false,
    //                 message: "^" + $('#ctrl_username').getAttribute('data-error-username')
    //             }
    //         }
    //         ,password: {
    //             presence: {
    //                 allowEmpty: false,
    //                 message: "^" + $('#ctrl_password').getAttribute('data-error-password')
    //             }
    //         }
    //     };
    //
    //     $$('button[name="action"]', $form).forEach($el => $el.addEventListener("click", async function (e) {
    //         e.preventDefault();
    //         const data = {
    //             username: $('#ctrl_username').value,
    //             password: $('#ctrl_password').value,
    //         }
    //
    //         $$('cite', $form).forEach($el => $el.remove());
    //         $$('.controls-wrapper', $form).forEach($el => $el.classList.remove('error'));
    //         $$('input,select,textarea', $form).forEach($el => $el.classList.remove('error'));
    //
    //         const result = validate(data, contactConstraints);
    //         if (result) {
    //             Object.keys(result).map(k => showFieldError($(`#ctrl_${k}`), result[k]));
    //             return false;
    //         }
    //
    //         await apiUserPortalLogin(data);
    //
    //         return false;
    //     }));
    //
    //
    //     const apiUserPortalLogin = async (data) => {
    //         $form.classList.add('ajax_loader');
    //         try {
    //             let res = await fetch(`/${$('html').getAttribute('lang')}/PortalLogin/userPortalLogin`, {
    //                 method: 'post',
    //                 headers: {
    //                     'Accept': 'application/json',
    //                     'Content-Type': 'application/json',
    //                     'X-CSRF-TOKEN': $('meta[name="csrf-token"]').getAttribute('content')
    //                 },
    //                 body: JSON.stringify(data)
    //             });
    //             const response = await res.json()
    //             let filteredData = response.data;
    //             if (response.status) {
    //                 $form.classList.remove('ajax_loader');
    //                 await fetch(`/${$('html').getAttribute('lang')}/PortalLogin/LoginPass`);
    //             }else{
    //                 Swal.fire(
    //                     {
    //                         title: `<i class="icofont-alarm" style="color:red"></i>`,
    //                         html: `<strong>${$form.getAttribute('data-error')}</strong><br>${response.message}`,
    //                         confirmButtonText: $form.getAttribute('data-error-button'),
    //                     }
    //                 )
    //             }
    //         } catch (err) {
    //             Swal.fire(
    //                 {
    //                     title: `<i class="icofont-alarm" style="color:red"></i>`,
    //                     html: `<strong>${$form.getAttribute('data-error')}</strong><br>${$form.getAttribute('data-error-description')}`,
    //                     confirmButtonText: $form.getAttribute('data-error-button'),
    //                 }
    //             )
    //         }
    //
    //         $form.classList.remove('ajax_loader');
    //
    //     }
    //
    //
    // }

});
