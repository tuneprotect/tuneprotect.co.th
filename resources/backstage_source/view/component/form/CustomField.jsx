import React from "react";
import {useTranslation} from 'react-i18next';
import {makeStyles, TextField} from "@material-ui/core";
import globalStyle from "../../../asset/jss/standard";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    ...globalStyle(theme)
}));


export default function CustomField({helperText, isIframe, config,fieldDescription, ...props}) {
    const classes = useStyles();
    const {t} = useTranslation();

    return (
        <>
            {isIframe && props.value && props.value.toLowerCase().startsWith('<iframe') &&
            <div style={{marginTop: 16}} dangerouslySetInnerHTML={{__html: props.value}}/>}
            <TextField
                helperText={<>
                    {helperText && <span className={classes.block}>{helperText}</span>}
                    {config?.counter === true &&
                    <span className={classes.block}>{t("global.total_count", {"count": props.value.length})}</span>}
                </>}
                margin="normal"
                fullWidth
                rows={4}
                {...props}
            />
            {fieldDescription && <Typography>{fieldDescription}</Typography>}
        </>
    );
}
