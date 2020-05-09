import React, { useState } from 'react';
import { Menu, MenuItem, makeStyles, Theme, createStyles, Fab, Typography } from '@material-ui/core';
import ReactPlayer from 'react-player';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MusicOffIcon from '@material-ui/icons/MusicOff';

const useStyle = makeStyles((theme: Theme) => createStyles({
    menu: {
        backgroundColor: "rgba(245,123,81,0.8)",
        color: "rgb(256,256,256)",
    },
}))

export default function BgmMenu() {
    const classes = useStyle()
    const [bgmId, setBgmId] = useState("isMmbbVuyQs")
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClickItem = (id: string) => {
        setBgmId(id)
        handleClose()
    }
    return (
        <div>
            <ReactPlayer loop playing url={`https://www.youtube.com/watch?v=${bgmId}`} width="0" height="0" />
            <Fab onClick={handleClick} className={classes.menu}><MusicNoteIcon /></Fab>
            <Menu
                keepMounted
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: 48 * 4.5,
                        width: '20ch',
                    },
                }}
            >
                <MenuItem onClick={() => handleClickItem("")}>
                    <div>
                        <MusicOffIcon />
                        <Typography variant="caption">ミュート</Typography>
                    </div>
                </MenuItem>
                <MenuItem onClick={() => handleClickItem("isMmbbVuyQs")}>
                    <div>
                        <MusicNoteIcon />
                        <Typography variant="caption">入り江でひなたぼっこ</Typography>
                    </div>
                </MenuItem>
                <MenuItem onClick={() => handleClickItem("zofBinqC2F4")}>
                    <div>
                        <MusicNoteIcon />
                        <Typography variant="caption">小鳥と水遊び</Typography>
                    </div>
                </MenuItem>
                <MenuItem onClick={() => handleClickItem("O45kVA8-D_g")}>
                    <div>
                        <MusicNoteIcon />
                        <Typography variant="caption">雨の夜に読書</Typography>
                    </div>
                </MenuItem>
                <MenuItem onClick={() => handleClickItem("b-vxJT1EsfI")}>
                    <div>
                        <MusicNoteIcon />
                        <Typography variant="caption">夜の砂浜でピアノ</Typography>
                    </div>
                </MenuItem>
                <MenuItem onClick={() => handleClickItem("qIMDHSLLKVE")}>
                    <div>
                        <MusicNoteIcon />
                        <Typography variant="caption">南の島の港をおさんぽ</Typography>
                    </div>
                </MenuItem>
                <MenuItem onClick={() => handleClickItem("sx3e2aWnCMQ")}>
                    <div>
                        <MusicNoteIcon />
                        <Typography variant="caption">海の見えるカフェで勉強</Typography>
                    </div>
                </MenuItem>

            </Menu>
        </div>
    )
}