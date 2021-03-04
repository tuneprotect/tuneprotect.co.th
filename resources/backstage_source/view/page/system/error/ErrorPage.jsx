import React from 'react';
import {makeStyles} from "@material-ui/core";
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

const useStyles = makeStyles(() => ({

    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "rgba(0,0,0,.8)",
    },
    centerBox: {
        backgroundColor: "rgba(255,255,255,.5)",
        padding: "20px 40px",
        borderRadius: "50px",
        textAlign: "center"
    },
    h1: {
        fontSize: "13em",
        display: "flex",
        alignItems: "center"
    },
    icon: {
        fontSize: ".9em"
    },
    h2: {
        fontSize: "2em"
    },
    h4: {
        fontSize: "1.5em"
    }
}));

export default function ErrorPage() {

    const classes = useStyles();
    return (

        <main className={classes.root}>
            <div className={classes.centerBox}>
                <h1 className={classes.h1}>
                    <span>4</span>
                    <SentimentVeryDissatisfiedIcon className={classes.icon}/>
                    <span>4</span>
                </h1>
                <h2 className={classes.h2}>Page not found :(</h2>
                <h4 className={classes.h4}>
                    Ooooups! Looks like you got lost.
                </h4>
            </div>

        </main>
    )
}
