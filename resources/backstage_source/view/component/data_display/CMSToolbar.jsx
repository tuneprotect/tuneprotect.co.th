import React from 'react';
import {useTranslation} from 'react-i18next';
import SaveIcon from '@material-ui/icons/Save';
import {lighten, makeStyles} from '@material-ui/core/styles';
import {Button, Toolbar, Typography} from '@material-ui/core';
import clsx from 'clsx';
import globalStyle from "../../../asset/jss/standard";


const useStyles = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight: {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
    },
    title: {
        flex: '1 1 100%',
        fontWeight: '500',
        display: 'flex',
        justifyContent: 'space-between'
    },
    flexEnd: {
        justifyContent: 'flex-end'
    },
    ...globalStyle(theme)
}));

function ButtonSaveOrder({onSaveOrder}) {
    const classes = useStyles();
    const {t} = useTranslation();
    return <Button variant="contained" color="primary" className={classes.reorderButton} onClick={onSaveOrder}
                   startIcon={<SaveIcon/>}>
        {t('global.save_reorder')}
    </Button>

}

export default function CMSToolbar({selected, reordered, onSaveOrder}) {
    const classes = useStyles();

    return <Toolbar
        className={clsx(classes.root, {
            [classes.highlight]: selected.length > 0,
        })}
    >
        {selected.length > 0 ? (
            <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                <span>{selected.length} selected</span>
                {reordered && <ButtonSaveOrder onSaveOrder={onSaveOrder}/>}
            </Typography>
        ) : (
            <Typography className={clsx(classes.title, classes.flexEnd)} variant="h6" id="tableTitle" component="div">
                {reordered && <ButtonSaveOrder onSaveOrder={onSaveOrder}/>}
            </Typography>
        )}

    </Toolbar>

}
