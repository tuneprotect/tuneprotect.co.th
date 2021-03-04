import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useTranslation} from 'react-i18next';
import clsx from "clsx";
import {Button, Icon, makeStyles} from "@material-ui/core";
import {useFormik} from "formik";
import {API_STATUS_RESULT, API_URL_LIST} from "../../../../config/config";
import Form from "../../../component/form/Form";
import globalStyle from "../../../../asset/jss/standard";
import SpeedMenu from "../../../component/SpeedMenu";
import {checkAction, connectAPI} from "../../../../asset/lib/FormHelper";
import ConfirmPopup from "../../../component/ConfirmPopup";
import CustomField from "../../../component/form/CustomField";
import {getUnPublish} from "../../../../asset/lib/SystemHelper";

const useStyles = makeStyles((theme) => ({
    fieldWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: "0 10px",
        marginBottom: 5
    },
    btnPublishWrapper: {
        marginTop: 16,
        marginBottom: 8,
        marginLeft: 10
    },
    ...globalStyle(theme)
}));

export default function SettingPage() {
    const classes = useStyles();
    const {t} = useTranslation();
    const {mainIcon, mainTitle} = useSelector(({system}) => system);
    const [initialValue, setInitialValue] = useState({});
    const [publish, setPublish] = useState({
        id: null,
        open: false
    });

    const speedMenuList = (() => {
        let arr = []

        arr.push({
            id: "save",
            icon: <Icon>save</Icon>,
            tooltipTitle: t("global.save"),
            className: classes.btnSave,
            onClick: () => submitForm(),
        });

        if (checkAction('configuration.setting.publish')) {
            arr.push({
                id: "publish",
                icon: <Icon>publish</Icon>,
                tooltipTitle: t("global.publish"),
                className: classes.btnPublish,
                onClick: () => setPublish({
                    id: "all",
                    open: true
                })
            });
        }

        return arr;
    })();

    const [menu, setMenu] = useState([]);
    const {values, handleChange, handleSubmit, isSubmitting, handleBlur, setValues, submitForm} = useFormik({
        initialValues: initialValue,
        onSubmit: async (values) => {
            let changedData = {};

            Object.values(values).map(v => {
                if (values[v.id].value !== initialValue[v.id].value) {
                    changedData[v.id] = v.value
                }
            });
            if (Object.keys(changedData).length > 0) {
                const response = await connectAPI(API_URL_LIST.settingSaveAll, {
                    data: {changed: changedData,}
                });
                if (response.status === API_STATUS_RESULT.SUCCESS) {
                    let newValue = values;
                    Object.keys(changedData).forEach(k => {
                        newValue[k].publish = 0;
                    });
                    setInitialValue({...values, ...newValue});
                    setValues({...values, ...newValue});
                    getUnPublish();
                }

            }
        }
    });

    const handleClose = () => {
        setPublish({
            id: null,
            open: false
        })
    }
    const handlePublish = async () => {
        setPublish({
            id: null,
            open: false
        })
        const response =await connectAPI(API_URL_LIST.settingPublish, {
            data: {id: publish.id}
        });
        if (response.status === API_STATUS_RESULT.SUCCESS) {
            if (publish.id === 'all') {
                let newValue = values;
                Object.keys(newValue).forEach(v => newValue[v].publish = 1);
                setValues({...newValue});
            } else {
                setValues({...values, [publish.id]: {...values[publish.id], publish: 1}});
            }
            getUnPublish();
        }
    };

    useEffect(() => {
        (async () => {
            const response =await connectAPI(API_URL_LIST.settingGetAll, {
                showStatus: false
            });
            setInitialValue(response.result);
            setValues(response.result);

        })();
    }, []);

    useEffect(() => {
        const allPublish = Object.keys(values).every(k => values[k].publish === 1);
        let tempMenu = speedMenuList;
        if (allPublish) {
            tempMenu = tempMenu.filter(v => v.id !== 'publish');
        }

        if (!Object.keys(values).some(k => values[k].value !== initialValue[k].value)) {
            tempMenu = tempMenu.filter(v => v.id !== 'save');
        }
        setMenu(tempMenu);
    }, [values]);

    return (
        <>
            <Form icon={mainIcon}
                  title={mainTitle}
                  handleSubmit={handleSubmit}
                  className={classes.centerBox}>
                {Object.values(values).map((v) => {
                    return <div key={v.id} className={clsx(classes.fieldWrapper, v.publish === 0 && classes.unPublish)}>
                        <CustomField
                            name={`${v.id}.value`}
                            label={t("setting." + v.id)}
                            onChange={handleChange}
                            value={v.value || ''}
                            onBlur={handleBlur}
                        />
                        {v.publish === 0 && checkAction('configuration.setting.publish') &&
                        <div className={classes.btnPublishWrapper}>
                            <Button variant="contained" className={classes.btnPublish}
                                    onClick={() => setPublish({
                                        id: v.id,
                                        open: true
                                    })}>
                                <Icon>publish</Icon>
                            </Button>
                        </div>}
                    </div>
                })}
                <button type="submit" onClick={handleSubmit} style={{display: "none"}}
                        disabled={!Object.keys(values).some(k => values[k].value !== initialValue[k].value) || isSubmitting}/>
            </Form>
            <SpeedMenu menu={menu}/>
            <ConfirmPopup open={publish.open} handleClose={handleClose} handleConfirm={handlePublish}>
                {t("global.publish_alert_description")}
            </ConfirmPopup>
        </>
    )

}
