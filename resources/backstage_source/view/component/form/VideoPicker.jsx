import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import globalStyle from "../../../asset/jss/standard";
import {useTranslation} from 'react-i18next';
import {Button, ButtonGroup, Typography} from "@material-ui/core";
import {CustomPlaceholder} from 'react-placeholder-image';
import FileManager from "../file_manager/FileManager";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import CustomField from "./CustomField";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 20,
        display: "block"
    },
    imageHolder: {
        "& img": {
            maxHeight: 400
        }
    },
    ...globalStyle(theme)
}));

export default function VideoPicker({value, label = "", error, helperText, onSelectedFile,onChange,onBlur}) {
    const classes = useStyles();
    const {t} = useTranslation();
    const openFileManager = () => {
        window.open('/file-manager/fm-button', 'FileManager', 'width=900,height=600');
        window.fmSetLink = function (url) {
            onSelectedFile(url);
        };
        return false;
    };

    return <div>

        {value.toLowerCase().startsWith('<iframe') &&
        <div style={{marginTop: 16}} dangerouslySetInnerHTML={{__html: value}}/>}
        {value.toLowerCase().endsWith('.mp4') &&
        <div style={{marginTop: 16}} >
            <video width="320" height="240" controls>
                <source src={value} type="video/mp4" />
            </video>
        </div>}


        <CustomField
            label={label}
            name="video_link"
            error={error}
            helperText={helperText}
            onChange={onChange}
            onBlur={onBlur}
            value={value || ''}
        />
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
