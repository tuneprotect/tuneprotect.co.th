import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import globalStyle from "../../asset/jss/standard";

const useStyles = makeStyles((theme) => ({
    ...globalStyle(theme)
}));

export default function BlankPage() {
    const classes = useStyles();
    return <div className={classes.btnSuccess}>Blank Page</div>
}
