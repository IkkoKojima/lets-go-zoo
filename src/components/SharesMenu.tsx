import React, { useState } from 'react';
import { Menu, MenuItem, makeStyles, Theme, createStyles, Fab, Snackbar, Typography } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useLocation } from 'react-router-dom';
import { FacebookShareButton, TwitterShareButton } from "react-share";

const useStyle = makeStyles((theme: Theme) => createStyles({
    menu: {
        backgroundColor: "rgba(253,191,30,0.8)",
        color: "rgb(256,256,256)",
    },
}))

export default function SharesMenu() {
    const classes = useStyle()
    const [tooltipOpen, setTooltipOpen] = useState(false)
    const currentUrl: string = "https://liveslives.net" + useLocation().pathname
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Fab onClick={handleClick} className={classes.menu}><ShareIcon /></Fab>
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
                <MenuItem onClick={handleClose}>
                    <CopyToClipboard text={currentUrl} onCopy={() => setTooltipOpen(true)}>
                        <div>
                            <FileCopyIcon />
                            <Typography variant="caption">
                                URLのコピー
                        </Typography>
                        </div>
                    </CopyToClipboard>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <TwitterShareButton url={currentUrl} >
                        <div>
                            <TwitterIcon />
                            <Typography variant="caption">
                                Twitter
                        </Typography>
                        </div>
                    </TwitterShareButton>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <FacebookShareButton url={currentUrl} >
                        <div>
                            <FacebookIcon />
                            <Typography variant="caption">
                                Facebook
                        </Typography>
                        </div>
                    </FacebookShareButton>
                </MenuItem>
            </Menu>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right', }}
                message="URLのコピーに成功しました"
                open={tooltipOpen}
                autoHideDuration={2000}
                onClose={() => setTooltipOpen(false)}
            />
        </div>
    )
}