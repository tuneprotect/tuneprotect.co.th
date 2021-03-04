import React from "react";
import {makeStyles, Typography} from "@material-ui/core";
import globalStyle from "../../../asset/jss/standard";
import CKEditor from 'ckeditor4-react';

const useStyles = makeStyles((theme) => ({
    root : {
        marginTop : 16,
        marginBottom : 8
    },
    ...globalStyle(theme)
}));

export function WYSIWYGEditor({label, value, setValues}) {
    const classes = useStyles();
    return <div className={classes.root}>
        <Typography>{label}</Typography>
        <CKEditor
            data={value}
            type="classic"
            config={{
                extraPlugins: 'iframe',
                allowedContent : true,
                filebrowserImageBrowseUrl: '/file-manager/ckeditor',
            }}
            onBlur={(e) => setValues(e.editor.getData())}
            onChange={(e) => setValues(e.editor.getData())}
        />
    </div>
}
