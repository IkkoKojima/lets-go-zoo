
import React from 'react';
import { useParams } from 'react-router-dom';
import SimpleModal from './SimpleModal';
import { Video } from '../domains/Video';
import VideoCard from './VideoCard';
import { fetchVideoUrlFromId } from '../repositories/fromJson';
import { urlToId } from '../utils/VideoUtils';

export default function VideoCardModal() {
    let { liveId } = useParams()
    const videoUrl = fetchVideoUrlFromId(liveId)
    const youtubeId = urlToId(videoUrl)
    const video: Video = new Video(youtubeId)
    const videoCard = <VideoCard video={video} />
    return (
        <SimpleModal content={videoCard} prevPath="/lives" />
    )
}