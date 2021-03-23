import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Icon, makeStyles} from "@material-ui/core";
import {useTranslation} from 'react-i18next';

import globalStyle from "../../../asset/jss/standard";
import CMSDataTable from "../../component/data_display/CMSDataTable";
import SpeedMenu from "../../component/SpeedMenu";
import ProjectCard from "../../component/ProjectCard";
import {checkAction, connectAPI} from "../../../asset/lib/FormHelper";
import {API_STATUS_RESULT, API_URL_LIST, DATE_FORMAT} from "../../../config/config";
import {deleteColor} from "../../../config/theme";
import ConfirmPopup from "../../component/ConfirmPopup";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import {format} from 'date-fns'

const useStyles = makeStyles((theme) => ({
    ...globalStyle(theme)
}));

export default function LeadFormPage() {
    const classes = useStyles();
    const type_id = "leadform";
    const {t, i18n} = useTranslation();
    const [locale, setLocale] = useState(i18n.language || i18n.options.fallbackLng[0]);
    const {mainIcon, mainTitle} = useSelector(({system}) => system);
    const [contactData, setContactData] = useState([]);
    const [menu, setMenu] = useState([]);
    const [clearSelection, setClearSelection] = useState(false);
    const [selected, setSelected] = useState([]);
    const [filter, setFilter] = useState({});
    const [productLeadForm, setProductLeadForm] = useState({});
    const [openExport, setOpenExport] = useState(false);

    const [showDataPopup, setShowDataPopup] = useState({
        open: false,
        data: {}
    });
    const [deletePopup, setDeletePopup] = useState({
        open: false,
        id: null
    });
    const permission = {
        delete: checkAction(type_id + '.delete'),
    };
    const speedMenuList = (() => {

        let arr = [{
            icon: <Icon>refresh</Icon>,
            tooltipTitle: t('global.reload'),
            className: classes.btnReload,
            onClick: () => handleReload()
        },
            {
                icon: <Icon>get_app</Icon>,
                tooltipTitle: t('global.export'),
                className: classes.btnPublish,
                onClick: () => setOpenExport(true)
            }
        ];


        if (permission.delete) {
            arr.push({
                icon: <Icon>delete</Icon>,
                tooltipTitle: t("global.delete"),
                className: classes.btnDelete,
                isNew: true,
                onClick: () => handleDelete(selected, 1)
            });
        }

        return arr;
    })();
    const columns = [
        {
            field: "created_at",
            title: t("global.created_at"),
            render: rowData => format(new Date(rowData.created_at), DATE_FORMAT.SHORT_DATE_TIME),
            defaultSort: "desc",
            type: 'date',
        },
        {
            field: "name",
            title: t("global.name"),
        },
        {
            field: "email",
            title: t("global.email"),
        },
        {
            field: "tel",
            title: t("global.tel"),
        },
        {
            field: "available_time",
            title: t("global.available_time"),
        },
        {
            field: "product_id",
            render: rowData => rowData.product?.[locale]?.title || '',
            lookup:  productLeadForm,
            title: t("global.product_name"),
        },

    ];
    const tableActions = [
        {
            icon: 'search',
            title: t("global.show_data"),
            position: "row",
            buttonClass: classes.btnEdit,
            onClick: (event, rowData) => {
                // console.log('onClick',rowData)
                delete rowData.product_id;
                rowData.created_at = format(new Date(rowData.created_at), DATE_FORMAT.SHORT_DATE_TIME)
                rowData.updated_at = format(new Date(rowData.updated_at), DATE_FORMAT.SHORT_DATE_TIME)
                setShowDataPopup({
                    open: true,
                    data: rowData
                });
            }
        },
        {
            icon: 'delete',
            title: t("global.delete"),
            field: "mark_delete",
            position: "row",
            buttonClass: classes.btnDelete,
            hidden: () => {
                return !permission.delete
            },
            onClick: (event, rowData) => {
                setDeletePopup({
                    open: true,
                    id: rowData.id
                });
            }
        },

    ];

    const handleDelete = async (id) => {

        setDeletePopup({
            open: false,
            id: null
        })

        const response = await connectAPI(API_URL_LIST.leadFormsDelete, {
            data: {selected_id: id},
        });

        if (response.status === API_STATUS_RESULT.SUCCESS) {
            if (Array.isArray(id)) {
                setContactData(contactData.filter(v => !id.includes(v.id)));
            } else {
                setContactData(contactData.filter(v => v.id !== id));
            }


        }
        setClearSelection(true);
    };

    const handleReload = async () => {

        const response = await connectAPI(API_URL_LIST.leadFormsGetAll, {
            data: {type_id},
            showStatus: false
        });
        if (response.status === API_STATUS_RESULT.SUCCESS) {
            setContactData(response.result);
        }
    }

    const handleLoadProduct = async () => {

        const response = await connectAPI(API_URL_LIST.leadFormsGetProduct, {
            data: {locale}
        });

        if (response.status === API_STATUS_RESULT.SUCCESS) {


           setProductLeadForm(response.result.reduce((obj,v) => {
                return {...obj,[v.web_content_id] : v.title}
            }, {}))


        }

    }


    useEffect(() => {
        handleReload();
        handleLoadProduct();
    }, []);

    useEffect(() => {
        if (openExport) {
            window.open(`/backstage/export/leadform/?filter=${JSON.stringify(filter)}`);
            setOpenExport(false)
        }
    }, [openExport]);
    useEffect(() => {

        if (selected.length > 0) {
            setMenu(speedMenuList);
        } else {
            setMenu(speedMenuList.filter(v => !v.isNew));
        }
    }, [selected]);

    const childPorps = {
        data: contactData,
        columns: columns,
        setClearSelection: setClearSelection,
        clearSelection: clearSelection,
        actions: tableActions,
        onSelectionChange: (rows) => setSelected(rows.map(v => v.id)),
        onFilterChange: (filterData) => {
            setFilter(filterData)
        },
        option: {
            selection: true,
            filtering: true,
            sorting: true,
            rowStyle: rowData => {
                if (rowData.connection === 'staging') {
                    return {background: `repeating-linear-gradient(-45deg,${deleteColor[100]},${deleteColor[100]} 10px,${deleteColor[50]} 10px,${deleteColor[50]} 20px)`};
                }
            }
        }
    }

    return (
        <ProjectCard icon={mainIcon} title={mainTitle}>

            <CMSDataTable {...childPorps} />
            <ConfirmPopup
                open={deletePopup.open}
                handleConfirm={() => handleDelete(deletePopup.id)}
                handleClose={() => setDeletePopup({
                    open: false,
                    id: null
                })}>
                {t("global.delete_alert_description")}
            </ConfirmPopup>
            <ConfirmPopup
                open={showDataPopup.open}
                handleClose={() => setShowDataPopup({
                    open: false,
                    data: {}
                })}>
                <Table>
                    <TableBody>
                        {/*{console.log(showDataPopup.data)}*/}
                        {Object.keys(showDataPopup.data).map(k => <TableRow key={k}>
                            {/*{console.log(k)}*/}

                            <TableCell>{k}</TableCell>
                            <TableCell>{k === 'product' ? showDataPopup.data[k].en.title : showDataPopup.data[k]}</TableCell>

                        </TableRow>)}


                    </TableBody>
                </Table>
            </ConfirmPopup>
            <SpeedMenu menu={menu}/>
        </ProjectCard>

    )
}
