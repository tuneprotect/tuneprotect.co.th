import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import SystemChecking from "./SystemChecking";
import LoginForm from "./LoginForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import LanguageSelector from "../../../component/topbar/LanguageSelector";

const useStyles = makeStyles((theme) => ({
    main: {
        background: theme.palette.background.paper,
        height: "100vh",
        maxWidth: "400px",
        boxShadow: "0 0 20px 20px rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        padding: 20,
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center"
    },
    loginWrapper: {
        width: "100%",
        overflow: "auto"
    },
    form: {
        width: "100%"
    },
    btnWrapper: {
        margin: "20px 0"
    },
    socialLogin: {
        display: "flex",
        width: "100%",
        alignItems: "stretch",
        "& > span,& > button": {
            flex: 1,
            textAlign: "center"
        }
    },
    orBlock: {
        margin: "10px 0 20px 0",
        "&:before,&:after": {
            content: '""',
            display: "block",
            margin: "0 auto",
            height: 20,
            borderLeft: "1px solid #000",
            width: 0
        }
    }
}));

export default function LoginPage() {
    const classes = useStyles();
    const [login, setLogin] = useState(true);
    const [checkStatus, setCheckingStatus] = useState(false);
    const [socialLogin, setSocialLogin] = useState({});


    return (
        <main className={classes.main}>
            <div className={classes.loginWrapper}>
                {checkStatus
                    ?
                    <>
                        {login
                            ? <LoginForm onFormHandler={() => setLogin(false)} socialLogin={socialLogin}
                                         classes={classes}/>
                            : <ForgotPasswordForm onFormHandler={() => setLogin(true)} classes={classes}/>
                        }
                    </>
                    : <SystemChecking setSocialLogin={setSocialLogin}
                                      onCheckingDone={(status) => setCheckingStatus(status)}/>
                }
                <br/>
                {/*<LanguageSelector/>*/}
            </div>
        </main>
    )
}
