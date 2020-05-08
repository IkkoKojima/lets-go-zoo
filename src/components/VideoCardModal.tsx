
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import StandaloneModal from './StandaloneModal';
import { Video } from '../domains/Video';
import VideoCard from './VideoCard';
import { fetchVideoUrlFromId, fetchTipsFromId } from '../repositories/fromJson';
import { urlToId } from '../utils/VideoUtils';
import { Helmet } from 'react-helmet';
import { Tip } from '../domains/Tip';

export default function VideoCardModal() {
    let { liveId } = useParams()
    const videoUrl = fetchVideoUrlFromId(liveId)
    const youtubeId = urlToId(videoUrl)
    const youtubeThumbneileUrl = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
    const video: Video = new Video(youtubeId)
    const tips: Tip[] = fetchTipsFromId(liveId)
    const videoCard = <VideoCard video={video} tips={tips} />
    const currentUrl: string = "https://liveslives.net" + useLocation().pathname
    return (
        <div>
            <Helmet
                meta={[
                    { property: 'og:type', content: 'article' },
                    { property: 'og:url', content: currentUrl },
                    { property: 'og:image', content: youtubeThumbneileUrl },
                ]}
            />
            <StandaloneModal content={videoCard} prevPath="/lives" />
        </div>
    )
}