import React, { useState } from 'react';
import { useRouteMatch, Switch, Route, useHistory } from 'react-router-dom';
import { fetchAll } from '../repositories/fromJson'
import { makeStyles, Theme, createStyles, Typography, Fab } from '@material-ui/core';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Player from './Player';
import Details from './Details';
import cover from '../imgs/cover.png'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import ShareIcon from '@material-ui/icons/Share';

const useStyle = makeStyles((theme: Theme) => createStyles({
    carouselContent: {
        display: "block",
        height: 0,
        width: "calc(100vw / 7)",
        paddingBottom: "100%",
        backgroundSize: "cover",
        borderRadius: "100%",
        boxShadow: "3px 3px 3px rgba(0,0,0,0.5)",
    },
    carousel: {
        padding: "20px 0 0"
    },
    dummyPlayer: {
        width: "100vw",
        height: "calc(100vw * 0.5625)",
        maxHeight: "71vh",
        outline: "3px dashed white",
        outlineOffset: "-20px",
        backgroundImage: `url(${cover})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center"
    },
    describe: {
        color: "white",

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
    const [activeIndex, setActiveIndex] = useState(4)
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
                    slidesPerScroll={3}
                    clickToChange
                    arrows
                    dots
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
                    <div className={classes.dummyPlayer}></div>
                    {carousel()}
                    <div className={classes.describe}>
                        <Typography variant="h5" align="center">
                            すいそうを1つ選んでみよう
                            <br />
                            <br />
                            <br />
                            {<Fab size="small" className={classes.bgmFab}><MusicNoteIcon /></Fab>}で音楽をへんこうできるよ
                            <br />
                            <br />
                            <br />
                            よかったらシェア
                            <Fab size="small" className={classes.shareFab}><ShareIcon /></Fab>
                            してね
                    </Typography>
                    </div>
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