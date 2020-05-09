import React from 'react';
import ReactPlayer from 'react-player';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { useParams, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Exhibit } from '../domains/Exhibit';

const useStyle = makeStyles((theme: Theme) => createStyles({
    video: {
        width: "100vw",
        height: "calc(100vw * 0.5625)",
        maxHeight: "71vh"
    },
}))

type Props = {
    exhibits: Exhibit[]
}

export default function Player(props: Props) {
    const classes = useStyle()
    let { liveId } = useParams()
    const video_id = props.exhibits.find(e => e.id === liveId)!.video.id
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
                url={`https://www.youtube.com/watch?v=${video_id}`}
                width="100%"
                height="100%"
            />
        </div>
    )
}