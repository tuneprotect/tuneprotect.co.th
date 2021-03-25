import {$, $$, getZipcodeData, locale, scrollToTargetAdjusted} from "./helper"
import {addDays, addYears, subDays, format, parseISO} from 'date-fns';
import flatpickr from "flatpickr";

require('./main');

document.addEventListener("DOMContentLoaded", async () => {

    const table = $("#table-detail");
    const HOVER_CLASS = 'hovered';

    let hovered;
    let expandDetail = false;

    if (table) {
        table.addEventListener('mouseover', function (e) {
            if (e.target.tagName.toLowerCase() === 'td') {
                const index = e.target.cellIndex;

                hovered && hovered.forEach(function (cell) {
                    cell.classList.remove(HOVER_CLASS);
                });

                hovered = Array.prototype.map.call(
                    table.rows,
                    function (row) {
                        var i = index;
                        while (!cell && i >= 0) {
                            var cell = row.cells[i];
                            i -= 1;
                        }
                        return cell;
                    }
                );

                hovered.forEach(function (cell) {
                    cell.classList.add(HOVER_CLASS);
                });
            }
        }, true);

        table.addEventListener('mouseout', function (e) {
            hovered && hovered.forEach(function (cell) {
                cell.classList.remove(HOVER_CLASS);
            });
            hovered = null;
        }, true);
    }

    /* Choose Plan */

    const $btnChoosePlan = $$('.btn-choose-plan');
    if ($btnChoosePlan) {
        $btnChoosePlan.forEach($btn => {
            $btn.addEventListener('click', function (e) {
                e.preventDefault();

                const index = $btn.getAttribute('data-index');
                const td = $$('#table-detail td');

                $btnChoosePlan.forEach(el => {
                    el.classList.remove('on');
                })

                $btn.classList.add('on');

                td.forEach(el => {
                    if (el.getAttribute('data-index') === index) {
                        el.classList.remove('hide');
                    } else {
                        el.classList.add('hide');
                    }
                });
            }, true);
        });
    }

    /* more detail */
    const $btnMore = $('#btn-more');
    if ($btnMore) {
        $btnMore.addEventListener("click", function (e) {
            e.preventDefault();
            expandDetail = !expandDetail;
            if (expandDetail) {
                $$('#table-detail tbody tr').forEach(row => {
                    row.style.display = 'table-row';
                    $btnMore.innerText = $btnMore.getAttribute('data-collapse');
                    $btnMore.classList.add("expand");
                });
            } else {
                $$('#table-detail tbody tr:nth-child(n+5)').forEach(row => {
                    row.style.display = 'none';
                    $btnMore.innerText = $btnMore.getAttribute('data-expand');
                    $btnMore.classList.remove("expand");
                    scrollToTargetAdjusted($("ol.step"));
                });
            }
        });
    }

    let allFlatpickr = {};

    if ($$('.flatpickr')) {
        $$('.flatpickr').forEach(($el) => {

            let flatpickrOption = {
                dateFormat: 'd/m/Y',
            }

            if ($el.getAttribute('data-mindate')) {
                flatpickrOption = {...flatpickrOption, minDate: parseISO($el.getAttribute('data-mindate'))}
            }

            if ($el.getAttribute('data-setmindateto')) {
                flatpickrOption = {
                    ...flatpickrOption,
                    onChange: (selectedDates, dateStr, instance) => {

                        if ($el.getAttribute('data-setmaxdateto')) {

                            let maxDate;
                            let duration = $el.getAttribute('data-setmaxdaterange');

                            if (duration.indexOf('y') !== -1) {
                                maxDate = subDays(addYears(selectedDates[0], duration.replace('y', '')), 1)
                            } else {
                                maxDate = addDays(selectedDates[0], duration);
                            }

                            const setTo = allFlatpickr[$el.getAttribute('data-setmaxdateto')];

                            setTo.set("minDate", addDays(selectedDates[0], 1))
                            setTo.set("maxDate", maxDate)
                        }
                    }
                }
            }
            allFlatpickr[$el.getAttribute('id')] = flatpickr($el, flatpickrOption);
        });
    }

    if ($('#ctrl_day')) {
        $('#ctrl_day').addEventListener('change', (e) => {
            if (e.target.value.length === 1) {
                $('#ctrl_day').value = '0' + e.target.value;
            }
        });
    }

    const $postalCode = $('#fdAddr_PostCode');
    if ($postalCode) {
        const zipcode_data = await getZipcodeData();
        $postalCode.addEventListener("change", function (e) {
            const value = $postalCode.value;
            if (value.length === 5) {
                const location_data = zipcode_data[value];
                if (location_data !== undefined) {
                    let items = ['<option value="">' + $('#ctrl_province').getAttribute('data-please-select') + '</option>'];
                    location_data.map(v => {
                        items.push(`<option value="${v.district.code}">${v.district.locales[locale]}, ${v.province.locales[locale]}</option>`);
                    });

                    $('#ctrl_province').innerHTML = items.join('');
                }
            }

        });
    }

    const $$beneficiary = $$('.fdBenefit');
    if ($$beneficiary) {
        $$beneficiary.forEach($el => {
            $el.addEventListener("change", function (e) {
                let display = 'none';

                if ($el.value === 'other') {
                    display = 'block'
                }

                $el.closest('.two-col').querySelectorAll(".beneficiary_detail").forEach($el => {
                    $el.style.display = display;
                });
            });
        });
    }

    const $tax = $('#fdRevenue');
    if ($tax) {
        $tax.addEventListener("click", function (e) {
            let display = 'none';

            if ($tax.checked) {
                display = 'block'

                if ($('#ctrl_document_type') && $('#ctrl_document_type').value === 'บัตรประจำตัวประชาชน') {
                    $('#fdTaxno').value = $('#fdNationalID').value
                } else if ($('#fdNationalID').getAttribute('data-type') !== 'passport') {
                    $('#fdTaxno').value = $('#fdNationalID').value
                }
            }
            $$(".tax_no_detail").forEach($el => {
                $el.style.display = display;
            });
        });
    }

});
