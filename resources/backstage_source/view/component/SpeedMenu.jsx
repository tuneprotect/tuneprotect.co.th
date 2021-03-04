import React, {useState} from 'react';
import {Backdrop, makeStyles} from '@material-ui/core';
import {SpeedDial, SpeedDialAction, SpeedDialIcon} from '@material-ui/lab';
import globalStyle from "../../asset/jss/standard";


const useStyles = makeStyles((theme) => ({
    speedDial: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),

        "& .MuiFab-root" :{
            alignSelf:"flex-end"
        },

        "& .MuiSpeedDialAction-staticTooltipLabel": {
            fontWeight: 500,
            whiteSpace: "nowrap"
        },
        "& .MuiSpeedDial-actions": {
            width : 400,
            flexWrap : "wrap-reverse",
            maxHeight: "80vh",
            alignItems: "flex-start",
        }

    },
    backdrop: {
        zIndex: 20
    },
    tooltip: {
        fontWeight: 500
    },
    ...globalStyle(theme)
}));

export default function SpeedMenu({menu = []}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <>
            {Object.keys(menu).length > 0 &&
            <>
                <Backdrop open={open} className={classes.backdrop}/>
                <SpeedDial
                    ariaLabel="SpeedDial tooltip"
                    className={classes.speedDial}
                    icon={<SpeedDialIcon/>}
                    onClick={handleOpen}
                    open={open}>
                    {menu.map(({isNew, onClick, ...rest}, i) => (
                        <SpeedDialAction
                            key={i}
                            title=""
                            tooltipOpen
                            TooltipClasses={{
                                staticTooltipLabel: classes.tooltip
                            }}
                            onClick={() =>{
                                onClick();
                                handleOpen();
                            }}
                            {...rest}
                        />
                    ))}
                </SpeedDial>
            </>
            }
        </>
    )
}
