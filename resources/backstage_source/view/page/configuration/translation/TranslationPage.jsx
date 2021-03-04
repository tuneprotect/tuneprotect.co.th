import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Button, Icon, makeStyles, TextField} from "@material-ui/core";
import {useTranslation} from 'react-i18next';
import clsx from "clsx";
import _ from 'lodash';
import {API_STATUS_RESULT, API_URL_LIST} from "../../../../config/config";
import globalStyle from "../../../../asset/jss/standard";
import LanguageCheckbox from "./LanguageCheckbox";
import SpeedMenu from "../../../component/SpeedMenu";
import {checkAction, connectAPI} from "../../../../asset/lib/FormHelper";
import ConfirmPopup from "../../../component/ConfirmPopup";
import ProjectCard from "../../../component/ProjectCard";
import {getUnPublish} from "../../../../asset/lib/SystemHelper";

const useStyles = makeStyles((theme) => ({
    input: {
        width: '100%'
    },
    table: {
        width: '100%',
        "& th,& td ": {
            padding: '5px 10px'
        },
        "& th": {
            verticalAlign: 'middle',
            textAlign: "left"
        },
        "& tbody th": {
            textAlign: "center"
        },
    },
    ...globalStyle(theme)
}));


export default function TranslatePage() {
    const classes = useStyles();
    const {t} = useTranslation();
    const {mainIcon, mainTitle, languageSupport} = useSelector(({system}) => system);
    const [allLanguage, setAllLanguage] = useState(languageSupport);
    const [filter, setFilter] = useState({});
    const [values, setValues] = useState([]);
    const [changed, setChanged] = useState({});
    const [menu, setMenu] = useState([]);
    const [publish, setPublish] = useState({
        id: null,
        key: null,
        open: false
    });
    const speedMenuList = (() => {
        let arr = [
            {
                id: "save",
                icon: <Icon>save</Icon>,
                tooltipTitle: t("global.save"),
                className: classes.btnSave,
                onClick: () => handleSave(),
            },
            {
                id: "load_from_live",
                icon: <Icon>get_app</Icon>,
                tooltipTitle: t("translation.load_from_live"),
                className: classes.btnDelete,
                hidden: true,
                onClick: () => loadFromLive()
            }
        ]

        if (checkAction('configuration.translation.publish')) {
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
    const handleChange = (e, id, lang) => {
        if (e.target.value !== values[id].text[lang]) {
            setChanged({...changed, ...{[id]: {text: {...changed?.[id]?.text, [lang]: e.target.value}}}});
        } else if (e.target.value === values[id].text[lang]) {
            setChanged(Object.keys(changed).reduce((result, k) => (k !== id) ? {
                    ...result,
                    [k]: changed[k]
                } : (Object.keys(changed[k].text).length === 1) ? {...result} : {
                    ...result,
                    ...{
                        [k]: {
                            text: Object.keys(changed[k].text).reduce((textResult, k1) => {
                                return k1 === lang ? {...textResult} : {...textResult, [k1]: changed[k].text[k1]};
                            }, {})
                        }
                    }
                }
                , {}));
        }
    }
    const handleClose = () => {
        setPublish({
            id: null,
            open: false
        })
    }
    const handleSave = async () => {

        let saveData = {};
        for (let [k] of Object.entries(changed)) {
            saveData[k] = {...values[k], publish: 0};
        }
        saveData = _.merge(saveData, changed);
        const response = await connectAPI(API_URL_LIST.translationSaveAll, {
            data: {
                changed: saveData
            }
        });
        if (response.status === API_STATUS_RESULT.SUCCESS) {
            setChanged({});
            setValues({...values, ...saveData});

            getUnPublish();
        }
    }
    const loadFromLive = async () => {

        const response = await connectAPI(API_URL_LIST.translationLoadFromFile, {});
        if (response.status === API_STATUS_RESULT.SUCCESS) {
            setValues(response.result.translation.reduce((obj, item) => (obj[`${item.group}.${item.key}`] = item, obj), {}));
            getUnPublish();
        }
    };
    const onFilter = (filer_field, filter_value) => {
        setFilter((prevState) => ({...prevState, [filer_field]: filter_value}));
    };
    const handleFilter = (title) => {

        if (Object.keys(filter).length === 0 || Object.keys(filter).every(k => filter[k] === "")) {
            return true;
        }

        return Object.keys(filter).every(k => {
            if (k === 'title' && title.toLowerCase().indexOf(filter[k].toLowerCase()) !== -1) {
                return true;
            } else if (k !== 'title' && (values?.[title]?.text?.[k] || '').toLowerCase().indexOf(filter[k].toLowerCase()) !== -1) {
                return true;
            }
        });

    };
    const handleShownColumn = (e) => {
        setAllLanguage(Object.values(allLanguage).map(v => v.code === e.target.value ? {
            ...v,
            enable: v.enable === 0 ? 1 : 0
        } : v));
    };
    const handlePublish = async () => {
        setPublish({
            id: null,
            key: null,
            open: false
        })
        const response = await connectAPI(API_URL_LIST.translationPublish, {
            data: {id: publish.id}
        });
        if (response.status === API_STATUS_RESULT.SUCCESS) {
            if (publish.id === 'all') {
                let newValue = values;
                Object.keys(newValue).forEach(v => newValue[v].publish = 1);
                setValues({...newValue});
            } else {
                setValues({...values, [publish.key]: {...values[publish.key], publish: 1}});
            }
            getUnPublish();
        }
    };

    useEffect(() => {
        (async () => {
            const response = await connectAPI(API_URL_LIST.translationGetAll, {
                showStatus: false
            })
            const val = response.result.translation.reduce((obj, item) => (obj[`${item.group}.${item.key}`] = item, obj), {});
            setValues(val);

        })();
    }, []);
    useEffect(() => {

        const allPublish = Object.keys(values).every(k => values[k].publish === 1);
        let tempMenu = speedMenuList;
        if (allPublish) {
            tempMenu = tempMenu.filter(v => v.id !== 'publish');
        }

        if (Object.keys(changed).length === 0) {
            tempMenu = tempMenu.filter(v => v.id !== 'save');
        }
        setMenu(tempMenu);
    }, [values, changed]);

    return (
        <>
            <ProjectCard icon={mainIcon} title={mainTitle} className={classes.centerBox}>
                <LanguageCheckbox allLanguage={allLanguage} handleShownColumn={handleShownColumn}/>
                <table className={classes.table}>
                    <thead>
                    <tr>
                        <th>{t("global.title")}</th>
                        {Object.values(allLanguage)
                            .filter(v => v.enable === 1)
                            .map(v => <th className={classes.th} key={v.code}>{v.title}</th>)}
                        <th/>
                    </tr>
                    <tr>
                        <td>
                            <TextField
                                fullWidth multiline style={{margin: '0'}}
                                variant="filled"
                                type="text"
                                onChange={(e) => onFilter('title', e.target.value)}
                            />
                        </td>
                        {Object.values(allLanguage)
                            .filter(v => v.enable === 1)
                            .map(v => <td key={'filter_' + v.code} className={classes.td}>
                                <TextField
                                    fullWidth multiline style={{margin: '0'}}
                                    variant="filled"
                                    type="text"
                                    onChange={(e) => onFilter(v.code, e.target.value)}
                                />
                            </td>)}
                        <td/>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.keys(values)
                        .filter(handleFilter)
                        .map((k) =>
                            <tr key={k} className={clsx(values[k].publish === 0 && classes.unPublish)}>
                                <th>
                                    {`${values[k].group}.${values[k].key}`}
                                </th>
                                {Object.values(allLanguage)
                                    .filter(v => v.enable === 1)
                                    .map(lang => {
                                        const fieldName = `${k}.${lang.code}`;
                                        return <td key={fieldName}>
                                            <TextField
                                                fullWidth multiline style={{margin: '0', minHeight: "100%"}}
                                                margin="normal"
                                                name={fieldName}
                                                type="text"
                                                rows={3}
                                                defaultValue={values?.[k]?.text?.[lang.code] || ""}
                                                onBlur={(e) => handleChange(e, k, lang.code)}
                                                className={clsx((changed?.[k]?.text?.[lang.code] || false) && classes.unPublish)}
                                            />
                                        </td>
                                    })}
                                <th>
                                    {
                                        values[k].publish === 0 && checkAction('configuration.translation.publish') &&
                                        <div className={classes.btnPublishWrapper}>
                                            <Button variant="contained" className={classes.btnPublish}
                                                    onClick={() => setPublish({
                                                        id: values[k].id,
                                                        key: k,
                                                        open: true
                                                    })}>
                                                <Icon>publish</Icon>
                                            </Button>
                                        </div>
                                    }
                                </th>
                            </tr>
                        )}
                    </tbody>
                </table>
            </ProjectCard>
            <ConfirmPopup open={publish.open} handleClose={handleClose} handleConfirm={handlePublish}>
                {t("global.publish_alert_description")}
            </ConfirmPopup>
            <SpeedMenu menu={menu}/>
        </>
    )
}
