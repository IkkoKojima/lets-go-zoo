import React from 'react';
import { useRouteMatch, Link, Switch, Route } from 'react-router-dom';
import VideoCardModal from './VideoCardModal';
import { fetchAll } from '../repositories/fromJson'
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
    const exhibits = fetchAll()
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
                {exhibits.map(exhibit => {
                    return (
                        <Grid item key={exhibit.id} xs={6} sm={3} lg={2}>
                            <Link to={`${url}/${exhibit.id}`} >
                                <ImgPanel src={exhibit.face} alt={"video:" + exhibit.id} />
                            </Link>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}