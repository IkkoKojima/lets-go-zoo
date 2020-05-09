
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import StandaloneModal from './StandaloneModal';
import VideoCard from './VideoCard';
import { fetchAll } from '../repositories/fromJson';
import { Helmet } from 'react-helmet';

export default function VideoCardModal() {
    let { liveId } = useParams()
    const exhibits = fetchAll()
    const exhibit = exhibits.find(ex => ex.id === liveId)!;
    const videoCard = <VideoCard video={exhibit.video} tips={exhibit.tips} />
    const currentUrl: string = "https://liveslives.net" + useLocation().pathname
    return (
        <div>
            <Helmet
                meta={[
                    { property: 'og:type', content: 'article' },
                    { property: 'og:url', content: currentUrl },
                    { property: 'og:image', content: exhibit.face },
                ]}
            />
            <StandaloneModal content={videoCard} prevPath="/lives" />
        </div>
    )
}