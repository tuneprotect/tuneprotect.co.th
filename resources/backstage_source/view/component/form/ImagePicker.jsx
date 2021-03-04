import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import globalStyle from "../../../asset/jss/standard";
import {useTranslation} from 'react-i18next';
import {Button, ButtonGroup, Typography} from "@material-ui/core";
import {CustomPlaceholder} from 'react-placeholder-image';
import FileManager from "../file_manager/FileManager";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 20,
        display: "block"
    },
    imageHolder: {
        backgroundImage: "linear-gradient(45deg, #b0b0b0 25%, transparent 25%), linear-gradient(-45deg, #b0b0b0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #b0b0b0 75%), linear-gradient(-45deg, transparent 75%, #b0b0b0 75%)",
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
        "& img": {
            maxHeight: 400,
            display: "block"
        }
    },
    ...globalStyle(theme)
}));

export default function ImagePicker({width, height, value, label = "", error, helperText, onSelectedFile}) {
    const classes = useStyles();
    const {t} = useTranslation();
    const openFileManager = () => {
        window.open('/file-manager/fm-button', 'FileManager', 'width=900,height=600');
        window.fmSetLink = function (url) {
            onSelectedFile(url);
        };
        return false;
    };

    return <div style={{marginTop: 20}}>
        <FormControl error={error}>
            <Typography>{label}</Typography>
            <div className={classes.imageHolder}>
                {
                    value !== ""
                        ? <img src={value} alt=""/>
                        : <CustomPlaceholder width={width} height={height} text={width + " x " + height}/>
                }
            </div>
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
        <div style={{display: "block"}}>
            <ButtonGroup variant="contained" color="primary"
                         aria-label="contained primary button group">
                <Button variant="contained" color="primary" onClick={() => openFileManager()}>
                    {t("global.browse")}
                </Button>
                <Button variant="contained" color="default" onClick={() => onSelectedFile("")}>
                    {t("global.reset")}
                </Button>
            </ButtonGroup>
        </div>
    </div>
}
