import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import globalStyle from "../../../asset/jss/standard";
import Dialog from "@material-ui/core/Dialog";
import SlideUp from "../SlideUp";
import DialogTitle from "@material-ui/core/DialogTitle";
import {useTranslation} from 'react-i18next';
import DialogContent from "@material-ui/core/DialogContent";
import FileManager from "./FileManager";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    ...globalStyle(theme),
}));

export default function FileManagerDialog({show, handleClose,onSelectedFile}) {
    const classes = useStyles();
    const { t } = useTranslation();



    return <Dialog
        open={show}
        TransitionComponent={SlideUp}
        keepMounted
        fullScreen={true}
        onClose={handleClose}>
        <DialogTitle>
            {t("global.image_picker")}

            <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                <CloseIcon />
            </IconButton>
        </DialogTitle>
        <DialogContent>
            <FileManager
                onSelectedFile={onSelectedFile}
            />
        </DialogContent>
    </Dialog>
}
