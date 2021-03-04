import React, {useEffect, useState} from "react";
import {useTranslation} from 'react-i18next';
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";
import {Icon} from "@material-ui/core";
import {API_STATUS_RESULT, API_URL_LIST} from "../../../config/config";

import globalStyle from "../../../asset/jss/standard";
import SpeedMenu from "../../component/SpeedMenu";
import {checkAction, connectAPI} from "../../../asset/lib/FormHelper";
import APP_ROUTE from "../../../config/route";
import ConfirmPopup from "../../component/ConfirmPopup";
import PublishPage from "./PublishPage";
import {getUnPublish} from "../../../asset/lib/SystemHelper";
import PartnerDetailForm from "./PartnerDetailForm";

const useStyles = makeStyles((theme) => ({
    ...globalStyle(theme),
}));

export default function PartnerMainForm({isWebContent, type_id, config, page, id, setId}) {
    const classes = useStyles();
    const history = useHistory();
    const {t} = useTranslation();
    const [fromDB, setFromDB] = useState({});
    const [publishPopupOpen, setPublishPopupOpen] = useState(false);
    const [isSave, setSave] = useState(false);
    const [menu, setMenu] = useState([]);
    const speedMenuList = (() => {
        let arr = [];
        if (isWebContent !== undefined) {
            arr = [
                {
                    icon: <Icon>arrow_back</Icon>,
                    tooltipTitle: t("global.back"),
                    className: classes.btnBack,
                    onClick: () => history.push(APP_ROUTE[type_id].url),
                    isNew: true
                },
                {
                    icon: <Icon>save</Icon>,
                    tooltipTitle: t("global.save"),
                    className: classes.btnSave,
                    onClick: () => setSave(true),
                    isNew: true
                },
                {
                    icon: <Icon>add</Icon>,
                    tooltipTitle: t("global.add_new"),
                    className: classes.btnEdit,
                    onClick: () => {
                        history.push(APP_ROUTE[type_id + ".detail"].url.replace(':id?', ''));
                        setId(undefined)
                    }
                },
                {
                    icon: <Icon>visibility</Icon>,
                    tooltipTitle: t('global.' + (fromDB?.enable === 1 ? 'enable' : 'disable')),
                    className: (fromDB?.enable === 1 ? classes.btnSuccess : classes.btnError),
                    onClick: () => handleEnable()
                }
            ]
            if (checkAction(type_id + '.delete')) {

                if (fromDB?.mark_delete === 1) {
                    arr.push({
                        icon: <Icon>restore</Icon>,
                        tooltipTitle: t("global.restore"),
                        className: classes.btnRestore,
                        onClick: () => handleDelete()
                    });
                } else {
                    arr.push({
                        icon: <Icon>delete</Icon>,
                        tooltipTitle: t("global.delete"),
                        className: classes.btnDelete,
                        onClick: () => handleDelete()
                    });
                }
            }

        } else {
            arr.push({
                icon: <Icon>arrow_back</Icon>,
                tooltipTitle: t("global.back"),
                className: classes.btnBack,
                onClick: () => history.push(APP_ROUTE["static.content"].url),
                isNew: true
            });
            arr.push({
                icon: <Icon>save</Icon>,
                tooltipTitle: t("global.save"),
                className: classes.btnSave,
                onClick: () => setSave(true),
                isNew: true
            });
        }

        if (checkAction(type_id + '.publish')) {
            arr.push({
                id: "publish",
                icon: <Icon>publish</Icon>,
                tooltipTitle: t("global.publish"),
                className: classes.btnPublish,
                onClick: () => setPublishPopupOpen(true)
            });
        }

        return arr;
    })();

    const showPreview = () => {
        window.open(`/preview/${type_id}/${fromDB.id}`)
    }

    const handleSubmit = async (values) => {

        const response = await connectAPI(API_URL_LIST.partnerSave,
            {
                data: values,
            });
        if (response.status === API_STATUS_RESULT.SUCCESS) {
            setFromDB(response.result);
            if (isWebContent) {
                history.push(APP_ROUTE[type_id + ".detail"].url.replace(':id?', response.result.id))
                setFromDB({
                    ...fromDB, ...response.result
                });
                setId(response.result.id)
            }
            getUnPublish();
        }

    }
    const handlePublish = async () => {

        setPublishPopupOpen(false);
        const response = await connectAPI(API_URL_LIST.partnerPublish, {
            data: {
                selected_id: id,
            }
        });
        if (response.status === API_STATUS_RESULT.SUCCESS) {
            setFromDB({...fromDB, publish: 1});
            getUnPublish();
        }

    }
    const handleEnable = async () => {
        const response = await connectAPI(API_URL_LIST.partnerSetEnable, {
            data: {
                selected_id: id,
            }
        });
        if (response.status === API_STATUS_RESULT.SUCCESS) {
            setFromDB({...fromDB, enable: response.result.enable});
            getUnPublish();
        }
    };
    const handleDelete = async () => {
        const response = await connectAPI(API_URL_LIST.partnerSetDelete, {
            data: {
                selected_id: id
            },
        });
        if (response.status === API_STATUS_RESULT.SUCCESS) {
            setFromDB({...fromDB, mark_delete: response.result.mark_delete});
            getUnPublish();
        }
    };

    useEffect(() => {


        (async () => {
            let where = {};

            if (isWebContent && id) {
                where.id = id;
            } else if (['static.page', 'static.meta', 'static.email'].some(v => type_id.startsWith(v)) ) {
                where.type_id = type_id;
            }

            if (Object.keys(where).length > 0) {
                const response = await connectAPI(API_URL_LIST.partnerGet, {
                    data: where,
                    showStatus: false
                });

                if (response.status === API_STATUS_RESULT.SUCCESS && response.result !== null) {
                    setFromDB(response.result);

                    if (id === undefined) {
                        setId(response.result.id)
                    }
                } else {
                    setFromDB({});
                }

            } else {
                setFromDB({});
            }

        })();

    }, [id]);

    useEffect(() => {

        if (isWebContent && id === undefined) {
            setMenu(speedMenuList.filter(v => v.isNew === true));
        } else if (fromDB !== undefined) {
            if (fromDB.publish === 1) {
                setMenu(speedMenuList.filter(v => v.id !== 'publish'));
            } else {
                setMenu(speedMenuList);
            }
        }
    }, [fromDB]);

    const childProp = {
        type_id,
        config,
        isSave,
        setSave,
        fromDB,
        id,
        onSubmit: handleSubmit,
    }

    return <>
        {{
            'detail': <PartnerDetailForm {...childProp} />,
            'publish_period': <PublishPage {...childProp} />,
        }[page]}
        <ConfirmPopup open={publishPopupOpen} handleClose={() => setPublishPopupOpen(false)}
                      handleConfirm={handlePublish}>
            {t("global.publish_alert_description")}
        </ConfirmPopup>
        <SpeedMenu menu={menu}/>
    </>;
}
