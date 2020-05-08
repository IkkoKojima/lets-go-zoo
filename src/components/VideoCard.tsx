import React, { useState } from 'react';
import YouTube, { Options } from 'react-youtube'
import { Video } from '../domains/Video';
import { makeStyles, Theme, createStyles, Grid, Snackbar } from '@material-ui/core';
import {
    FacebookShareButton,
    LineShareButton,
    TwitterShareButton,
    TwitterIcon,
    LineIcon,
    FacebookIcon,
} from "react-share";
import { useLocation, Link } from 'react-router-dom';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import CopyToClipboard from 'react-copy-to-clipboard'
import ButtonWithImg from './ButtonWithImg';
import Carousel from 'react-material-ui-carousel';
import { DetailItem } from './DetailItem';
import { Tip } from '../domains/Tip';

const useStyle = makeStyles((theme: Theme) => createStyles({
    div: {
        [theme.breakpoints.down('xs')]: {
            width: "100vw",
            height: "62vh",
        },
        width: "100vw",
        height: "90vh",
        [theme.breakpoints.up('lg')]: {
            width: "80vw",
            height: "100vh",
        },
        background: "rgba(0,0,0,0.5)"
    },
    root: {
        height: "100%",
        width: "100%",
    },
    video: {
        width: "100vw",
        height: "calc(100vw * 0.5625)",
        [theme.breakpoints.up('lg')]: {
            width: "80vw",
            height: "calc(80vw * 0.5625)"
        },
        maxHeight: "60vh"
    },
    carousel: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
}))

type Props = {
    video: Video
    tips: Tip[]
}

export default function VideoCard(props: Props) {

    const [tooltipOpen, setTooltipOpen] = useState(false)
    const currentUrl: string = "https://liveslives.net" + useLocation().pathname
    const classes = useStyle()
    const opts: Options = {
        playerVars: {
            autoplay: 1,
            controls: 0,
            disablekb: 1,
            loop: 1,
            mute: 1 //TODO:ミュートをボタンで書き換えられるように変更
        },
    };
    const image = {
        url: "https://source.unsplash.com/vUyQSMnQfbA/640x430",
        title: "コロナ禍でヤバイ動物を一緒に助けよう",
        style: { width: "26vw", height: "10vh" }
    }

    function actionButtons(url: string, size: number) {
        return (
            <React.Fragment>
                <Grid item>
                    <Link to="/rescue">
                        <ButtonWithImg image={image} />
                    </Link>
                </Grid>
                <Grid item>
                    <TwitterShareButton url={url} >
                        <TwitterIcon size={size} />
                    </TwitterShareButton>
                </Grid>
                <Grid item>
                    <FacebookShareButton url={url} >
                        <FacebookIcon size={size} />
                    </FacebookShareButton>
                </Grid>
                <Grid item>
                    <LineShareButton url={url} >
                        <LineIcon size={size} />
                    </LineShareButton>
                </Grid>
                <Grid item>
                    <CopyToClipboard text={url} onCopy={() => setTooltipOpen(true)}>
                        <div style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            background: "gray",
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <FileCopyIcon style={{ color: "white" }} />
                        </div>
                    </CopyToClipboard>
                    <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
                        message="URLのコピーに成功しました"
                        open={tooltipOpen}
                        autoHideDuration={2000}
                        onClose={() => setTooltipOpen(false)}
                    />
                </Grid>
            </React.Fragment>
        )
    }

    return (
        <div className={classes.div}>
            <Grid
                className={classes.root}
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={1}
            >
                <Grid item>
                    <YouTube
                        className={classes.video}
                        videoId={props.video.id}
                        opts={opts}
                    />
                </Grid>
                <Grid item container spacing={2}>
                    <Grid item xs={8}>
                        <div className={classes.carousel}>
                            <Carousel indicators={false} timeout={2000} className={classes.carousel}>
                                {props.tips.map(tip =>
                                    <DetailItem key={tip.img_url} imgUrl={tip.img_url} imgAlt={tip.img_url} text={tip.text} />
                                )}
                            </Carousel>
                        </div>
                    </Grid>
                    <Grid item xs={4} container spacing={1} justify="center">
                        {actionButtons(currentUrl, 45)}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
