import React from 'react';
import { useRouteMatch, Link, Switch, Route } from 'react-router-dom';
import VideoCardModal from './VideoCardModal';
import { fetchIds, fetchVideoUrlFromId } from '../repositories/fromJson'
import { urlToId } from '../utils/VideoUtils'

export default function Lives() {
    let { path, url } = useRouteMatch()
    const ids = fetchIds()
    return (
        <div>
            <Switch>
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route path={`${path}/:liveId`}>
                    <VideoCardModal />
                </Route>
            </Switch>
            {ids.map(id => {
                const videoUrl = fetchVideoUrlFromId(id);
                const youtubeId = urlToId(videoUrl);
                const youtubeThumbneileUrl = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
                return (
                    <Link to={`${url}/${id}`} key={id}>
                        <img src={youtubeThumbneileUrl} alt={"video" + id} />
                    </Link>
                )
            })}
        </div>
    )
}