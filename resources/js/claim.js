import {$} from "./helper";
import Swal from "sweetalert2";

document.addEventListener("DOMContentLoaded", async () => {

    const $locale = $('html').getAttribute('lang');
    const $frm = $('#frm_claim');
    const $ctrl_category = $('#ctrl_category');
    const $ctrl_detail = $('#ctrl_detail');

    const data = JSON.parse($('#div_result').innerHTML);
    $('#div_result').remove();

    const clearDropDown = (selector) => {
        while (selector.firstChild) {
            selector.removeChild(selector.firstChild);
        }
    }

    const appendSelectOption = (cat_id, selector) => {

        let opt_select = document.createElement('option');
        opt_select.value = '';
        opt_select.innerHTML = $frm.getAttribute('data-select');
        selector.appendChild(opt_select);
        for (const [i,rowData] of data.entries()) {
            if (rowData.cat_id === cat_id) {
                if ((rowData.locales[$locale].title).toLowerCase() !== 'vsure') {
                    const opt = document.createElement('option');
                    opt.value = '/' + $locale + '/claim/' + rowData.friendly_url;
                    opt.dataset.gtm = 'claim-page-' + rowData.friendly_url;
                    opt.innerHTML = rowData.locales[$locale].title;
                    selector.appendChild(opt);
                }
            }
        }
    }

    if($frm){
        $frm.addEventListener('submit', async (e) => {
            e.preventDefault();
        });
    }

    if($ctrl_category){
        $ctrl_category.addEventListener('change', async (e) => {
            e.preventDefault();
            $frm.classList.add('ajax_loader');
            clearDropDown($ctrl_detail);
            appendSelectOption($('#ctrl_category').value, $ctrl_detail);
            $frm.classList.remove('ajax_loader');
        });
    }

    if($ctrl_detail){
        $ctrl_detail.addEventListener('change', async (e) => {
            let str = $ctrl_detail.value;
            if (str.length <= 0) {
                Swal.fire({
                    title: $frm.getAttribute('data-error'),
                    text: $frm.getAttribute('data-error-description'),
                    icon: 'error',
                })
                return false;
            }
            window.location.href = $('#ctrl_detail').value;
        });
    }

});
