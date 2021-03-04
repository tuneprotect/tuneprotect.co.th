import React, {useEffect} from 'react';
import {Route, Switch} from "react-router-dom";
import clsx from "clsx";
import {makeStyles} from '@material-ui/core/styles';
import ErrorPage from "../page/system/error/ErrorPage";
import {APP_NAME} from '../../config/config';
import APP_ROUTE from "../../config/route";
import globalStyle from "../../asset/jss/standard";


const useStyles = makeStyles((theme) => ({
    h1: {
        position: "fixed",
        right: "20px",
        bottom: "20px",
        color: theme.palette.primary.contrastText,
        fontSize: "3em",
        fontFamily: "signerica",
    },
    ...globalStyle(theme)
}));


export default function NoHeaderLayout() {
    const classes = useStyles();

    useEffect(() => {
        document.body.classList.add('fullpage');
    }, []);

    return (
        <div>
            <Switch>
                {
                    Object.values(APP_ROUTE)
                        .filter(({layout}) => layout === "NoHeaderLayout")
                        .map(({id, url, component, pattern}) => {
                                return <Route key={id} path={pattern || url} exact component={component}/>
                            }
                        )
                }
                <Route path="*" component={ErrorPage}/>
            </Switch>
            <h1 className={clsx(classes.h1, classes.textStroke)}>
                {APP_NAME}
            </h1>
        </div>
    );
}
