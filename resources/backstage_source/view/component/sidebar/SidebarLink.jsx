import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Badge, Collapse, Icon, List, ListItem, ListItemIcon, ListItemText, makeStyles} from "@material-ui/core";
import clsx from 'clsx';
import {NavLink} from "react-router-dom";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import hexToRgba from 'hex-to-rgba';
import APP_ROUTE from "../../../config/route";
import {ROLE} from "../../../config/config";
import Avatar from "@material-ui/core/Avatar";
import {toggleSidebarOpen} from "../../../store/system/SystemReducer";

const useStyles = makeStyles((theme) => ({
    listItemText: {
        color: theme.palette.primary.contrastText
    },
    on: {
        backgroundColor: theme.palette.primary.dark,
    },
    navLink: {
        display: "block"
    },
    sub: {
        backgroundColor: hexToRgba(theme.palette.primary.main, '0.2')
    },
    primaryAvatar: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        fontSize : 18
    },
}));

export default function SidebarLink({data, group, itemClass}) {
    const classes = useStyles();
    const {adminData} = useSelector(({system}) => system);
    return (
        <List component="div" disablePadding className={itemClass}>
            {data === undefined ? null
                : Object.values(data)
                    .map((v) => {
                        const subData = Object.values(APP_ROUTE)
                            .filter(v1 => {

                                    if (v1.group !== group || v1.parent !== v.id) {
                                        return false;
                                    }
                                    if (adminData.role === ROLE.SUPER_ADMIN) {
                                        return true;
                                    }
                                    return adminData.role.some((k) => k.startsWith(`${v1.id}`));
                                }
                            );

                        return (
                            (subData.length > 0)
                                ? <SidebarListMain key={v.id} currentList={v} subData={subData}
                                                   group={group}/>
                                : <NavLink key={v.id} to={v.url} className={classes.navLink}
                                           activeClassName={classes.on}>
                                    <SidebarListItem currentList={v} group={group}/>
                                </NavLink>
                        )
                    })}
        </List>
    )
};

const SidebarListMain = ({currentList, group, subData,id}) => {
    const classes = useStyles();
    const {sidebar} = useSelector(({system}) => system);
    const dispatch = useDispatch();
    const handleClick = (menu) => {
        dispatch(toggleSidebarOpen(menu));
    };

    return (
        <>
            <SidebarListItem

                currentList={currentList}
                open={sidebar.includes(currentList.id)} onClickHandler={() => handleClick(currentList.id)}
                hasSub={true}
                group={group}/>
            <Collapse in={sidebar.includes(currentList.id)} timeout="auto" unmountOnExit>
                {subData === undefined
                    ? null
                    : <SidebarLink data={subData} itemClass={classes.sub} group={group}/>}
            </Collapse>
        </>
    )

};

const SidebarListItem = ({currentList, open, onClickHandler, hasSub}) => {
    const classes = useStyles();
    const {unPublishData} = useSelector(({system}) => system);
    return (

        <ListItem component="div" button onClick={onClickHandler}>
            <ListItemIcon className={clsx(classes.listItemText)}>

                {unPublishData?.[currentList.id] > 0
                    ? <Badge badgeContent={unPublishData[currentList.id]} color="error">

                        <IconOrAvatar currentList={currentList}/>
                    </Badge>
                    : <IconOrAvatar currentList={currentList}/>
                }
            </ListItemIcon>
            <ListItemText primary={currentList.name}
                          className={clsx(classes.listItemText)}>
            </ListItemText>
            {hasSub && (open ? <ExpandLess className={clsx(classes.listItemText)}/> :
                <ExpandMore className={clsx(classes.listItemText)}/>)}
        </ListItem>

    );
};

const IconOrAvatar = ({currentList}) => {
    const classes = useStyles();
    return currentList.icon ?
        <Icon>{currentList.icon}</Icon> :
        <Avatar className={classes.primaryAvatar}>{currentList.name.substring(0, 2).toUpperCase()}</Avatar>

}

