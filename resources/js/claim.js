import {$, setCookie, getCookie} from "./helper";
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
        for (const [i, rowData] of data.entries()) {
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
    const isBase64 = (str) => {
        try {
            return btoa(atob(str)) == str;
        } catch (err) {
            return false;
        }
    }
    const checkQueryString = () => {
        const parsedUrl = new URL(window.location.href);
        if (isBase64(parsedUrl.searchParams.get("claim")) !== false) {
            let value = atob(parsedUrl.searchParams.get("claim"));
            $ctrl_category.value = value;
            appendSelectOption(value, $ctrl_detail);
        } else {
            appendSelectOption('', $ctrl_detail);
        }

        if (isBase64(parsedUrl.searchParams.get("detail")) !== false) {
            $ctrl_detail.value = atob(parsedUrl.searchParams.get("detail"));
        }
    }

    const setQueryString = (name, value) => {
        const url = new URL(window.location.href);
        const search_params = url.searchParams;
        const decode_value = btoa(value);
        const decode_null = btoa(null);
        if (decode_value !== decode_null) {
            if (url.searchParams.get(name)) {
                search_params.set(name, decode_value);
            } else {
                search_params.append(name, decode_value);
            }
            url.search = search_params.toString();
            let new_url = url.toString();
            window.history.pushState({path: new_url}, '', new_url);
        }

        if (name === 'claim' && decode_value === decode_null) {
            url.search = '';
            let new_url = url.toString();
            window.history.pushState({path: new_url}, '', new_url);
        }
    }

    if ($frm) {
        $frm.addEventListener('submit', async (e) => {
            e.preventDefault();
        });
    }

    if ($ctrl_category) {
        $ctrl_category.addEventListener('change', async (e) => {
            e.preventDefault();
            $frm.classList.add('ajax_loader');
            clearDropDown($ctrl_detail);
            appendSelectOption($ctrl_category.value, $ctrl_detail);
            if ($ctrl_category.value !== '') {
                setQueryString('claim', $('#ctrl_category').value);
            } else {
                setQueryString('claim', null);
            }
            $frm.classList.remove('ajax_loader');
        });
    }

    if ($ctrl_detail) {
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
            if ($ctrl_detail.value !== '') {
                setQueryString('detail', $ctrl_detail.value);
            } else {
                setQueryString('detail', null);
            }
            window.location.href = $('#ctrl_detail').value;
        });
    }

    checkQueryString();

});
