import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Icon, makeStyles} from "@material-ui/core";
import {useTranslation} from 'react-i18next';
import globalStyle from "../../../../asset/jss/standard";
import {API_STATUS_RESULT, API_URL_LIST} from "../../../../config/config";
import FlagIcon from "../../../component/topbar/FlagIcon";
import ProjectCard from "../../../component/ProjectCard";
import CMSDataTable from "../../../component/data_display/CMSDataTable";
import SpeedMenu from "../../../component/SpeedMenu";
import {checkAction, connectAPI} from "../../../../asset/lib/FormHelper";
import {mainColor} from "../../../../config/theme";
import ConfirmPopup from "../../../component/ConfirmPopup";
import {getUnPublish} from "../../../../asset/lib/SystemHelper";

const useStyles = makeStyles((theme) => ({
    ...globalStyle(theme)
}));

export default function LanguagePage(app) {
    const classes = useStyles();
    const {t} = useTranslation();
    const {mainIcon, mainTitle} = useSelector(({system}) => system);
    const [languageData, setLanguageData] = useState([]);
    const [menu, setMenu] = useState([]);
    const [open, setOpen] = useState(false);
    const speedMenuList = (() => {
        let arr = []

        if (checkAction('configuration.language.publish')) {
            arr.push({
                id: "publish",
                icon: <Icon>publish</Icon>,
                tooltipTitle: t("global.publish"),
                className: classes.btnPublish,
                onClick: () => setOpen(true)
            });
        }
        return arr;
    })();

    const columns = [
        {
            field: "id",
            title: "",
            filtering: false,
            render: rowData => <FlagIcon code={(rowData.code) === 'en' ? 'us' : rowData.code} size="lg"/>
        },
        {
            title: t("language.language"),
            field: "title",
            filtering: false,
        }];

    const tableActions = [
        {
            icon: 'flag',
            title: t("global.default"),
            field: "default",
            buttonClass: [classes.btnError, classes.btnSuccess],
            onClick: async (event, rowData) => {
                await handleDefault(rowData.id);
            }
        },
        {
            icon: 'visibility',
            title: [t("global.disable"), t("global.enable")],
            field: "enable",
            buttonClass: [classes.btnError, classes.btnSuccess],
            onClick: async (event, rowData) => {
               await handleEnable(rowData.id)
            }
        }
    ];

    const handleDefault = async (id) => {

        const response = await connectAPI(API_URL_LIST.languageSetDefault, {
            data: {
                application: app,
                id: id,
            },
        });
        if (response.status === API_STATUS_RESULT.SUCCESS) {
            setLanguageData(languageData.map(v => ({
                ...v,
                default: v.id === id ? "1" : "0",
                publish: 0
            })));

            getUnPublish();
        }
    }

    const handleEnable = async (id) => {
        const response = await connectAPI(API_URL_LIST.languageSetEnable, {
            data: {
                application: app,
                selected_id: id
            }
        });
        if (response.status === API_STATUS_RESULT.SUCCESS) {
            setLanguageData(languageData.map(v => v.id === id ? {
                ...v,
                enable: response.result.enable,
                publish: 0
            } : v));

            getUnPublish();
        }
    }

    const handlePublishAll = async () => {

        setOpen(false);
        const response = await connectAPI(API_URL_LIST.languagePublishAll, {
            data: {
                application: app
            }
        });
        if (response.status === API_STATUS_RESULT.SUCCESS) {

            setLanguageData(languageData.map(v => ({
                ...v,
                publish: 1
            })));

            getUnPublish();
        }
    }

    useEffect(() => {
        const abortController = new AbortController();
        (async () => {
            const response = await connectAPI(API_URL_LIST.languageGetAll, {
                data: {application: app,},
                showStatus: false
            });
            if (response.status === API_STATUS_RESULT.SUCCESS) {
                setLanguageData(response.result);
            }
        })();

        return () => {
            abortController.abort();
        };

    }, []);

    useEffect(() => {
        const allPublish = languageData.every(v => v.publish === 1);
        setMenu(allPublish ? [] : speedMenuList);
    }, [languageData]);

    return (
        <>
            <ProjectCard icon={mainIcon} title={mainTitle}>
                <CMSDataTable
                    data={languageData}
                    columns={columns}
                    actions={tableActions}
                    option={{
                        rowStyle: rowData => {
                            if (rowData.publish === 0) {
                                return {background: `repeating-linear-gradient(-45deg,${mainColor[100]},${mainColor[100]} 10px,${mainColor[50]} 10px,${mainColor[50]} 20px)`};
                            }
                            return {};
                        }
                    }}
                />
            </ProjectCard>
            <SpeedMenu menu={menu}/>
            <ConfirmPopup open={open} handleClose={() => setOpen(false)} handleConfirm={handlePublishAll}>
                {t("global.publish_alert_description")}
            </ConfirmPopup>
        </>
    )
}
