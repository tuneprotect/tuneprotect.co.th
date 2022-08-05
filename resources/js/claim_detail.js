import {$,$$} from "./helper";

document.addEventListener("DOMContentLoaded", () => {
    if ($$('.claimCollapse')) {
        $$('.claimCollapse').forEach($el => {
            const $parent = $el.closest('li');
            $el.addEventListener('click', (e) => {
                e.preventDefault();
                Array.from($$('.claim-menu li')).forEach((el) => { el.classList.remove('on') });
                Array.from($$('.claimCollapsePanel')).forEach((el) => { el.classList.remove('on') });

                $$(`.claimCollapsePanel`).forEach($section => {
                    if ($el.getAttribute('data-index') === $section.getAttribute('data-index')) {
                        $parent.classList.toggle('on');
                        $section.classList.toggle('on');
                        const node = $section.cloneNode(true);
                        document.getElementById('claim_result').innerHTML = "";
                        $('#claim_result').appendChild(node);
                    }
                })
            })
        });
    }
    if($('#claim_menu li:first-child h2')){
        $('#claim_menu li:first-child h2').click();
    }
});
