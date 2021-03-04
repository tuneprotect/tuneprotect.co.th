import clsx from 'clsx';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Icon from '@material-ui/core/Icon';
import {Fade} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    card: {
        overflow: "visible",
        margin: '20px 0',
        position: 'relative'
    },
    cardContent: {
        position: 'relative',
    },
    icon: {
        color: theme.palette.primary.contrastText,
        width: '80px',
        height: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '-25px',
        left: '20px'
    },
    text: {
        textAlign: 'right',
        '& h3': {
            fontSize: '1.8em'
        },
        '& small': {
            fontSize: '0.6em'
        }
    },
    footer: {
        textAlign: 'right',
        borderTop: "1px solid " + theme.palette.grey.A200,
        padding: '5px 0',
        margin: '0 10px'
    }
}));
export default function SmallWidget({children, icon, iconClassName, footer, loading = false}) {
    const classes = useStyles();
    return (<Card className={classes.card}>
        <Fade in={loading} timeout={800}>
            <div className="ajax_loader"/>
        </Fade>
        <CardContent className={classes.cardContent}>
            <div className={clsx(iconClassName, classes.icon)}>
                <Icon fontSize="large">{icon}</Icon>
            </div>
            <div className={classes.text}>
                {children}
            </div>
        </CardContent>
        <div className={classes.footer}>
            {footer ? footer : ''}
        </div>

    </Card>);
}
