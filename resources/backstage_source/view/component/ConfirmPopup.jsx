import React from "react";
import SlideUp from "./SlideUp";
import {useTranslation} from 'react-i18next';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";

export default function ConfirmPopup({open, handleClose, handleConfirm, children,...props}) {
    const {t} = useTranslation();

    return (
        <Dialog
            open={open}
            TransitionComponent={SlideUp}
            keepMounted
            onClose={handleClose}
            {...props}
        >
            <DialogTitle>{t("global.delete_alert")}</DialogTitle>
            <DialogContent>

                {children}

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">{t("global.close")}</Button>
                {handleConfirm !== undefined &&
                <Button onClick={handleConfirm} color="primary">{t("global.yes")}</Button>
                }
            </DialogActions>
        </Dialog>
    )
}
