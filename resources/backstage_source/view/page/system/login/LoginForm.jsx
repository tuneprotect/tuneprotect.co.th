import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {useTranslation} from 'react-i18next';
import {Button, Fade, Typography} from "@material-ui/core";
import * as Yup from 'yup';
import {useFormik} from "formik";
import Alert from "@material-ui/lab/Alert/Alert";
import Gravatar from "react-gravatar";
import {API_STATUS_RESULT, API_URL_LIST, LOGIN, STORAGE} from '../../../../config/config';
import APP_ROUTE from "../../../../config/route";
import {changeAdminData} from "../../../../store/system/SystemReducer";
import {calInitValidation, connectAPI} from "../../../../asset/lib/FormHelper";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import {SocialIcon} from 'react-social-icons';
import Translate from "../../../component/Translate";
import CustomField from "../../../component/form/CustomField";

const config = {
    email: {
        validate: Yup.string()
            .email(<Translate id="error_message.email_not_valid"/>)
            .required(<Translate id="error_message.required"/>),
        fieldProp: {
            type: "email",
            label: <Translate id="global.email"/>,
            required: true,
            autoFocus: true
        }
    },
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
    }
}
const defaultValue = {
    email: '',
    password: ''
}


export default function LoginForm({onFormHandler, classes, socialLogin}) {

    const dispatch = useDispatch();
    const {t} = useTranslation();
    const history = useHistory();
    const initial = calInitValidation(config);
    const [loginStatusText, setLoginStatusText] = useState("");
    const [loginAttempt, setLoginAttempt] = useState("");
    const [loginLockSecond, setLoginLockSecond] = useState(() => {
        const lock_until = localStorage.getItem(STORAGE.LOCK_TIME);
        if (lock_until !== null) {
            const time_left = Date.parse(lock_until) - new Date().getTime();
            return time_left / 1000;
        }
        return "";
    });

    const {values, touched, errors, handleChange, handleSubmit, isSubmitting, setSubmitting, handleBlur, resetForm} = useFormik({
        initialValues: defaultValue,
        validationSchema: initial.schema,
        onSubmit: (values) =>
            handleLogin({
                email: values.email,
                password: values.password,
            })
    });

    const handleLogin = async (data, socialResponse = {}) => {
        const response = await connectAPI(API_URL_LIST.userLogin, {
            data: data,
            showStatus: false,
            showLoading: false
        })

        if (response.status === API_STATUS_RESULT.SUCCESS) {

            const result = {
                ...response.result.user_data, ...socialResponse,
                admin_id: response.result.user_data.id,
                accessToken: response.result.accessToken
            }

            dispatch(changeAdminData(result));

            if (response.status === API_STATUS_RESULT.SUCCESS) {
                if (response.result?.password_expire === true) {
                    history.push(APP_ROUTE.reset_password.url);
                }
                history.push(APP_ROUTE.dashboard.url);
            }
        } else {

            setLoginStatusText(t(Object.keys(response.message)[0]));
            setLoginAttempt(loginAttempt => loginAttempt + 1);
            resetForm({})
            setSubmitting(false);
        }

    }

    const responseFacebook = (response) => {
        setSubmitting(true);
        if (response.accessToken !== undefined) {
            handleLogin({
                email: response.email,
                channel: 'facebook',
                social_Id: response.id,
                fbAccessToken: response.accessToken
            }, {avatar: response.picture.data.url});
        } else {
            setSubmitting(false);
        }

    }
    const autoLogin = () => {

        setSubmitting(true);

        handleLogin({
            email: 'tomojung@gmail.com',
            channel: 'google'
        });
        setSubmitting(false);
    }

    const responseGoogle = (response) => {
        if (response.error === undefined) {
            setSubmitting(true);

            handleLogin({
                email: response.profileObj.email,
                channel: 'google',
                social_Id: response.googleId,
            }, {avatar: response.profileObj.imageUrl});

        } else {
            setSubmitting(false);
        }
    }


    useEffect(() => {
        if (localStorage.getItem(STORAGE.MEMBER_DATA) !== null) {
            history.push(APP_ROUTE.dashboard.url);
        }
    }, []);

    useEffect(() => {
        if (loginAttempt >= LOGIN.MAX_LOGIN) {
            const now = new Date();
            const lockTime = LOGIN.LOCK_TIME_MINUTE * 60;
            now.setHours(now.getHours(), now.getMinutes(), now.getSeconds() + lockTime, 0);
            localStorage.setItem(STORAGE.LOCK_TIME, now.toString());
            setLoginLockSecond(lockTime);
        }
    }, [loginAttempt]);

    useEffect(() => {
        if (loginLockSecond === "") {
        } else if (loginLockSecond <= 0) {
            localStorage.removeItem(STORAGE.LOCK_TIME);
            setLoginAttempt(0);
            setLoginLockSecond("");
        } else {
            setTimeout(() => setLoginLockSecond(loginLockSecond => loginLockSecond - 1), 1000);
        }
    }, [loginLockSecond]);

    return (
        loginLockSecond > 0
            ? <Alert variant="filled" severity='error'>
                {t("login.login_lock", {second: Math.floor(loginLockSecond)})}
            </Alert>
            :
            <>
                <form onSubmit={handleSubmit} className={classes.form} autoComplete="off">
                    {isSubmitting && <div className="ajax_loader"/>}
                    <div className="text-center">
                        <Gravatar email={values.email} size={80} rating="pg" default="mm"
                                  style={{borderRadius: "100%"}}/>
                        {loginStatusText &&
                        <Fade in={true} timeout={800}>
                            <Alert variant="filled" severity='error'>
                                {loginStatusText}
                            </Alert>
                        </Fade>
                        }
                    </div>


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
                        <Button type="submit" fullWidth variant="contained" color="primary"
                                disabled={isSubmitting}>
                            {t("login.sign_in")}
                        </Button>
                    </div>
                    {location.port === '3000' && <div>
                        <Button onClick={autoLogin} variant="contained"
                                style={{background: '#ff0000', color: "#ffffff"}}>Auto
                            Login</Button>
                    </div>}

                    <Button color="primary" onClick={onFormHandler}>
                        {t("login.forgot_password")}
                    </Button>
                </form>
                {socialLogin !== undefined &&
                <>
                    <Typography className={classes.orBlock}>{t("global.social_login")}</Typography>
                    <div className={classes.socialLogin}>
                        {socialLogin.google_api && <GoogleLogin
                            clientId={socialLogin.google_api}
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            theme="dark"
                            cookiePolicy={'single_host_origin'}
                            buttonText="Google"
                        />}

                        {socialLogin.facebook_api && <FacebookLogin
                            appId={socialLogin.facebook_api}
                            fields="name,email,picture"
                            cssClass="fb-login"
                            icon={<SocialIcon fgColor="#4c69ba" bgColor="#fff" network="facebook"
                                              style={{height: 25, width: 25}}/>}
                            callback={responseFacebook}
                            textButton="Facebook"
                        />}

                    </div>
                </>
                }
            </>
    )
}
