import React from "react";
import {useSelector} from "react-redux";
import {Icon, makeStyles} from "@material-ui/core";
import {useTranslation} from 'react-i18next';

import globalStyle from "../../../asset/jss/standard";
import SpeedMenu from "../../component/SpeedMenu";
import ProjectCard from "../../component/ProjectCard";
import {calInitValidation, connectAPI} from "../../../asset/lib/FormHelper";
import {API_STATUS_RESULT, API_URL_LIST} from "../../../config/config";
import * as Yup from "yup";
import Translate from "../../component/Translate";
import {useFormik} from "formik";
import CustomField from "../../component/form/CustomField";

const useStyles = makeStyles((theme) => ({
    ...globalStyle(theme)
}));


const config = {
    to: {
        validate: Yup.string()
            .required(<Translate id="error_message.required"/>)
            .email(<Translate id="error_message.email_not_valid"/>),
        fieldProp: {
            label: <Translate id={'global.email'}/>,
            required: true
        }
    },
    subject: {
        validate: Yup.string()
            .required(<Translate id="error_message.required"/>),
        fieldProp: {
            label: <Translate id="global.subject"/>,
            required: true
        }
    },
    content: {
        validate: Yup.string()
            .required(<Translate id="error_message.required"/>),
        fieldProp: {
            label: <Translate id="global.content"/>,
            required: true
        }
    },
}


export default function TestingEmailPage() {
    const classes = useStyles();
    const {t} = useTranslation();
    const {mainIcon, mainTitle} = useSelector(({system}) => system);
    const initial = calInitValidation(config);

    const initValue = {
        to: '',
        subject: '',
        content: ''
    };

    const {values, touched, errors, handleChange, handleSubmit, handleBlur, setValues, submitForm, isSubmitting, setFieldValue} = useFormik({
        initialValues: initValue,
        validationSchema: initial.schema,
        onSubmit: (values) => submitData(values)
    });

    const speedMenuList = (() => {
        let arr = [];

        arr = [
            {
                icon: <Icon>save</Icon>,
                tooltipTitle: t("global.save"),
                className: classes.btnSave,
                onClick: handleSubmit,
                isNew: true
            },
        ]
        return arr;
    })();

    const submitData = async (values) => {
        const response = await connectAPI(API_URL_LIST.testEmail, {
            data: values
        });

        if (response.status === API_STATUS_RESULT.SUCCESS) {

            setValues({...initValue})


        }
    }


    return (
        <ProjectCard icon={mainIcon} title={mainTitle}>
            <form onSubmit={handleSubmit} noValidate autoComplete="off">

                {Object.keys(config).map(k => {
                    return <CustomField
                        key={k}
                        name={k}
                        error={touched?.[k] && errors?.[k] !== undefined}
                        helperText={touched?.[k] && errors?.[k] || ''}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values?.[k] || ''}
                        {...config[k].fieldProp}
                    />
                })}
                <button type="submit" onClick={handleSubmit} style={{display: "none"}} disabled={isSubmitting}/>
            </form>
            <SpeedMenu menu={speedMenuList}/>
        </ProjectCard>

    )
}
