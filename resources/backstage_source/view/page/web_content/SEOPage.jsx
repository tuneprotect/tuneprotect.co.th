import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useTranslation} from 'react-i18next';
import {useFormik} from "formik";
import ImagePicker from "../../component/form/ImagePicker";
import CustomField from "../../component/form/CustomField";
import {arrangeValue, calInitValidation} from "../../../asset/lib/FormHelper";
import LocaleTab from "../../component/form/LocaleTab";
import Translate from "../../component/Translate";
import {WYSIWYGEditor} from "../../component/form/WYSIWYGEditor";
import InputAdornment from '@material-ui/core/InputAdornment';

const SEO_PROPERTY = {
    og_image: {
        label: <Translate id="global.og_image"/>,
        width: 1200,
        height: 630,
    },
    page_title: {
        counter: true,
        // validate: Yup.string()
        //     .required(<Translate id="error_message.required"/>),
        fieldProp: {
            required: true,
            label: <Translate id="global.page_title"/>,
        }
    },
    page_keyword: {
        fieldProp: {
            label: <Translate id="global.page_keyword"/>,
        }
    },
    page_desc: {
        counter: true,
        fieldProp: {
            multiline: true,
            label: <Translate id="global.page_desc"/>,
        }
    },
    og_title: {
        counter: true,
        fieldProp: {
            label: <Translate id="global.og_title"/>,
        }
    },
    og_desc: {
        counter: true,
        fieldProp: {
            multiline: true,
            label: <Translate id="global.og_desc"/>,
        }
    },
}
const SEO_FIELD = ['id', 'friendly_url', 'type_id','og_image'];
const SEO_LOCALE_FIELD = ['page_title', 'page_keyword', 'page_desc', 'og_title', 'og_desc'];

export default function SEOPage({type_id, config, fromDB, onSubmit, isSave, setSave}) {

    const {t,i18n} = useTranslation();
    const {languageSupport} = useSelector(({system}) => system);
    const [locale, setLocale] = useState(i18n.language || i18n.options.fallbackLng[0]);
    const initial = calInitValidation(SEO_PROPERTY, languageSupport, SEO_FIELD, SEO_LOCALE_FIELD);
    const {values, touched, errors, handleChange, handleSubmit, isSubmitting, handleBlur, setValues, submitForm, setFieldValue} = useFormik({
        initialValues: initial.value,
        validationSchema: initial.schema,
        onSubmit: async (values) => {
            onSubmit(values);
        }
    });

    const handleChangeLocale = (event, newValue) => {
        setLocale(newValue);
    };

    useEffect(() => {
        let data = arrangeValue(fromDB, languageSupport, SEO_FIELD, SEO_LOCALE_FIELD);
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
            {SEO_PROPERTY.og_image !== undefined &&
            <ImagePicker {...SEO_PROPERTY.og_image} value={(values?.og_image || '')}
                         onSelectedFile={(url) => setValues({...values, og_image: url})}/>}

            {config.friendly_url !== undefined &&
            <CustomField
                label={t("global.friendly_url")}
                name="friendly_url"
                error={touched?.friendly_url && errors?.friendly_url !== undefined}
                helperText={touched?.friendly_url && errors?.friendly_url || ''}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values?.friendly_url || ''}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            {config.friendly_url.prefix}
                        </InputAdornment>
                    ),
                }}
            />}
            <LocaleTab locale={locale} handleChangeLocale={handleChangeLocale} errors={errors}/>

            {Object.values(languageSupport).map(v => (
                <div key={v.code} hidden={v.code !== locale}>
                    {Object.keys(SEO_PROPERTY)
                        .filter(k => SEO_LOCALE_FIELD.indexOf(k) !== -1)
                        .map(k => {
                            let name = `locales.${v.code}.${k}`;
                            if (config[k]?.editor === true) {
                                return <WYSIWYGEditor
                                    key={name}
                                    label={SEO_PROPERTY[k].label}
                                    value={values?.locales?.[v.code]?.[k] || ''}
                                    setValues={(val) => setFieldValue(`locales.${v.code}.${k}`, val)}
                                />
                            }
                            return <CustomField
                                key={name}
                                config={SEO_PROPERTY[k]}
                                name={name}
                                error={touched?.locales?.[v.code]?.[k] && errors?.locales?.[v.code]?.[k] !== undefined}
                                helperText={touched?.locales?.[v.code]?.[k] && errors?.locales?.[v.code]?.[k] || ''}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.locales?.[v.code]?.[k] || ''}
                                {...SEO_PROPERTY[k].fieldProp}
                            />

                        })}
                </div>
            ))}
            <button type="submit" onClick={handleSubmit} style={{display: "none"}} disabled={isSubmitting}/>
        </form>
    );
}
