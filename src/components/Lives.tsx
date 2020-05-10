import React, { useState } from 'react';
import { useRouteMatch, Switch, Route, useHistory } from 'react-router-dom';
import { fetchAll } from '../repositories/fromJson'
import { makeStyles, Theme, createStyles, Typography, Fab, Grid } from '@material-ui/core';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Player from './Player';
import Details from './Details';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

const useStyle = makeStyles((theme: Theme) => createStyles({
    carouselContent: {
        display: "block",
        height: 0,
        width: "calc(100vw / 7)",
        paddingBottom: "100%",
        backgroundSize: "cover",
        borderRadius: "10%",
        boxShadow: "3px 3px 3px rgba(0,0,0,0.5) inset",
    },
    carousel: {
        padding: "20px 0 0"
    },
    dummyPlayer: {
        width: "100vw",
        height: "calc(100vw * 0.5625)",
        maxHeight: "71vh",
        [theme.breakpoints.up('lg')]: {
            maxHeight: "40vh",
        },
        outline: "3px dashed white",
        outlineOffset: "-20px",
    },
    describe: {
        color: "white",
        width: "100%", height: "100%"
    },
    bgmFab: {
        backgroundColor: "rgba(245,123,81,0.8)",
        color: "rgb(256,256,256)",
    },
    shareFab: {
        backgroundColor: "rgba(253,191,30,0.8)",
        color: "rgb(256,256,256)",
    },
}))

export default function Lives() {
    const [activeIndex, setActiveIndex] = useState(7)
    const classes = useStyle()
    let { path } = useRouteMatch()
    let history = useHistory()
    const exhibits = fetchAll()
    const handleChange = (value: number) => {
        setActiveIndex(value)
        history.push(`${path}/${exhibits[value].id}`)
    }
    function carousel() {
        return (
            <div className={classes.carousel}>
                <Carousel
                    slidesPerPage={5}
                    slidesPerScroll={1}
                    clickToChange
                    arrows
                    dots
                    draggable
                    centered
                    value={activeIndex}
                    onChange={handleChange}
                >
                    {exhibits.map(exhibit => {
                        return (
                            <div key={exhibit.id}>
                                <span className={classes.carouselContent} style={{ backgroundImage: `url(${exhibit.face})` }} />
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        )
    }
    return (
        <div >
            <Switch>
                <Route exact path={path}>
                    <div className={classes.dummyPlayer}>
                        <Grid container direction="column" justify="center" alignItems="center" className={classes.describe}>
                            <Grid item>
                                <Typography variant="h5">すいそう をクリックしよう</Typography>
                            </Grid>
                            <br />
                            <Grid item>
                                <Typography variant="body1">音楽は{<Fab size="small" className={classes.bgmFab}><MusicNoteIcon /></Fab>}でへんこうできるよ</Typography>
                            </Grid>
                        </Grid>
                    </div>
                    {carousel()}
                </Route>
                <Route path={`${path}/:liveId`}>
                    <Player exhibits={exhibits} />
                    {carousel()}
                    <Details exhibits={exhibits} />
                </Route>
            </Switch>
        </div>
    )
}