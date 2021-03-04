import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from 'react-i18next';
import {Icon, makeStyles} from "@material-ui/core";
import {useFormik} from "formik";
import * as Yup from "yup";
import Form from "../../component/form/Form";
import globalStyle from "../../../asset/jss/standard";
import {API_STATUS_RESULT, API_URL_LIST} from "../../../config/config";
import {changeAdminData} from "../../../store/system/SystemReducer";
import {calInitValidation, connectAPI} from "../../../asset/lib/FormHelper";
import CustomField from "../../component/form/CustomField";
import Translate from "../../component/Translate";
import SpeedMenu from "../../component/SpeedMenu";

const useStyles = makeStyles((theme) => ({
    ...globalStyle(theme)
}));

const config = {
    first_name: {
        validate: Yup.string()
            .max(50, <Translate id="error_message.too_long"/>)
            .required(<Translate id="error_message.required"/>),
        fieldProp: {
            label: <Translate id={'global.first_name'}/>,
            required: true
        }
    },
    last_name: {
        validate: Yup.string()
            .max(50, <Translate id="error_message.too_long"/>)
            .required(<Translate id="error_message.required"/>),

        fieldProp: {
            label: <Translate id="global.last_name"/>,
            required: true
        }
    },
    email: {
        validate: Yup.string()
            .email(<Translate id="error_message.email_not_valid"/>)
            .required(<Translate id="error_message.required"/>),

        fieldProp: {
            label: <Translate id="global.email"/>,
            required: true
        }
    },
}

export default function ProfilePage() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const {t} = useTranslation();
    const initial = calInitValidation(config);
    const {mainIcon, mainTitle, adminData} = useSelector(({system}) => system);
    const speedMenuList = [{
        icon: <Icon>save</Icon>,
        tooltipTitle: t("global.save"),
        className: classes.btnSave,
        onClick: () => submitForm(),
        isNew: true
    }];
    const [menu, setMenu] = useState([]);
    const {values, touched, errors, handleChange, handleSubmit, isSubmitting, handleBlur, submitForm, dirty, resetForm} = useFormik({
        initialValues: {
            first_name: adminData.first_name,
            last_name: adminData.last_name,
            email: adminData.email
        },
        validationSchema: initial.schema,
        onSubmit: async (values) => {
            const response = await connectAPI(API_URL_LIST.userSave, {
                data: {
                    id: adminData.admin_id,
                    first_name: values.first_name,
                    last_name: values.last_name,
                    email: values.email
                }
            });

            if (response.status === API_STATUS_RESULT.SUCCESS) {
                const changeData = {
                    first_name: values.first_name,
                    last_name: values.last_name,
                    email: values.email,
                };

                resetForm({values})
                dispatch(changeAdminData(changeData));
            }
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
            className={classes.centerBox}>
            {Object.keys(config).map(k =>
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
                />
            )}
            <button type="submit" onClick={handleSubmit} style={{display: "none"}} disabled={!dirty || isSubmitting}/>
            <SpeedMenu menu={menu}/>
        </Form>
    )
}
