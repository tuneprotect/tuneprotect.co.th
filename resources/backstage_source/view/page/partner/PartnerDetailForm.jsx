import React, {useEffect, useState} from "react";
import {useFormik} from "formik";
import {useSelector} from "react-redux";
import {useTranslation} from 'react-i18next'
import {InputLabel, MenuItem, Select} from '@material-ui/core';
import CustomField from "../../component/form/CustomField";
import {arrangeValue, calInitValidation, connectAPI} from "../../../asset/lib/FormHelper";
import LocaleTab from "../../component/form/LocaleTab";
import {WYSIWYGEditor} from "../../component/form/WYSIWYGEditor";
import {API_STATUS_RESULT, API_URL_LIST} from "../../../config/config";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import provinceData from "../../../../../storage/app/public/json/province.json";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const WEB_CONTENT_FIELD = ['cat_id', 'type_id', 'id', 'website', 'tel', 'province', 'partner_language', 'location'];
const WEB_CONTENT_LOCALE_FIELD = ['title', 'address'];

export default function PartnerDetailForm({type_id, config, fromDB, onSubmit, isSave, setSave}) {

    const {languageSupport} = useSelector(({system}) => system);
    const {t, i18n} = useTranslation();
    const [locale, setLocale] = useState(i18n.language || i18n.options.fallbackLng[0]);
    const initial = calInitValidation(config, languageSupport, WEB_CONTENT_FIELD, WEB_CONTENT_LOCALE_FIELD);
    const [category, setCategory] = useState([]);
    const {
        values,
        touched,
        errors,
        handleChange,
        handleSubmit,
        handleBlur,
        setValues,
        submitForm,
        isSubmitting,
        setFieldValue
    } = useFormik({
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

            {config.website !== undefined &&
            <CustomField
                label={config.website.fieldProp.label}
                name="website"
                error={touched?.website && errors?.website !== undefined}
                helperText={touched?.website && errors?.website || ''}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values?.website || ''}
                {...config.website.fieldProp}
            />}

            {config.location !== undefined &&
            <CustomField
                label={config.location.fieldProp.label}
                name="location"
                error={touched?.location && errors?.location !== undefined}
                helperText={touched?.location && errors?.location || ''}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values?.location || ''}
                {...config.location.fieldProp}
            />}

            {config.tel !== undefined &&
            <CustomField
                label={config.tel.fieldProp.label}
                name="tel"
                error={touched?.tel && errors?.tel !== undefined}
                helperText={touched?.tel && errors?.tel || ''}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values?.tel || ''}
                {...config.tel.fieldProp}
            />}

            {config.province !== undefined &&
            <FormControl required style={{display: "block"}} className={"MuiFormControl-marginNormal"}
                         error={touched?.province && errors?.province !== undefined}>
                <InputLabel id="province">{config.province.label}</InputLabel>
                <Select
                    labelId="province"
                    id="province"
                    name="province"
                    value={values?.province}
                    onChange={handleChange}
                    style={{width: "100%"}}
                >
                    <MenuItem value=""> <em>{t('global.none')}</em> </MenuItem>
                    {provinceData.map(v => <MenuItem key={v.code}
                                                     value={v.code}>{v[i18n.language]}</MenuItem>)}
                </Select>
                <FormHelperText>{touched?.province && errors?.province || ''}</FormHelperText>
            </FormControl>}

            {/*{config.partner_language !== undefined && <FormControl*/}
            {/*    required style={{display: "block"}} className={"MuiFormControl-marginNormal"}*/}
            {/*    error={touched?.province && errors?.province !== undefined}>*/}
            {/*    <label id="province">{config.partner_language.fieldProp.label}</label>*/}
            {/*    <FormGroup row>*/}
            {/*        {Object.values(languageSupport).map(v => <FormControlLabel*/}
            {/*            key={v.code}*/}
            {/*            control={<Checkbox*/}
            {/*                checked={values.partner_language[v.code]}*/}
            {/*                onChange={() => setFieldValue(`partner_language.${v.code}`, !values.partner_language[v.code])}*/}
            {/*                name="partner_language"/>}*/}
            {/*            label={v.title}*/}
            {/*        />)}*/}
            {/*    </FormGroup></FormControl>}*/}
            <button type="submit" onClick={handleSubmit} style={{display: "none"}} disabled={isSubmitting}/>
        </form>
    );
}
