require('./main');
import {$, $$} from "./helper"

document.addEventListener("DOMContentLoaded", function () {

    const $btnMore = $('#btn-more');

    $btnMore.addEventListener("click", function (e) {
        e.preventDefault();
        $$('.partner_table tbody tr').forEach(row => {
            row.style.display = 'table-row';
        });
        $('.partner_table tfoot').style.display = 'none';
    });
    const locale = $('html').getAttribute('lang');
    let orderBy = {
        field: "title",
        direction: "asc"
    };
    const descendingComparator = (a, b, field) => {
        let recA, recB;

        switch (field) {
            case 'title':
                recA = a.locales[locale].title;
                recB = a.locales[locale].title;
                break;
            default:
                recA = a[field];
                recB = b[field];
                break;
        }


        if (recB < recA) {
            return -1;
        }
        if (recB > recA) {
            return 1;
        }
        return 0;
    }
    const getComparator = (orderBy) => {
        return orderBy.direction === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy.field)
            : (a, b) => -descendingComparator(a, b, orderBy.field);
    }

    const stableSort = (dataList, comparator) => {

        if (dataList.length === 0) {
            return dataList;
        }
        const stabilizedThis = dataList.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }

    let filterParam = {
        province: "",
        cat_id: "",
        title: "",
        partner_language: ""
    };

    const data = JSON.parse($('#div_result').innerHTML);
    $('#div_result').remove();
    const handleFilterData = () => {

        if (Object.keys(filterParam).every(k => filterParam[k] === "")) {
            return stableSort(data, getComparator(orderBy));
        }


        return stableSort(
            data.filter(rowData => {
                if (filterParam.province !== "" && filterParam.province !== rowData.province) {
                    return false;
                }

                if (filterParam.cat_id !== "" && filterParam.cat_id !== rowData.cat_id) {
                    return false;
                }

                if (filterParam.partner_language !== "" && rowData.partner_language[filterParam.partner_language] === false) {
                    return false;
                }

                if (filterParam.title !== "" && rowData?.locales[locale].title.toLowerCase().indexOf(filterParam.title.toLowerCase()) === -1) {
                    return false;
                }

                return true;

            }), getComparator(orderBy));
    };

    const genResult = (filteredData) => {

        const $tbody = $('.partner_table tbody');
        $tbody.innerHTML = '';
        filteredData.map(v => {
            const $tr = document.createElement('tr');

            const arrTel = v.tel.split(',').map(v1 => {
                return `<a class="btn btn-outline btn-thin" href="tel:${v1}">${v1}</a>`
            })

            $tr.innerHTML = `<td><strong>${v.locales[locale].title}</strong>
                            <p>${v.locales[locale].address}</p></td>

                <td>${arrTel.join('')}</td>
                <td>
                    <div class="btn-wrapper">
                    ${v.website ? `<a class="btn btn-outline btn-thin" target="_blank" href="${v.website}">${$(".partner_table").getAttribute('data-website')}</a>` : ''}
                    ${v.location ? `<a class="btn btn-outline btn-thin" target="_blank" href="${v.location}">${$(".partner_table").getAttribute('data-location')}</a>` : ''}
                    </div>
                </td>`;

            $tbody.appendChild($tr);
        });
    }

    const showResult = () => {
        const filteredData = handleFilterData();
        genResult(filteredData);
    }


    $$('#ctrl_province,#ctrl_category,#ctrl_language').forEach($el => {
        $el.addEventListener('change', (e) => {
            filterParam = {...filterParam, [e.target.name]: e.target.value}
            showResult();
        })
    });

    $$('#ctrl_name').forEach($el => {
        $el.addEventListener('keyup', (e) => {
            filterParam = {...filterParam, [e.target.name]: e.target.value}
            showResult();
        })
    });

    showResult();

});
