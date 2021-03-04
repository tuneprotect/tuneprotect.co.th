import React, {useEffect, useState} from "react";
import {useFormik} from "formik";
import {useSelector} from "react-redux";
import {useTranslation} from 'react-i18next'
import {InputLabel, MenuItem, Select} from '@material-ui/core';
import ImagePicker from "../../component/form/ImagePicker";
import CustomField from "../../component/form/CustomField";
import {arrangeValue, calInitValidation, connectAPI} from "../../../asset/lib/FormHelper";
import LocaleTab from "../../component/form/LocaleTab";
import {WYSIWYGEditor} from "../../component/form/WYSIWYGEditor";
import {API_STATUS_RESULT, API_URL_LIST, DATE_FORMAT} from "../../../config/config";
import {KeyboardDateTimePicker} from "@material-ui/pickers";
import {format} from "date-fns";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import VideoPicker from "../../component/form/VideoPicker";
import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css';
import '@icon/icofont/icofont.css';

const WEB_CONTENT_FIELD = ['pic','pic_en', 'pic_mobile','pic_mobile_en', 'cat_id', 'parent_id', 'type_id', 'id', 'video_link', 'action_date', 'action_link', 'code', 'custom_input_1', 'custom_input_2', 'custom_input_3'];
const WEB_CONTENT_LOCALE_FIELD = ['title', 'sub_title', 'content', 'remark'];
export default function WebContentDetailForm({type_id, config, fromDB, onSubmit, isSave, setSave}) {

    const {languageSupport} = useSelector(({system}) => system);
    const {t, i18n} = useTranslation();
    const [locale, setLocale] = useState(i18n.language || i18n.options.fallbackLng[0]);
    const initial = calInitValidation(config, languageSupport, WEB_CONTENT_FIELD, WEB_CONTENT_LOCALE_FIELD);
    const [category, setCategory] = useState([]);
    const {values, touched, errors, handleChange, handleSubmit, handleBlur, setValues, submitForm, isSubmitting, setFieldValue} = useFormik({
        initialValues: initial.value,
        validationSchema: initial.schema,
        onSubmit: onSubmit
    });

    const handleChangeLocale = (event, newValue) => {
        setLocale(newValue);
    };

    useEffect(() => {
        if (config.cat_id !== undefined) {
            setValues({...values, cat_id: ''});
            (async () => {
                const response = await connectAPI(API_URL_LIST.webContentGetAll, {
                    data: {type_id: config.cat_id.type_id},
                    showStatus: false,
                    showLoading: false
                })
                if (response.status === API_STATUS_RESULT.SUCCESS) {
                    setCategory(response.result);
                }
            })();
        }
    }, []);

    useEffect(() => {
        let data = arrangeValue(fromDB, languageSupport, WEB_CONTENT_FIELD, WEB_CONTENT_LOCALE_FIELD);
        data.type_id = type_id;
        setValues({...values, ...data});
    }, [fromDB]);

    useEffect(() => {
        if (isSave) {
            submitForm();
            setSave(false);
        }
    }, [isSave]);

    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">



            {config?.pic !== undefined &&
            <ImagePicker
                {...config.pic.fieldProp}
                value={(values?.pic || '')}
                error={touched?.pic && errors?.pic !== undefined}
                helperText={touched?.pic && errors?.pic || ''}
                onSelectedFile={(url) => setValues({...values, pic: url})}/>}
            {config.pic_mobile !== undefined &&
            <ImagePicker
                {...config.pic_mobile.fieldProp}
                value={(values?.pic_mobile || '')}
                error={touched?.pic_mobile && errors?.pic_mobile !== undefined}
                helperText={touched?.pic_mobile && errors?.pic_mobile || ''}
                onSelectedFile={(url) => setValues({
                    ...values,
                    pic_mobile: url
                })}/>}

            {config?.pic_en !== undefined &&
            <ImagePicker
                {...config.pic_en.fieldProp}
                value={(values?.pic_en || '')}
                error={touched?.pic_en && errors?.pic_en !== undefined}
                helperText={touched?.pic_en && errors?.pic_en || ''}
                onSelectedFile={(url) => setValues({...values, pic_en: url})}/>}
            {config.pic_mobile_en !== undefined &&
            <ImagePicker
                {...config.pic_mobile_en.fieldProp}
                value={(values?.pic_mobile_en || '')}
                error={touched?.pic_mobile_en && errors?.pic_mobile_en !== undefined}
                helperText={touched?.pic_mobile_en && errors?.pic_mobile_en || ''}
                onSelectedFile={(url) => setValues({
                    ...values,
                    pic_mobile_en: url
                })}/>}

            {config.icon !== undefined &&
            <FontIconPicker
                {...config.icon.fieldProp}
                value={values.pic}
                onChange={(icon) => {
                    setValues({...values, pic: icon})
                }}
            />}

            {config.video_link !== undefined &&
            <VideoPicker
                label={config.video_link.fieldProp.label}
                name="video_link"
                error={touched?.video_link && errors?.video_link !== undefined}
                helperText={touched?.video_link && errors?.video_link || ''}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values?.video_link || ''}
                onSelectedFile={(url) => setValues({
                    ...values,
                    video_link: url
                })}
            />}


            {config.cat_id !== undefined &&
            <FormControl required style={{display: "block"}} className={"MuiFormControl-marginNormal"}
                         error={touched?.cat_id && errors?.cat_id !== undefined}>
                <InputLabel id="cat_id">{config.cat_id.label}</InputLabel>
                <Select
                    labelId="cat_id"
                    id="cat_id"
                    name="cat_id"
                    value={values?.cat_id}
                    onChange={handleChange}
                    style={{width: "100%"}}
                >
                    <MenuItem value=""> <em>{t('global.none')}</em> </MenuItem>
                    {category.map(v => <MenuItem key={v.id} value={v.id}>{v.locales[i18n.language].title}</MenuItem>)}
                </Select>
                <FormHelperText>{touched?.cat_id && errors?.cat_id || ''}</FormHelperText>
            </FormControl>}

            {config.action_date !== undefined &&
            <KeyboardDateTimePicker
                clearable
                name='action_date'
                onChange={date => {
                    setFieldValue("action_date", format(date, DATE_FORMAT.LOG_DATE), false)
                }}
                onBlur={handleBlur}
                error={touched?.action_date && errors?.action_date !== undefined}
                helperText={touched?.action_date && errors?.action_date || ''}
                format={DATE_FORMAT.SHORT_DATE_TIME}
                value={values?.action_date || null}
                ampm={false}
                style={{width: "100%"}}
                labelFunc={(date) => {
                    if (date) {
                        return format(date, DATE_FORMAT.SHORT_DATE_TIME);
                    } else {
                        return '';
                    }
                }}
                {...config.action_date.fieldProp}
            />
            }
            {config.action_link !== undefined &&
            <CustomField
                label={config.action_link.fieldProp.label}
                name="action_link"
                error={touched?.action_link && errors?.action_link !== undefined}
                helperText={touched?.action_link && errors?.action_link || ''}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values?.action_link || ''}
                {...config.action_link.fieldProp}
            />}

            {config.code !== undefined &&
            <CustomField
                label={config.code.fieldProp.label}
                name="code"
                error={touched?.code && errors?.code !== undefined}
                helperText={touched?.code && errors?.code || ''}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values?.code || ''}
                {...config.code.fieldProp}
            />}


            <LocaleTab locale={locale} handleChangeLocale={handleChangeLocale} errors={errors}/>

            {Object.values(languageSupport).map(v => (
                <div key={v.code} hidden={v.code !== locale}>
                    {Object.keys(config)
                        .filter(k => WEB_CONTENT_LOCALE_FIELD.indexOf(k) !== -1)
                        .map(k => {
                            let name = `locales.${v.code}.${k}`;
                            if (config[k]?.fieldProp.editor === true) {
                                return <WYSIWYGEditor
                                    key={name}
                                    label={config[k].fieldProp.label}
                                    value={values?.locales?.[v.code]?.[k] || ''}
                                    setValues={(val) => setFieldValue(`locales.${v.code}.${k}`, val)}
                                />
                            }

                            return <CustomField
                                key={name}
                                name={name}
                                config={config[k]}
                                error={touched?.locales?.[v.code]?.[k] && errors?.locales?.[v.code]?.[k] !== undefined}
                                helperText={touched?.locales?.[v.code]?.[k] && errors?.locales?.[v.code]?.[k] || config[k]?.fieldProp?.helperText || ''}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                label={config[k].label}
                                value={values?.locales?.[v.code]?.[k] || ''}
                                {...config[k].fieldProp}
                            />

                        })}
                </div>
            ))}
            <button type="submit" onClick={handleSubmit} style={{display: "none"}} disabled={isSubmitting}/>
        </form>
    );
}
