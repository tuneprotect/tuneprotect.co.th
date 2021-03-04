import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useHistory, useParams} from "react-router-dom";
import * as Yup from "yup";
import {useFormik} from "formik";
import {makeStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import Form from "../../../component/form/Form";
import {API_STATUS_RESULT, API_URL_LIST} from '../../../../config/config';
import APP_ROUTE from "../../../../config/route";
import Alert from "@material-ui/lab/Alert/Alert";
import {calInitValidation, connectAPI} from "../../../../asset/lib/FormHelper";
import Translate from "../../../component/Translate";
import CustomField from "../../../component/form/CustomField";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "rgba(0,0,0,.8)",
    },
    centerBox: {
        borderRadius: "50px",
        textAlign: "center",
        margin: 20,
        width: 400
    },
    btnWrapper: {
        margin: "20px 0"
    }
}));

const config = {
    password: {
        validate: Yup.string()
            .min(6, <Translate id="error_message.too_short"/>)
            .max(16, <Translate id="error_message.too_long"/>)
            .required(<Translate id="error_message.required"/>),
        fieldProp: {
            type: "password",
            label: <Translate id={'global.password'}/>,
            required: true,
        }
    },
    password_confirmation: {
        validate: Yup.string()
            .oneOf([Yup.ref('password'), null], <Translate id="error_message.password_mismatch"/>),
        fieldProp: {
            type: "password",
            label: <Translate id={'global.password_confirm'}/>,
            required: true,
        }
    }
}
const defaultValue = {
    password: '',
    password_confirmation: ''
}
export default function ResetPasswordPage() {
    const {token} = useParams();
    const classes = useStyles();
    const {t} = useTranslation();
    const history = useHistory();
    const [adminId, setAdminId] = useState(null);
    const [formResult, setFormResult] = useState({
        open: false,
        text: ""
    });
    const initial = calInitValidation(config);

    const {values, touched, errors, handleChange, handleSubmit, isSubmitting, handleBlur} = useFormik({
        initialValues: defaultValue,
        validationSchema: initial.schema,
        onSubmit: () => handleSubmitForm()
    });

    const handleSubmitForm = async () => {
        const response = await connectAPI(API_URL_LIST.userResetPassword, {
            data: {
                id: adminId,
                password: values.password,
                password_confirmation: values.password_confirmation,
            },

            showStatus: false,
            showLoading: false
        })

        if (response.err) {
            setFormResult({
                status: false,
                statusText: err.toString()
            });
        } else {
            if (response.status === API_STATUS_RESULT.SUCCESS) {
                history.push(APP_ROUTE.dashboard.url);
            } else {
                setFormResult({
                    open: true,
                    text: t(Object.keys(response.status_text)[0])
                });
            }
        }

    }

    useEffect(() => {
        if (token === undefined) {
            setFormResult({
                open: true,
                text: <Translate id="reset_password.token_mismatch"/>
            });
            setAdminId(false);
        } else {
            (async () => {
                const response = await connectAPI(API_URL_LIST.userGetByToken, {
                    data: {token: token},
                    showStatus: false,
                    showLoading: false
                });

                if (response.err) {
                    setFormResult({
                        open: true,
                        text: err.toString()
                    });
                } else {
                    if (response.status === API_STATUS_RESULT.SUCCESS) {
                        setAdminId(response.result);
                    } else {
                        setAdminId(false);
                    }
                }

            })();
        }
    }, []);

    return (<div className={classes.root}>
            <Form
                icon="vpn_key"
                title={t("reset_password.reset_password_head")}
                handleSubmit={handleSubmit}
                className={classes.centerBox}
            >
                {formResult.open && <Alert variant="filled" severity='error'>
                    {formResult.text}
                </Alert>}
                {adminId !== false && <>
                    {Object.keys(defaultValue).map(k => <CustomField
                        key={k}
                        config={config[k]}
                        name={k}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched[k] && errors[k] !== undefined}
                        helperText={touched[k] && errors[k]}
                        value={values[k]}
                        {...config[k].fieldProp}
                    />)}
                    <div className={classes.btnWrapper}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                        >
                            {t("global.submit")}
                        </Button>
                    </div>
                </>}
            </Form>
        </div>
    )
}
