import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import SharesMenu from './SharesMenu';
import BgmMenu from './BgmMenu';

const useStyle = makeStyles((theme: Theme) => createStyles({
    menu: {
        position: "fixed",
        bottom: "30px",
        right: "20px",
        zIndex: 2
    },
}))

type Props = {
    setBgmId: (id: string) => void
    bgmId: null | string
}

export default function Menus(props: Props) {
    const classes = useStyle()
    return (
        <div className={classes.menu}>
            <BgmMenu setBgmId={props.setBgmId} bgmId={props.bgmId} />
            <br />
            <SharesMenu />
        </div>
    )
}