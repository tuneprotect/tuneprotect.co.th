import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {makeStyles} from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TablePagination, TableRow} from '@material-ui/core';
import globalStyle from "../../../asset/jss/standard";
import CMSTableHead from "./CMSTableHead";
import CMSToolbar from "./CMSToolbar";
import CMSTableRow from "./CMSTableRow";
import {getComparator, handleFilter, stableSort} from "../../../asset/lib/DataDisplayHelper";


const useStyles = makeStyles((theme) => ({
    actionButton: {
        minWidth: 50,
        marginLeft: 5
    },
    ...globalStyle(theme)
}));

export default function CMSDataTable({...props}) {
    const classes = useStyles();
    const [selected, setSelected] = useState([]);
    const [dataList, setDataList] = useState([]);
    const [orderBy, setOrderBy] = useState({field: props.columns[0].field, direction: 'asc'});
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [filter, setFilter] = useState(() => {
        let obj = {};
        props.columns.map(function (v, index) {
            if (v.type === 'date') {
                obj[v.field] = {start_date: "", end_date: ""};
            } else {
                obj[v.field] = '';
            }
        });
        return obj;
    });
    const {t} = useTranslation();
    const handleToggle = (value) => {
        if (selected.includes(value)) {
            setSelected([...selected.filter(i => i !== value)]);
        } else {
            setSelected([...selected, value]);
        }
    };
    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = dataList.map((n) => n);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const handleSort = (field, direction) => {
        const isAsc = orderBy.field === field && orderBy.direction === 'asc';
        setOrderBy({
            field: field, direction: direction !== undefined ? direction : (isAsc ? 'desc' : 'asc')
        });
    }


    useEffect(() => {
        (async () => {
            if (typeof props.data === "function") {
                let response = await props.data({
                    filter, orderBy, page, rowsPerPage
                });
                setDataList(response.result);
            }
        })();
    }, [filter]);

    useEffect(() => {
        if (typeof props.data !== "function") {
            setDataList(props.data);
        }
    }, [props.data]);
    useEffect(() => {
        if (props.onSelectionChange !== undefined) {
            props.onSelectionChange(selected);
        }
    }, [selected]);
    useEffect(() => {
        setSelected([]);
    }, [props.clearSelection]);
    useEffect(() => {
        const defaultSort = props.columns.filter(v => v.defaultSort !== undefined);
        if (defaultSort.length > 0) {
            handleSort(defaultSort[0].field, defaultSort[0].defaultSort)
        } else {
            handleSort(props.columns[0].field, 'asc')
        }
    }, []);

    useEffect(() => {

        if (props?.changeData?.action !== undefined) {

            if (props.changeData.action === 'delete') {

                setDataList(dataList.filter(v => v.id !== props.changeData.id));
            } else {
                setDataList(dataList.map(v => v.id === props.changeData.id ? {
                    ...v,
                    [props.changeData.action]: props.changeData[props.changeData.action]
                } : v));
            }

            props.setChangeData({});

        }

    }, [props.changeData]);

    return <>

        {(props.reordered || props.option.selection) &&
        <CMSToolbar selected={selected} onSaveOrder={() => props.onSaveOrder(dataList)}/>
        }

        <Table>
            <CMSTableHead
                selected={selected}
                dataList={dataList}
                onSelectAllClick={handleSelectAllClick}
                filter={filter}
                setFilter={setFilter}
                orderBy={orderBy}
                onSort={handleSort}

                {...props}
            />
            <TableBody className={classes.root}>
                {dataList.length > 0
                    ?
                    stableSort(dataList, getComparator(orderBy, props.columns))
                        .filter((rowData) => handleFilter(rowData, filter, props))
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((v, index) => {
                            return <CMSTableRow key={index} rowData={v} index={index} selected={selected}
                                                onToggle={handleToggle} {...props}/>;
                        })
                    : <TableRow>
                        <TableCell style={{textAlign: "center", height: 300}}
                                   colSpan={20}>{t('global.no_data')}</TableCell>
                    </TableRow>
                }
            </TableBody>
        </Table>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={dataList.filter((rowData) => handleFilter(rowData, filter, props)).length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </>
}
