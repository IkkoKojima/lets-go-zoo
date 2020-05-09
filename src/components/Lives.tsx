import React, { useState } from 'react';
import { useRouteMatch, Switch, Route, useHistory } from 'react-router-dom';
import { fetchAll } from '../repositories/fromJson'
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import ReactPlayer from 'react-player'
import Player from './Player';

const useStyle = makeStyles((theme: Theme) => createStyles({
    carouselItem: {
        width: "calc(100vw / 7)",
        height: "15vh",
        [theme.breakpoints.down('xs')]: {
            height: "50px",
        },
        objectFit: "cover",
        borderRadius: "10px",
    },
    carousel: {
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: "10px 0px 0px"
    }
}))

export default function Lives() {
    const [activeIndex, setActiveIndex] = useState(0)
    const classes = useStyle()
    let { path, url } = useRouteMatch()
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
            <ReactPlayer loop playing url={`https://www.youtube.com/watch?v=b-vxJT1EsfI`} width="0" height="0" />
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
                            <img className={classes.carouselItem} src={exhibit.face} alt={exhibit.id} />
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
}