import React, {useState} from "react";
import {useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {useTranslation} from 'react-i18next';
import globalStyle from "../../../asset/jss/standard";
import ProjectCard from "../../component/ProjectCard";
import {API_URL_LIST, DATE_FORMAT} from "../../../config/config";
import CMSDataTable from "../../component/data_display/CMSDataTable";
import SlideUp from "../../component/SlideUp";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import {connectAPI} from "../../../asset/lib/FormHelper";
import {format} from 'date-fns'


const useStyles = makeStyles((theme) => ({
    ...globalStyle(theme)
}));

export default function UserLogPage() {
    const classes = useStyles();
    const {t} = useTranslation();
    const {mainIcon, mainTitle} = useSelector(({system}) => system);
    const [detailPopup, setDetailPopup] = useState({
        open: false,
        detail: null
    });

    const columns = [
        {
            field: "created_at",
            title: t("global.action_date"),
            defaultSort: "desc",
            type: 'date',
            render: rowData => rowData.created_at ? format(new Date(rowData.created_at), DATE_FORMAT.SHORT_DATE_TIME) : '',
        },
        {
            field: "user",
            title: t("global.name"),
        },
        {
            field: "ip",
            title: t("global.ip"),
        },
        {
            field: "action",
            title: t("global.action"),
        },
        {
            field: "description",
            title: t("global.description"),
        },
    ];

    const tableActions = [
        {
            icon: 'search',
            title: "Show",
            buttonClass: classes.btnDelete,
            hidden: (rowData) => {
                return rowData.data === null || rowData.data === ""
            },
            onClick: (event, rowData) => {
                setDetailPopup({
                    open: true,
                    detail: JSON.stringify(rowData.data, null, '    ')
                });
            }
        }

    ];

    const handleClose = () => {
        setDetailPopup({
            open: false,
            detail: null
        })
    }

    return <ProjectCard icon={mainIcon} title={mainTitle}>
        <CMSDataTable
            data={async (query) => await connectAPI(API_URL_LIST.adminLogGetAll, {
                data: query,
                showStatus: false
            })}
            columns={columns}
            actions={tableActions}
            option={{
                filtering: true,
                sorting: true,
            }}/>
        <Dialog
            open={detailPopup.open}
            TransitionComponent={SlideUp}
            keepMounted
            onClose={handleClose}>
            <DialogTitle>{t("global.description")}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description" component="div">
                    <pre>{detailPopup.detail}</pre>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    {t("global.close")}
                </Button>
            </DialogActions>
        </Dialog>
    </ProjectCard>
}
