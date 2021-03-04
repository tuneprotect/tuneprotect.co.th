import React from 'react';
import {CardContent, Grid, makeStyles, Paper} from "@material-ui/core";
import PaperHeader from "./PaperHeader";

const useStyles = makeStyles((theme) => ({
    root: {position: "relative", marginBottom: 40},
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: 'rgba(255,255,255,.5)',
    },
}));


export default function ProjectCard({children, icon, title, elevate = 3}) {
    const classes = useStyles();


    return (
        <Grid component="section" container className={classes.root}>
            <Grid component="div" item xs={12}>
                <Paper elevation={elevate}>
                    <CardContent>
                        {title !== undefined && <PaperHeader icon={icon} title={title}/>}


                        {children}
                    </CardContent>
                </Paper>
            </Grid>
        </Grid>

    )
}
