import React from 'react';
import { useRouteMatch, Link, Switch, Route } from 'react-router-dom';
import VideoCardModal from './VideoCardModal';
import { fetchIds, fetchVideoUrlFromId } from '../repositories/fromJson'
import { urlToId } from '../utils/VideoUtils'
import ImgPanel from './ImgPanel';
import { Grid, makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) => createStyles({
    background: {
        margin: "10px 10px 0px"
    }
}))

export default function Lives() {
    const classes = useStyle()
    let { path, url } = useRouteMatch()
    const ids = fetchIds()
    return (
        <div className={classes.background}>
            <Switch>
                <Route exact path={path}>
                    {/* LIVES の HEADER */}
                </Route>
                <Route path={`${path}/:liveId`}>
                    <VideoCardModal />
                </Route>
            </Switch>
            <Grid container spacing={1}>
                {ids.map(id => {
                    const videoUrl = fetchVideoUrlFromId(id);
                    const youtubeId = urlToId(videoUrl);
                    const youtubeThumbneileUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
                    return (
                        <Grid item key={id} xs={6} sm={3}>
                            <Link to={`${url}/${id}`} >
                                <ImgPanel src={youtubeThumbneileUrl} alt={"video" + id} />
                            </Link>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}