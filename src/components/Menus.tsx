import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import SharesMenu from './SharesMenu';
import BgmMenu from './BgmMenu';

const useStyle = makeStyles((theme: Theme) => createStyles({
    menu: {
        position: "fixed",
        bottom: "30vh",
        right: "2vw",
        zIndex: 2,
    },
}))

export default function Menus() {
    const classes = useStyle()
    return (
        <div className={classes.menu}>
            <BgmMenu />
            <br />
            <SharesMenu />
        </div>
    )
}