import React from "react";
import {Button, Icon, makeStyles, Tooltip} from "@material-ui/core";
import globalStyle from "../../../asset/jss/standard";
import clsx from 'clsx';
import {isArrayOrObject} from "../../../asset/lib/ArrayHelper";

const useStyles = makeStyles((theme) => ({
    actionButton: {
        minWidth: 50,
        marginLeft: 5
    },
    ...globalStyle(theme)
}));

export default function DisplayAction({action, data, index}) {

    const classes = useStyles();
    if (
        action.hidden !== undefined &&
        ((typeof action.hidden === "function" && action.hidden(data, index))
            || action.hidden === false)
    ) {
        return null;
    }


    const value = data[action.field] !== null ? (isArrayOrObject(data[action.field]) ? 1 : data[action.field]) : 0;

    return <Tooltip title={(Array.isArray(action.title) ? action.title[value] : action.title)}
                    aria-label={(Array.isArray(action.title) ? action.title[value] : action.title)}>
        <Button
            className={clsx((Array.isArray(action.buttonClass) ? action.buttonClass[value] : action.buttonClass), classes.actionButton)}
            size="small"
            variant="contained"
            disabled={action.disabled}
            onClick={(event) => action.onClick(event, data)}
        >
            <Icon
                fontSize="small">{(Array.isArray(action.icon) ? action.icon[value] : action.icon)}</Icon>
        </Button>
    </Tooltip>;
}
