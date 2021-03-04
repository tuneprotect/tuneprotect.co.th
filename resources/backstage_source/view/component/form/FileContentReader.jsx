import React from "react";
import {useTranslation} from 'react-i18next';
import {makeStyles} from "@material-ui/core";
import globalStyle from "../../../asset/jss/standard";

const useStyles = makeStyles((theme) => ({
    ...globalStyle(theme)
}));


export default function FileContentReader({onFileLoaded}) {
    const classes = useStyles();
    const {t} = useTranslation();

    const showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()

        const fileInfo=  e.target.files[0];

        reader.onload = async (e) => {
            onFileLoaded(e.target.result,fileInfo);
        };
        reader.readAsText(e.target.files[0])

    }

    return (
        <>
            <input type="file" onChange={(e) => showFile(e)} />
        </>
    );
}
