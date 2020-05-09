import React from 'react';
import ReactPlayer from 'react-player';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { useParams, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const useStyle = makeStyles((theme: Theme) => createStyles({
    video: {
        width: "100vw",
        height: "calc(100vw * 0.5625)",
        maxHeight: "71vh"
    },
}))

export default function Player() {
    const classes = useStyle()
    let { liveId } = useParams()
    const currentUrl: string = "https://liveslives.net" + useLocation().pathname
    return (
        <div className={classes.video}>
            <Helmet
                meta={[
                    { property: 'og:type', content: 'article' },
                    { property: 'og:url', content: currentUrl },
                    { property: 'og:image', content: `https://img.youtube.com/vi/${liveId}/maxres2.jpg` },
                ]}
            />
            <ReactPlayer
                muted
                pip
                loop
                playing
                url={`https://www.youtube.com/watch?v=${liveId}`}
                width="100%"
                height="100%"
            />
        </div>
    )
}