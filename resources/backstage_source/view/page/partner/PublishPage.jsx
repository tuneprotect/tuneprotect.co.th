import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {useSelector} from "react-redux";
import {useFormik} from "formik";
import {useTranslation} from 'react-i18next';
import globalStyle from "../../../asset/jss/standard";
import {arrangeValue, calInitValidation} from "../../../asset/lib/FormHelper";
import {KeyboardDateTimePicker,} from '@material-ui/pickers';
import {DATE_FORMAT} from "../../../config/config";
import Translate from "../../component/Translate";
import {format} from 'date-fns'

const useStyles = makeStyles(theme => ({

    pickerDialog: {
        '& .MuiTypography-h3': {
            fontSize: 10
        }
    },

    ...globalStyle(theme)
}));

const PUBLISH_PROPERTY = {
    start_date: {
        label: <Translate id="global.og_image"/>,
        // validate: Yup.date().required(),
    },
    end_date: {
        label: <Translate id="global.page_title"/>,
        // validate: Yup
        //     .date()
        //     .when(
        //         'startDate',
        //         (startDate, schema) => (startDate && schema.min(startDate)),
        //     )
    },
}
const PUBLISH_FIELD = ['id', 'type_id', 'start_date', 'end_date'];
const PUBLISH_LOCALE_FIELD = [];

export default function PublishPage({type_id, config, fromDB, onSubmit, isSave, setSave}) {
    const classes = useStyles();
    const {t} = useTranslation();
    const {languageSupport} = useSelector(({system}) => system);
    const initial = calInitValidation(PUBLISH_PROPERTY, languageSupport, PUBLISH_FIELD, PUBLISH_LOCALE_FIELD);
    const {values, touched, errors, handleChange, handleSubmit, isSubmitting, handleBlur, setValues, submitForm, setFieldValue} = useFormik({
        initialValues: initial.value,
        validationSchema: initial.schema,
        onSubmit: async (values) => {
            onSubmit(values);
        }
    });

    useEffect(() => {
        let data = arrangeValue(fromDB, languageSupport, PUBLISH_FIELD, PUBLISH_LOCALE_FIELD);
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
            {Object.keys(PUBLISH_PROPERTY).map((k, i) => (
                <div key={k}>
                    <br/>
                    <KeyboardDateTimePicker
                        clearable
                        label={t(`global.${k}`)}
                        name={`${k}`}
                        onChange={date => setFieldValue(`${k}`, date ? format(date, DATE_FORMAT.LOG_DATE) : date, false)}
                        onBlur={handleBlur}
                        error={touched?.[k] && errors?.[k] !== undefined}
                        helperText={touched?.[k] && errors?.[k] || ''}
                        format={DATE_FORMAT.SHORT_DATE_TIME}
                        value={values?.[k] || null}
                        ampm={false}
                        style={{width: "100%"}}
                        labelFunc={(date) => {
                            if (date !== null) {
                                return format(date, DATE_FORMAT.SHORT_DATE_TIME);
                            } else {
                                return '';
                            }
                        }}
                    />
                </div>))}
            <button type="submit" onClick={handleSubmit} style={{display: "none"}} disabled={isSubmitting}/>
        </form>
    );
}
