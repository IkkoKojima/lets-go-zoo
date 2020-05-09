import React, { useState } from 'react';
import { useRouteMatch, Switch, Route, useHistory } from 'react-router-dom';
import { fetchAll } from '../repositories/fromJson'
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Player from './Player';

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
        backgroundColor: "rgba(0,0,0,0.5)",
        position: "fixed",
        width: "100vw",
        bottom: 0
    }
}))

export default function Lives() {
    const [activeIndex, setActiveIndex] = useState(0)
    const classes = useStyle()
    let { path } = useRouteMatch()
    let history = useHistory()
    const exhibits = fetchAll()
    const handleChange = (value: number) => {
        setActiveIndex(value)
        history.push(`${path}/${exhibits[value].video.id}`)
    }
    return (
        <div >
            <Switch>
                <Route exact path={path}>
                    {/* LIVES の HEADER */}
                </Route>
                <Route path={`${path}/:liveId`}>
                    <Player />
                </Route>
            </Switch>
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
                            <div >
                                <span className={classes.carouselContent} style={{ backgroundImage: `url(${exhibit.face})` }} />
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
}