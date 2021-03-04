import React, {useState} from 'react';
import {Badge, IconButton, Menu, MenuItem, Typography} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';

const options = [];
export default function TopNotification() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        // setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (

        options.length > 0 &&
        <>
            <Typography style={{fontSize: 30}}> | </Typography>
            <IconButton aria-label="show 17 new notifications" color="inherit"
                        edge="end" onClick={handleClickListItem}>
                <Badge badgeContent={options.length} color="error">
                    <NotificationsIcon/>
                </Badge>
            </IconButton>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={index}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}
