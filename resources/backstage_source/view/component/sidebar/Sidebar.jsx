import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Collapse, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import Gravatar from "react-gravatar";
import SidebarLink from "./SidebarLink";
import {drawerWidth} from "../../../asset/jss/standard";
import APP_ROUTE from "../../../config/route";
import {ROLE} from "../../../config/config";
import {toggleSidebarOpen} from "../../../store/system/SystemReducer";

const drawerPadding = 0;

const useStyles = makeStyles((theme) => ({

    root: {
        height: '100vh',
        overflowX: 'hidden',
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: theme.zIndex.drawer,
        backgroundColor: '#000',
        // backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.8) 100%),url('https://source.unsplash.com/1600x900/?nature')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    aside: {
        position: 'relative',
        zIndex: 5,
        width: (drawerWidth - drawerPadding * 2),

    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('all', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        paddingLeft: drawerPadding,
        paddingRight: drawerPadding,
    },
    drawerClose: {
        transition: theme.transitions.create('all', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        paddingLeft: 0,
        paddingRight: 0
    },
    listItemText: {
        color: theme.palette.primary.contrastText
    },
    logo: {
        color: "#ffffff",
        textShadow: "-1px 1px 1px #000000, 1px -1px 1px #000000, 1px 1px 1px #000000, -1px -1px 1px #000000",
        fontFamily: "signerica",
        textAlign: "center",
        paddingTop: 20,
        paddingBottom: 20
    },
    avatar: {
        borderRadius: 50,
        transition: theme.transitions.create('all', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    profileBox: {
        borderTop: "1px solid rgba(255,255,255,.5)",
        borderBottom: "1px solid rgba(255,255,255,.5)"
    }
}));
export default function Sidebar({drawerOpen}) {
    const classes = useStyles();
    const {adminData,sidebar} = useSelector(({system}) => system);
    const dispatch = useDispatch();

    const handleClick = (menu) => {
        dispatch(toggleSidebarOpen(menu));
    };

    return (
        <div className={clsx(classes.root, {
            [classes.drawerOpen]: drawerOpen,
            [classes.drawerClose]: !drawerOpen,
        })}>


            <aside className={clsx(classes.aside)}>
                <List component="nav"
                      aria-labelledby="nested-list-subheader"
                      className={classes.profileBox}
                >
                    <ListItem component="div" button onClick={() => handleClick('profile')}>
                        <ListItemIcon>

                            {adminData.avatar
                                ? <img src={adminData.avatar} style={{width: drawerOpen ? 32 : 24,borderRadius : "100%"}}/>
                                : <Gravatar email={adminData.email || ""} size={drawerOpen ? 32 : 24} rating="pg"
                                            default="mm"
                                            className={classes.avatar}/>

                            }


                        </ListItemIcon>
                        <ListItemText primary={adminData.first_name + ' ' + adminData.last_name}
                                      className={classes.listItemText}/>
                        {sidebar.includes('profile') ? <ExpandLess className={classes.listItemText}/> :
                            <ExpandMore className={classes.listItemText}/>}
                    </ListItem>
                    <Collapse in={sidebar.includes('profile')} timeout="auto" unmountOnExit>
                        <SidebarLink
                            group="profile"
                            data={Object.values(APP_ROUTE).filter(value => value.show_on_profile_menu)}
                        />
                    </Collapse>
                </List>
                <SidebarLink
                    group="main_nav"
                    data={Object.values(APP_ROUTE)
                        .filter(v => {
                                if (v.id === "dashboard") {
                                    return true;
                                }
                                if (!v.show_on_main_menu || v.parent !== "") {
                                    return false;
                                }

                                if (adminData.role === ROLE.SUPER_ADMIN) {
                                    return true;
                                }
                                return adminData.role.some((v1) => v1.startsWith(`${v.id}.`));
                            }
                        )}
                />

            </aside>
        </div>
    );
};
