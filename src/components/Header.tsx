import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';

export default function Header() {
    return (
        <AppBar position="static" style={{ background: "rgba(98, 154, 102,0.8)" }}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">Lives:Lives</Typography>
            </Toolbar>
        </AppBar>
    );
}