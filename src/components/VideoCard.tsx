import React from 'react';
import YouTube, { Options } from 'react-youtube'
import { Video } from '../domains/Video';
import { makeStyles, Theme, createStyles, Paper, Grid, Button } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) => createStyles({
    parent: {
        width: "90vw",
        height: "90vh",
        background: "black"
    },
    root: {
        height: "100%",
        width: "100%",
        padding: "10px"
    },
    grid: {
        padding: "5px",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    video: {
        width: "70vw",
        height: "70vh"
    },
    content: {
        height: "100%",
        width: "100%"
    }
}))

type Props = {
    video: Video
}

export default function VideoCard(props: Props) {
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

    function Sidepanel() {
        return (
            <React.Fragment>
                <Grid className={classes.grid} style={{ height: "40%" }} item><Paper className={classes.content}>ad</Paper></Grid>
                <Grid className={classes.grid} style={{ height: "20%" }} item><Button variant="contained" className={classes.content}>detail</Button></Grid>
                <Grid className={classes.grid} style={{ height: "20%" }} item><Button variant="contained" className={classes.content}>donate</Button></Grid>
                <Grid className={classes.grid} style={{ height: "20%" }} item><Button variant="contained" className={classes.content}>screenshot</Button></Grid>
            </React.Fragment>
        )
    }

    function Mainpanel() {
        return (
            <React.Fragment>
                <Grid className={classes.grid} style={{ height: "80%" }} item>
                    <YouTube
                        videoId={props.video.id}
                        opts={opts}
                        className={classes.video}
                    />
                </Grid>
                <Grid className={classes.grid} style={{ height: "20%" }} item>
                    <Paper className={classes.content}>comment</Paper>
                </Grid>
            </React.Fragment>
        )
    }
    return (
        <div className={classes.parent}>
            <Grid
                className={classes.root}
                container
            >
                <Grid
                    item
                    xs={10}
                    container
                    direction="column"
                    justify="space-evenly"
                    alignItems="stretch"
                >
                    <Mainpanel />
                </Grid>
                <Grid
                    item
                    xs={2}
                    container
                    direction="column"
                    justify="space-evenly"
                    alignItems="stretch"
                >
                    <Sidepanel />
                </Grid>
            </Grid>
        </div>
    )
}
