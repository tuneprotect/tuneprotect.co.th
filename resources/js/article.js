require('./main');
import {$, $$} from "./helper"

document.addEventListener("DOMContentLoaded", function () {

    const article_item = $$(".article_highlight_section .article_item");

    article_item.forEach((item, i) => {
        if (i > 0) {
            const imgBox = $('.img', item);
            const img = $('img', item);
            imgBox.style.backgroundImage = "url('" + img.getAttribute('src') + "')";
            img.classList.add('hide');
        }
    });


});
