import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import globalStyle from "../../../../asset/jss/standard";
import {Checkbox, FormControlLabel} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    input: {
        width: '100%'
    },
    th: {
        border: 'none'
    },
    td: {
        border: 'none'
        // padding: "0 5px"
    },
    buttonSave: {
        textAlign: 'right'
    },
    ...globalStyle(theme)
}));


export default function LanguageCheckbox({allLanguage, handleShownColumn}) {
    const classes = useStyles();

    return (
        <div>
            {Object.values(allLanguage).map(v =>
                <FormControlLabel
                    key={v.code}
                    control={
                        <Checkbox checked={v.enable === 1}
                                  onChange={handleShownColumn}
                                  value={v.code}/>
                    }
                    label={v.title}/>
            )}
        </div>
    )
}
