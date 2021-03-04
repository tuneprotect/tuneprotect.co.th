import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {useTranslation} from 'react-i18next';
import {Icon, makeStyles} from "@material-ui/core";
import globalStyle from "../../../asset/jss/standard";
import ProjectCard from "../../component/ProjectCard";
import {API_STATUS_RESULT, API_URL_LIST, DATE_FORMAT} from "../../../config/config";
import CMSDataTable from "../../component/data_display/CMSDataTable";
import SpeedMenu from "../../component/SpeedMenu";
import ConfirmPopup from "../../component/ConfirmPopup";
import {checkAction, connectAPI} from "../../../asset/lib/FormHelper";
import APP_ROUTE from "../../../config/route";
import {format} from 'date-fns'

const useStyles = makeStyles((theme) => ({
    ...globalStyle(theme)
}));

export default function UserManagementPage() {
    const classes = useStyles();
    const {t} = useTranslation();
    const history = useHistory();
    const {mainIcon, mainTitle} = useSelector(({system}) => system);
    const [userData, setUserData] = useState([]);

    const [popupDelete, setPopupDelete] = useState({
        open: false,
        id: ""
    });
    const speedMenuList = (() => {
        let arr = []

        if (checkAction('user.management.edit')) {
            arr.push({
                icon: <Icon>add</Icon>,
                className: classes.btnEdit,
                tooltipTitle: t("global.add_new"),
                onClick: () => history.push(APP_ROUTE["user.management.detail"].url.replace(':id?', ''))
            });
        }

        arr.push({
            icon: <Icon>refresh</Icon>,
            className: classes.btnReload,
            tooltipTitle: t("global.reload"),
            onClick: () => handleReload()
        });

        return arr;
    })();

    const handleClose = () => {
        setPopupDelete({
            open: false,
            id: ""
        });
    }
    const handleDelete = async () => {
        setPopupDelete({
            ...popupDelete,
            open: false,
        });
        const response =  await connectAPI(API_URL_LIST.userDelete, {
            data: {
                selected_id: popupDelete.id
            }
        });

        if (response.status === API_STATUS_RESULT.SUCCESS) {
            setUserData(userData.filter(v => v.id !== popupDelete.id));
        }

        setPopupDelete({
            open: false,
            id: ""
        });
    };
    const handleEnable = async (id) => {
        const response = await connectAPI(API_URL_LIST.userSetEnable, {
            data: {
                selected_id: id
            }
        });

        if (response.status === API_STATUS_RESULT.SUCCESS) {
            setUserData(userData.map(v => v.id === id ? {
                ...v,
                enable: response.result.enable
            } : v));
        }
    };
    const handleReload = async () => {
        const response = await connectAPI(API_URL_LIST.userGetAll, {
            showStatus: false
        })
        if (response.status === API_STATUS_RESULT.SUCCESS) {
            setUserData(response.result);
        }

    }
    const columns = [
        {
            field: "name",
            title: t("global.name"),
            render: rowData => `${rowData.first_name}  ${rowData.last_name}`,
            customFilterAndSearch: (value, rowData) => {
                return `${rowData.first_name}  ${rowData.last_name}`.indexOf(value) !== -1
            }
        },
        {
            title: t("global.email"),
            field: "email",
        },
        {
            title: t("admin_user.last_login"),
            field: "last_login",
            type: 'date',
            render: rowData => rowData.last_login ? format( new Date( rowData.last_login),DATE_FORMAT.SHORT_DATE_TIME)  : '',
        },
    ];

    const tableActions = [
        {
            icon: 'visibility',
            title: [t("global.disable"), t("global.enable")],
            field: "enable",
            buttonClass: [classes.btnError, classes.btnSuccess],
            position: "row",
            hidden: () => {
                return !checkAction('user.management.edit')
            },
            onClick: (event, rowData) => {
                handleEnable(rowData.id);
            }
        },
        {
            icon: 'edit',
            title: 'Edit',
            buttonClass: classes.btnEdit,
            position: "row",
            hidden: () => {
                return !checkAction('user.management.edit')
            },
            onClick: (event, rowData) => {
                history.push(APP_ROUTE["user.management.detail"].url.replace(':id?', rowData.id))
            }
        },
        {
            icon: 'delete',
            title: 'Delete',
            buttonClass: classes.btnDelete,
            position: "row",
            hidden: () => {
                return !checkAction('user.management.delete')
            },
            onClick: (event, rowData) => {
                setPopupDelete({
                    open: true,
                    id: rowData.id
                });
            }
        }
    ];

    useEffect(() => {
        handleReload();
    }, []);

    return <>
        <ProjectCard icon={mainIcon} title={mainTitle}>
            <CMSDataTable
                data={userData}
                columns={columns}
                actions={tableActions}
                option={{
                    filtering: true,
                    sorting: true,
                }}
            />

        </ProjectCard>
        <ConfirmPopup open={popupDelete.open} handleClose={handleClose} handleConfirm={handleDelete}>
            {t("global.delete_alert_description")}
        </ConfirmPopup>
        <SpeedMenu menu={speedMenuList}/>
    </>
}
