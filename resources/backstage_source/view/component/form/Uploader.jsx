import React from "react";
import {useDropzone} from "react-dropzone";
import {makeStyles} from "@material-ui/core";
import globalStyle from "../../../asset/jss/standard";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles(theme => ({
    root: {
        border: "5px dashed " + theme.palette.secondary.dark,
        height: 100,
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
        position: "relative"
    },
    dropOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,.3)"
    },
    ...globalStyle(theme)
}));

export default function Uploader({accept, onDrop}) {
    const classes = useStyles();
    const {t} = useTranslation();
    const {isDragActive, getRootProps, getInputProps, isDragReject, isFileTooLarge, acceptedFiles, rejectedFiles} = useDropzone({
        onDrop,
        accept,
    })

    return (
        <div className={classes.root} {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive
                ?
                <div className={classes.dropOverlay}>
                    {!isDragReject && t("file_manager.drop_file")}
                    {isDragReject && t("file_manager.wrong_file_type")}
                    {isFileTooLarge && t("file_manager.file_too_large")}
                </div>
                :
                <div className={classes.dropOverlay}>{t('global.drop_file')}</div>}
        </div>

    );
}