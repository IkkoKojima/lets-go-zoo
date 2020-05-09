import React from 'react';
import ReactPlayer from 'react-player';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { useRouteMatch, useParams } from 'react-router-dom';

const useStyle = makeStyles((theme: Theme) => createStyles({
    video: {
        width: "100vw",
        height: "calc(100vw * 0.5625)",
        maxHeight: "80vh"
    },
}))

export default function Player() {
    const classes = useStyle()
    let { liveId } = useParams()
    return (
        <div className={classes.video}>
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