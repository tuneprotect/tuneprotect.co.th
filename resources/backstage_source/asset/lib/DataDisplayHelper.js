import {compareAsc, compareDesc} from 'date-fns'

function descendingComparator(a, b, field, columns) {
    const specialRender = columns.find(v => v.field === field && (v.render !== undefined && v.type !== 'date'));
    const isNumeric = columns.find(v => v.field === field && v.type === 'number');
    let recA, recB;
    if (isNumeric) {
        recA = parseFloat(a[field]);
        recB = parseFloat(b[field]);
    } else {
        recA = specialRender ? specialRender.render(a) : a[field];
        recB = specialRender ? specialRender.render(b) : b[field];
    }

    if (recB < recA) {
        return -1;
    }
    if (recB > recA) {
        return 1;
    }
    return 0;
}
export function getComparator(orderBy, columns) {
    return orderBy.direction === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy.field, columns)
        : (a, b) => -descendingComparator(a, b, orderBy.field, columns);
}

export function stableSort(dataList, comparator) {

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


export function handleFilter(rowData, filter, props) {

    if (typeof props.data === "function") {
        return true;
    }

    if (Object.keys(filter).every(k => {
        if (filter[k] === "") {
            return true;
        }

        for (let i = 0; i < props.columns.length; i++) {

            let keyword = filter[props.columns[i].field];

            if (keyword !== "") {
                if (props.columns[i].customFilterAndSearch) {
                    let result = props.columns[i].customFilterAndSearch(keyword, rowData);
                    if (result === false) {
                        return false
                    }
                } else if (props.columns[i].type === 'date') {

                    if (keyword.start_date !== "" && compareDesc(keyword.start_date, new Date(rowData[props.columns[i].field])) === -1) {
                        return false;
                    }

                    if (keyword.end_date !== "" && compareAsc(keyword.end_date, new Date(rowData[props.columns[i].field])) === -1) {
                        return false;
                    }

                } else {
                    if (rowData[props.columns[i].field] === null ||
                        rowData[props.columns[i].field] === undefined ||
                        rowData[props.columns[i].field].toString().toLowerCase().indexOf(keyword.toLowerCase()) === -1) {
                        return false;
                    }
                }
            }
        }
        return true;

    })) {
        return true;
    }
}