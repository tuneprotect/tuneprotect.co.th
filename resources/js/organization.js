import {$, $$} from "./helper"
document.addEventListener("DOMContentLoaded", function () {

    const office = $$(".officer");

    office.forEach($el => {
        $el.addEventListener('click', (e) => {
            e.preventDefault();
            $('.page-overlay').style.display = 'flex';
            $('#sp_image').src = $el.getAttribute('data-img');
            $('#span_name').innerHTML = $el.getAttribute('data-name');
            $('#span_position').innerHTML = $el.getAttribute('data-position');
            $('#span_department').innerHTML = $el.getAttribute('data-department');
        }, true);
    });


    const close = $(".page-overlay .close");

    close.addEventListener('click', (e) => {
        e.preventDefault();
        $('.page-overlay').style.display = 'none';
    }, true);

});
