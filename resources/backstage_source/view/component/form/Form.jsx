import React from 'react';
import clsx from 'clsx';
import {makeStyles} from "@material-ui/core";
import ProjectCard from "../ProjectCard";
import globalStyle from "../../../asset/jss/standard";

const useStyles = makeStyles((theme) => ({
    ...globalStyle(theme)
}));


export default function Form({children, icon, title, handleSubmit, className, elevate = 3, hasWrapper = true, ...rest}) {
    const classes = useStyles();
    return (
        <form
            onSubmit={handleSubmit}
            noValidate autoComplete="off"
            className={clsx(classes.form, className)}
            {...rest}
        >

            {hasWrapper ?
                <ProjectCard icon={icon} title={title}>
                    {children}
                </ProjectCard>
                : children
            }

        </form>
    )
}
