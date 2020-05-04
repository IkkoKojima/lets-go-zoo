
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import SimpleModal from './SimpleModal';
import { Video } from '../domains/Video';
import VideoCard from './VideoCard';
import { fetchVideoUrlFromId } from '../repositories/fromJson';
import { urlToId } from '../utils/VideoUtils';
import { Helmet } from 'react-helmet';

export default function VideoCardModal() {
    let { liveId } = useParams()
    const videoUrl = fetchVideoUrlFromId(liveId)
    const youtubeId = urlToId(videoUrl)
    const youtubeThumbneileUrl = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
    const video: Video = new Video(youtubeId)
    const videoCard = <VideoCard video={video} />
    const currentUrl: string = "https://lets-go-zoo.now.sh" + useLocation().pathname
    return (
        <div>
            <Helmet
                title={`Lives&Lives`}
                meta={[
                    { name: 'twitter:card', content: 'summary_large_image' },
                    { name: 'twitter:site', content: '@IkkoKojima' },
                    { name: 'twitter:creator', content: '@IkkoKojima' },
                    { property: 'og:title', content: 'Lives&Lives' },
                    { property: 'og:type', content: 'website' },
                    { property: 'og:url', content: currentUrl },
                    { property: 'og:image', content: youtubeThumbneileUrl },
                    { property: 'og:description', content: '動物たちのイキイキとした姿をみんなで観察' },
                ]}
            />
            <SimpleModal content={videoCard} prevPath="/lives" />
        </div>
    )
}