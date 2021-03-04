import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Icon, makeStyles} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {useTranslation} from 'react-i18next';

import globalStyle from "../../../asset/jss/standard";
import CMSDataTable from "../../component/data_display/CMSDataTable";
import SpeedMenu from "../../component/SpeedMenu";
import ProjectCard from "../../component/ProjectCard";
import {checkAction, connectAPI} from "../../../asset/lib/FormHelper";
import APP_ROUTE from "../../../config/route";
import {API_STATUS_RESULT, API_URL_LIST, WEB_CONTENT} from "../../../config/config";
import {deleteColor, mainColor} from "../../../config/theme";
import ConfirmPopup from "../../component/ConfirmPopup";
import CMSDataSortable from "../../component/data_display/CMSDataSortable";
import {getUnPublish} from "../../../asset/lib/SystemHelper";

const useStyles = makeStyles((theme) => ({
    ...globalStyle(theme)
}));

export default function WebContentPage({type_id, cat_id, config}) {
    const classes = useStyles();

    const history = useHistory();
    const {t, i18n} = useTranslation();
    const {mainIcon, mainTitle, languageSupport} = useSelector(({system}) => system);
    const [webContentData, setWebContentData] = useState([]);
    const [menu, setMenu] = useState([]);
    const [clearSelection, setClearSelection] = useState(false);
    const [selected, setSelected] = useState([]);
    const [category, setCategory] = useState([]);
    const [publishPopup, setPublishPopup] = useState({
        open: false,
        id: null
    });
    const [reordered, setReordered] = useState(false);
    const permission = {
        edit: checkAction(type_id + '.edit'),
        delete: checkAction(type_id + '.delete'),
        publish: checkAction(type_id + '.publish')
    };
    const speedMenuList = (() => {

        let arr = [{
            icon: <Icon>refresh</Icon>,
            tooltipTitle: t('global.reload'),
            className: classes.btnReload,
            onClick: () => handleReload()
        }];

        if (permission.edit) {
            arr.push({
                icon: <Icon>add</Icon>,
                tooltipTitle: t("global.add_new"),
                className: classes.btnEdit,
                onClick: () => history.push(APP_ROUTE[type_id].url + "/detail")
            });
            arr.push({
                icon: <Icon>visibility</Icon>,
                tooltipTitle: t('global.enable'),
                className: classes.btnSuccess,
                isNew: true,
                onClick: () => handleEnable(selected, 1)
            });
            arr.push({
                icon: <Icon>visibility</Icon>,
                tooltipTitle: t('global.disable'),
                className: classes.btnError,
                isNew: true,
                onClick: () => handleEnable(selected, 0)
            });

            if (config?.hasHome === true) {
                arr.push({
                    icon: <Icon>home</Icon>,
                    tooltipTitle: t('global.home_set'),
                    className: classes.btnSuccess,
                    isNew: true,
                    onClick: () => handleHome(selected, 1)
                });

                arr.push({
                    icon: <Icon>home</Icon>,
                    tooltipTitle: t('global.home_remove'),
                    className: classes.btnError,
                    isNew: true,
                    onClick: () => handleHome(selected, 0)
                });
            }

            if (config?.hasImport === true) {
                arr.push({
                    icon: <Icon>get_app</Icon>,
                    tooltipTitle: t('global.export'),
                    className: classes.btnSuccess,
                    onClick: () => handleExport()
                });

                arr.push({
                    icon: <Icon>new_releases</Icon>,
                    tooltipTitle: t('global.import'),
                    className: classes.btnError,
                    onClick: () => handleImport()
                });
            }
        }

        if (permission.delete) {
            arr.push({
                icon: <Icon>restore</Icon>,
                tooltipTitle: t("global.restore"),
                className: classes.btnRestore,
                isNew: true,
                onClick: () => handleDelete(selected, 0)
            });
            arr.push({
                icon: <Icon>delete</Icon>,
                tooltipTitle: t("global.delete"),
                className: classes.btnDelete,
                isNew: true,
                onClick: () => handleDelete(selected, 1)
            });
        }

        if (permission.publish) {
            arr.push({
                id: "publish",
                icon: <Icon>publish</Icon>,
                tooltipTitle: t("global.publish"),
                isNew: true,
                className: classes.btnPublish,
                onClick: () => {
                    setPublishPopup({
                        open: true,
                        id: selected
                    });

                }
            });
        }

        return arr;
    })();
    const columns = (() => {

        if (config?.columns) {
            return config.columns;
        }
        let arr_column = [
            {
                field: "name",
                title: t("global.title"),
                render: rowData => rowData.locales[i18n.language].title,
                customFilterAndSearch: (value, rowData) => {
                    return Object.values(languageSupport)
                        .some(v => rowData.locales[v.code].title.toLowerCase().indexOf(value) !== -1);
                }
            }
        ];

        if (cat_id) {
            arr_column.push(
                {
                    field: "cat_id",
                    title: i18n.t("global.category"),
                    lookup: category,
                        render: (rowData) => category[rowData.cat_id],
                    customFilterAndSearch: (value, rowData) => {
                        return rowData.cat_id.toString() === value.toString()
                    }

                }
            );
        }
        return arr_column;
    })();
    const tableActions = [
        {
            icon: 'home',
            title: [t("global.home_set"), t("global.home_remove")],
            field: "home",
            position: "row",
            buttonClass: [classes.btnError, classes.btnSuccess],
            hidden: () => {
                return !config?.hasHome === true
            },
            onClick: async (event, rowData) => {
                await handleHome(rowData.id);
            }
        },
        {
            icon: 'visibility',
            title: [t("global.disable"), t("global.enable")],
            field: "enable",
            position: "row",
            buttonClass: [classes.btnError, classes.btnSuccess],
            hidden: () => {
                return !permission.edit
            },
            onClick: (event, rowData) => {
                handleEnable(rowData.id);
            }
        },
        {
            icon: 'edit',
            title: t("global.edit"),
            position: "row",
            buttonClass: classes.btnEdit,
            hidden: () => {
                return !permission.edit
            },
            onClick: (event, rowData) => {
                history.push(APP_ROUTE[type_id].url + "/detail/" + rowData.id);
            }
        },
        {
            icon: ["delete","restore"],
            title: [t("global.delete"), t("global.restore")],
            field: "mark_delete",
            position: "row",
            buttonClass: [classes.btnDelete, classes.btnRestore],
            hidden: () => {
                return !permission.delete
            },
            onClick: (event, rowData) => {
                handleDelete(rowData.id);
            }
        },
        {
            icon: 'publish',
            title: t("global.publish"),
            position: "row",
            buttonClass: classes.btnPublish,
            hidden: (rowData) => {
                return !permission.publish || rowData.publish === 1
            },
            onClick: (event, rowData) => {
                setPublishPopup({
                    open: true,
                    id: rowData.id
                });
            }
        },

    ];

    const handleAction = async (url, action, id, status) => {
        setPublishPopup({
            open: false,
            id: null
        })

        const response = await connectAPI(url, {
            data: {selected_id: id, [action]: status},
        });
        if (response.status === API_STATUS_RESULT.SUCCESS) {

            if (action === 'publish') {
                setWebContentData(webContentData
                    .filter(v => response.result?.[v.id] !== 'delete')
                    .map(v => (response.result?.[v.id] === 'publish' ? {...v, publish: 1} : v)));
                getUnPublish();
                return true;
            }

            if (status !== undefined) {
                setWebContentData(webContentData
                    .map(v => (id.indexOf(v.id) !== -1 ? {...v, [action]: status, publish: 0} : v)));
            } else {
                setWebContentData(webContentData
                    .map(v => (v.id === id) ? {...v, [action]: response.result[action], publish: 0} : v));
            }

            getUnPublish();
        }
        setClearSelection(true);
    }
    const handleEnable = (id, status) => {
        handleAction(API_URL_LIST.webContentSetEnable, 'enable', id, status)
    };
    const handleDelete = async (id, status) => {
        handleAction(API_URL_LIST.webContentSetDelete, 'mark_delete', id, status)
    };
    const handleHome = async (id, status) => {
        handleAction(API_URL_LIST.webContentSetHome, 'home', id, status)
    };
    const handlePublish = async (id, status) => {
        handleAction(API_URL_LIST.webContentPublish, 'publish', id, status)
    };
    const handleExport = async (id, status) => {
        // handleAction(API_URL_LIST.webContentExport, 'export', id, status)
    };

    const handleImport = async (id, status) => {
        // handleAction(API_URL_LIST.webContentExport, 'import', id, status)
    };

    const handleImportFB = async () => {
        const response = await connectAPI(API_URL_LIST.webContentGetFBReview, {
            data: {type_id},
            showStatus: false
        });
        if (response.status === API_STATUS_RESULT.SUCCESS) {
            handleReload()
        }
    };

    const handleReload = async () => {

        const response = await connectAPI(API_URL_LIST.webContentGetAll, {
            data: {type_id},
            showStatus: false
        });
        if (response.status === API_STATUS_RESULT.SUCCESS) {
            setWebContentData(response.result);
        }
    }
    const handleSaveReorder = async (data) => {

        const order_data = data.map(v => v.id);
        const response = await connectAPI(API_URL_LIST.webContentSaveReorder, {
            data: {type_id, order_data}
        });

        if (response.status === API_STATUS_RESULT.SUCCESS) {
            getUnPublish();
        }

        setReordered(false);
    }

    useEffect(() => {
        handleReload();
    }, []);
    useEffect(() => {

        if (selected.length > 0) {
            setMenu(speedMenuList);
        } else {
            setMenu(speedMenuList.filter(v => !v.isNew));
        }
    }, [selected]);

    useEffect(() => {
        if (cat_id !== undefined) {
            (async () => {
                const response = await connectAPI(API_URL_LIST.webContentGetAll, {
                    data: {type_id: cat_id},
                    showStatus: false,
                    showLoading: false
                })

                if (response.status === API_STATUS_RESULT.SUCCESS) {
                    setCategory(response.result.reduce((data, category) => {
                        data = {...data, [category.id]: category.locales[i18n.language].title};
                        return data;
                    }, {}));
                }
            })();
        }

    }, [cat_id]);


    const childPorps = {
        data: webContentData,
        columns: columns,
        setClearSelection: setClearSelection,
        clearSelection: clearSelection,
        reordered,
        setReordered,
        actions: tableActions,
        onSelectionChange: (rows) => setSelected(rows.map(v => v.id)),
        onSaveOrder: (data) => handleSaveReorder(data),
        option: {
            selection: true,
            filtering: true,
            sorting: true,
            rowStyle: rowData => {
                if (rowData.mark_delete === 1) {
                    return {background: `repeating-linear-gradient(-45deg,${deleteColor[100]},${deleteColor[100]} 10px,${deleteColor[50]} 10px,${deleteColor[50]} 20px)`};
                }

                if (rowData.publish === 0) {
                    return {background: `repeating-linear-gradient(-45deg,${mainColor[100]},${mainColor[100]} 10px,${mainColor[50]} 10px,${mainColor[50]} 20px)`};
                }
            }
        }
    }

    return (
        <ProjectCard icon={mainIcon} title={mainTitle}>
            {config?.isSortable
                ? <CMSDataSortable {...childPorps} />
                : <CMSDataTable {...childPorps} />
            }
            <ConfirmPopup
                open={publishPopup.open}
                handleConfirm={() => handlePublish(publishPopup.id, 1)}
                handleClose={() => setPublishPopup({
                    open: false,
                    id: null
                })}>
                {t("global.publish_alert_description")}
            </ConfirmPopup>
            <SpeedMenu menu={menu} />
        </ProjectCard>

    )
}
