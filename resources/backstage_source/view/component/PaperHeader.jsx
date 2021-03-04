import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";


const useStyles = makeStyles((theme) => ({
    formHeader: {
        display: "flex",
        justifyContent: "space-between"
    },
    formHeaderLeft: {
        display: "flex",
    },
    formHeaderIcon: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        width: 65,
        height: 65,
        borderRadius: theme.shape.borderRadius,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -30,
        marginRight: 10
    },
    formHeaderTitle: {
        fontWeight: 200,
    }
}));

export default function PaperHeader({icon, title}) {
    const classes = useStyles();



    return (

        <div className={classes.formHeader}>

            <div className={classes.formHeaderLeft}>
                <div className={classes.formHeaderIcon}>
                    <Icon fontSize={"large"}>{icon}</Icon>
                </div>
                <Typography variant="h4" className={classes.formHeaderTitle}>
                    {title}
                </Typography>
            </div>
        </div>

    )


}
