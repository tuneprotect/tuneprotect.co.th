import React, {useState} from 'react';
import {Button, TextField} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert/Alert";
import {useTranslation} from 'react-i18next';
import Gravatar from "react-gravatar";
import * as Yup from "yup";
import {useFormik} from "formik";
import {connectAPI} from "../../../../asset/lib/FormHelper";
import {API_STATUS_RESULT, API_URL_LIST} from '../../../../config/config';

export default function ForgotPasswordForm({onFormHandler, classes}) {
    const {t} = useTranslation();
    const [forgotPasswordStatus, setForgotPasswordStatus] = useState({
        status: false,
        text: ''
    });
    const {values, touched, errors, handleChange, handleSubmit, isSubmitting} = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .email(t("error_message.email_not_valid"))
                .required(t("error_message.required"))
        }),
        onSubmit: async (values) => {

            const response = await connectAPI(API_URL_LIST.userForgotPassword, {
                data: {email: values.email,},
                showStatus: false,
                showLoading: false
            })

            setForgotPasswordStatus({
                status: response.status === API_STATUS_RESULT.SUCCESS,
                text: t(Object.keys(response.status_text)[0])
            });
        }
    });

    return (
        forgotPasswordStatus.status ?
            <Alert variant="filled" severity='success'>
                {forgotPasswordStatus.text}
            </Alert>
            :
            <form onSubmit={handleSubmit} className={classes.form} autoComplete="off">
                {isSubmitting && <div className="ajax_loader"/>}
                <div className="text-center">
                    <Gravatar email={values.email} size={80} rating="pg" default="mm"
                              style={{borderRadius: "100%"}}/>

                    {forgotPasswordStatus.text &&
                    <Alert variant="filled" severity='error'>
                        {forgotPasswordStatus.text}
                    </Alert>
                    }
                </div>
                <div>
                    <TextField
                        error={touched.email && errors.email !== undefined}
                        helperText={touched.email && errors.email}
                        margin="normal" required type="email" fullWidth
                        label={t("global.email")} name="email" autoFocus
                        onChange={handleChange} value={values.email} maxLength="40"/>
                </div>
                <div className={classes.btnWrapper}>
                    <Button type="submit" fullWidth variant="contained" color="primary"
                            disabled={isSubmitting}>
                        {t("reset_password.reset_password_head")}
                    </Button>
                </div>
                <Button color="primary" onClick={onFormHandler}>
                    {t("login.return_to_sign_in")}
                </Button>
            </form>
    )
}
