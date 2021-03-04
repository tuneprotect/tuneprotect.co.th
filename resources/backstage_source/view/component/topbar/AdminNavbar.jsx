import React from 'react';
import clsx from 'clsx';
import {useDispatch, useSelector} from 'react-redux';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ViewListIcon from "@material-ui/icons/ViewList";
import {AppBar, IconButton, makeStyles, Toolbar, Typography} from '@material-ui/core';
import globalStyle from "../../../asset/jss/standard";
import LanguageSelector from "./LanguageSelector";
import {changeDrawerStatus} from "../../../store/system/SystemReducer";
import {APP_NAME} from "../../../config/config";
import TopNotification from "./TopNotification";


const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        height: 68
    },
    toolbarLeft: {
        display: "flex",
        alignItems: "center",
    },
    toolbarRight: {
        display: "flex",
        alignItems: "center",
    },
    menuButton: {
        marginRight: theme.spacing(2),
        backgroundColor: theme.palette.primary.contrastText,
        padding: theme.spacing(1)
    },
    title: {
        display: 'none',
        color: theme.palette.primary.contrastText,
        textShadow: globalStyle(theme).textStroke.textShadow,
        fontFamily: "signerica",
        textAlign: "center",
        paddingTop: 20,
        paddingBottom: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        }
    },
    ...globalStyle(theme)
}));

export default function AdminNavbar() {
    const classes = useStyles();

    const dispatch = useDispatch();
    const {drawerOpenStatus} = useSelector(({system}) => system);

    return (
        <div id="test" className={clsx({
            [classes.drawerOpenMargin]: drawerOpenStatus,
            [classes.drawerCloseMargin]: !drawerOpenStatus,
        })}>

            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.toolbarLeft}>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            aria-label="open drawer"
                            onClick={() => dispatch(changeDrawerStatus(!drawerOpenStatus))}
                        >
                            {drawerOpenStatus ? <MoreVertIcon/> : <ViewListIcon/>}
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            {APP_NAME}
                        </Typography>
                    </div>
                    <div className={classes.toolbarRight}>
                        {/*<LanguageSelector/>*/}
                        <TopNotification/>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};
