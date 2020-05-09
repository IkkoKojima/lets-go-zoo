import React, { useState } from 'react';
import { Menu, MenuItem, makeStyles, Theme, createStyles, Fab, Snackbar, Typography, Button } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import RedditIcon from '@material-ui/icons/Reddit';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useLocation } from 'react-router-dom';
import {
    FacebookShareButton,
    TwitterShareButton,
    RedditShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    TelegramShareButton
} from "react-share";

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
                        <Button style={{ width: "100%", height: "100%" }}>
                            <FileCopyIcon />
                            <Typography variant="caption">
                                COPY URL
                        </Typography>
                        </Button>
                    </CopyToClipboard>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <TwitterShareButton url={currentUrl} style={{ width: "100%", height: "100%" }}>
                        <TwitterIcon />
                        <Typography variant="caption">
                            Twitter
                        </Typography>
                    </TwitterShareButton>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <FacebookShareButton url={currentUrl} style={{ width: "100%", height: "100%" }}>
                        <FacebookIcon />
                        <Typography variant="caption">
                            Facebook
                        </Typography>
                    </FacebookShareButton>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <RedditShareButton url={currentUrl} style={{ width: "100%", height: "100%" }}>
                        <RedditIcon />
                        <Typography variant="caption">
                            Reddit
                        </Typography>
                    </RedditShareButton>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <LinkedinShareButton url={currentUrl} style={{ width: "100%", height: "100%" }}>
                        <LinkedInIcon />
                        <Typography variant="caption">
                            LinkedIn
                        </Typography>
                    </LinkedinShareButton>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <WhatsappShareButton url={currentUrl} style={{ width: "100%", height: "100%" }}>
                        <WhatsAppIcon />
                        <Typography variant="caption">
                            WhatsApp
                        </Typography>
                    </WhatsappShareButton>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <TelegramShareButton url={currentUrl} style={{ width: "100%", height: "100%" }}>
                        <TelegramIcon />
                        <Typography variant="caption">
                            Telegram
                        </Typography>
                    </TelegramShareButton>
                </MenuItem>
            </Menu>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
                message="URLのコピーに成功しました"
                open={tooltipOpen}
                autoHideDuration={2000}
                onClose={() => setTooltipOpen(false)}
            />
        </div>
    )
}