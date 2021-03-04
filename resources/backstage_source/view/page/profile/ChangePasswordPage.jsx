import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Icon, makeStyles} from "@material-ui/core";
import {useTranslation} from 'react-i18next';
import {useFormik} from "formik";
import * as Yup from "yup";
import Form from "../../component/form/Form";
import globalStyle from "../../../asset/jss/standard";
import {API_URL_LIST} from "../../../config/config";
import {calInitValidation, connectAPI} from "../../../asset/lib/FormHelper";
import CustomField from "../../component/form/CustomField";
import SpeedMenu from "../../component/SpeedMenu";
import Translate from "../../component/Translate";

const useStyles = makeStyles((theme) => ({
    ...globalStyle(theme)
}));

const config = {
    old_password: {
        validate: Yup.string()
            .min(6, <Translate id="error_message.too_short"/>)
            .max(16, <Translate id="error_message.too_long"/>)
            .required(<Translate id="error_message.required"/>),
        fieldProp: {
            label: <Translate id="global.old_password"/>,
            required: true,
            type: "password",
        }
    },
    password: {
        validate: Yup.string()
            .min(6, <Translate id="error_message.too_short"/>)
            .max(16, <Translate id="error_message.too_long"/>)
            .required(<Translate id="error_message.required"/>),
        fieldProp: {
            label: <Translate id="global.password"/>,
            required: true,
            type: "password",
        }
    },
    password_confirmation: {
        type: "password",
        validate: Yup.string()
            .oneOf([Yup.ref('password'), null], <Translate id="error_message.password_mismatch"/>)
            .required(<Translate id="error_message.required"/>),
        fieldProp: {
            label: <Translate id="global.password_confirm"/>,
            required: true,
            type: "password",
        }
    },
}

export default function ChangePasswordPage() {
    const classes = useStyles();
    const {t} = useTranslation();
    const initial = calInitValidation(config);
    const {mainIcon, mainTitle, adminData} = useSelector(({system}) => system);
    const [menu, setMenu] = useState([]);
    const speedMenuList = [{
        icon: <Icon>save</Icon>,
        tooltipTitle: t("global.save"),
        className: classes.btnSave,
        onClick: () => submitForm(),
        isNew: true
    }];
    const {values, touched, errors, handleChange, handleSubmit, isSubmitting, handleBlur, submitForm, dirty, resetForm} = useFormik({
        initialValues: {
            old_password: "",
            password: "",
            password_confirmation: "",
        },
        validationSchema: initial.schema,
        onSubmit: async (values) => {
            const response = await connectAPI(API_URL_LIST.userChangePassword, {
                data: {
                    id: adminData.admin_id,
                    old_password: values.old_password,
                    password: values.password,
                    password_confirmation: values.password_confirmation,
                }
            });

            resetForm({
                old_password: "",
                password: "",
                password_confirmation: "",
            });

        }
    });
    useEffect(() => {
        setMenu(dirty ? speedMenuList : []);
    }, [dirty]);
    return (
        <Form
            icon={mainIcon}
            title={mainTitle}
            handleSubmit={handleSubmit}
            className={classes.centerBox}
        >
            {Object.keys(config).map(k => (
                <CustomField
                    key={k}
                    config={config[k]}
                    name={k}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched[k] && errors[k] !== undefined}
                    helperText={errors?.[k]}
                    value={values[k]}
                    {...config[k].fieldProp}
                />))}
            <button type="submit" onClick={handleSubmit} style={{display: "none"}} disabled={!dirty || isSubmitting}/>
            <SpeedMenu menu={menu}/>
        </Form>
    )

}
