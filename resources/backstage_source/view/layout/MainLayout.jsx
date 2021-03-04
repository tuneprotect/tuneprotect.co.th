import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect, Route, Switch} from "react-router";
import {useHistory, useRouteMatch} from "react-router-dom";
import {useTranslation} from 'react-i18next';
import IdleTimer from 'react-idle-timer'
import clsx from "clsx";
import {
    Backdrop,
    CircularProgress,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    makeStyles,
    Snackbar
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert/Alert";
import Sidebar from "../component/sidebar/Sidebar";

import AdminNavbar from "../component/topbar/AdminNavbar";
import {
    changeDrawerStatus,
    changeLanguageSupport,
    changeMainIcon,
    changeMainTitle,
    changeShowAlertStatus
} from "../../store/system/SystemReducer";
import globalStyle from "../../asset/jss/standard";
import {
    API_STATUS_RESULT,
    API_URL_LIST,
    APP_TIME_BEFORE_TIMEOUT_REDIRECT_SECOND,
    APP_TIMEOUT_MINUTE,
    STORAGE
} from "../../config/config";
import APP_ROUTE from "../../config/route";
import {connectAPI} from "../../asset/lib/FormHelper";
import {checkPermission} from "../../asset/lib/PathHelper";
import {getUnPublish} from "../../asset/lib/SystemHelper";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh"
    },
    main: {
        paddingTop: 40,
        paddingBottom: 40,
    },
    progressBar: {
        zIndex: 2000,

    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: 'rgba(255,255,255,.5)',
    },
    ...globalStyle(theme)
}));

export default function MainLayout() {

    const dispatch = useDispatch();
    const history = useHistory();
    const {drawerOpenStatus, adminData, showAlert, showLoading} = useSelector(({system}) => system);
    const {t} = useTranslation();
    const match = useRouteMatch();
    const timeoutFunc = useRef(null);
    const classes = useStyles();
    const [idleTimer, setIdleTimer] = useState({});
    const [timeBeforeLock, setTimeBeforeLock] = useState(APP_TIMEOUT_MINUTE);
    const [openDialogTimeout, setOpenDialogTimeout] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(changeShowAlertStatus({
            ...showAlert, open: false
        }));

    };

    useEffect(() => {
        document.body.classList.remove('fullpage');
        getUnPublish();
        if (localStorage.getItem(STORAGE.LANGUAGE_SUPPORT) === null) {
            (async () => {
                const response = await connectAPI(API_URL_LIST.languageGetAll, {
                    data: {application: 'front'},
                    showStatus: false,
                    showLoading: false
                });
                if (response.status === API_STATUS_RESULT.SUCCESS) {
                    dispatch(changeLanguageSupport(response.result));
                }
            })();
        }
    }, []);

    useEffect(() => {
        const updateWindowDimensions = () => {
            dispatch(changeDrawerStatus(window.innerWidth >= 750));
        };
        const matchPath = Object.values(APP_ROUTE).filter((route) => route.url === match.path || route.pattern === match.path);
        dispatch(changeMainTitle(matchPath[0].name));
        dispatch(changeMainIcon(matchPath[0].icon));

        if (!checkPermission(matchPath, adminData)) {
            history.push(APP_ROUTE.error.url + "/permission");
        }

        window.addEventListener("resize", updateWindowDimensions);

        return () => {
            window.removeEventListener("resize", updateWindowDimensions);
        }
    }, [dispatch, match, adminData]);

    useEffect(() => {
        if (openDialogTimeout) {
            timeoutFunc.current = (setTimeout(function () {
                setTimeBeforeLock(0);
            }, APP_TIME_BEFORE_TIMEOUT_REDIRECT_SECOND * 1000));
        } else {
            clearTimeout(timeoutFunc.current);
        }

        return () => {
            clearTimeout(timeoutFunc.current);
        }
    }, [openDialogTimeout, timeoutFunc]);

    return (
        adminData.admin_id === null
            ? <Redirect to={APP_ROUTE.login.url}/>
            : (timeBeforeLock <= 0
                ? <Redirect to={APP_ROUTE.logout.url}/>
                : <div className={classes.root}>

                    <IdleTimer
                        ref={ref => {
                            setIdleTimer(ref)
                        }}
                        element={document}
                        debounce={250}
                        onAction={handleClose}
                        onIdle={() => {
                            setOpenDialogTimeout(true);
                            idleTimer.getRemainingTime()
                        }}
                        timeout={1000 * 60 * APP_TIMEOUT_MINUTE}/>
                    <Sidebar
                        drawerOpen={drawerOpenStatus}
                    />
                    <AdminNavbar/>
                    <main className={clsx('MuiToolbar-gutters', classes.main, {
                        [classes.drawerOpenMargin]: drawerOpenStatus,
                        [classes.drawerCloseMargin]: !drawerOpenStatus
                    })}>
                        <Switch>
                            {Object.values(APP_ROUTE)
                                .filter(({layout}) => layout === "MainLayout")
                                .map(({id, url, component}) => (
                                        <Route key={id} path={url} exact component={component}/>
                                    )
                                )}
                        </Switch>
                    </main>
                    <Backdrop className={classes.backdrop} open={showLoading}>
                        {showLoading && <CircularProgress/>}
                    </Backdrop>
                    <Dialog
                        open={openDialogTimeout}
                        onClose={() => setOpenDialogTimeout(false)}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{t("global.idle_title")}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                {t("global.idle_description", {time: APP_TIME_BEFORE_TIMEOUT_REDIRECT_SECOND})}
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>

                    <Snackbar open={showAlert.open} autoHideDuration={6000} onClose={handleClose}
                              anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
                        <Alert variant="filled" onClose={handleClose} severity={showAlert.severity}>
                            {showAlert.text}
                        </Alert>
                    </Snackbar>
                </div>
            )
    );
}
