import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videos = props.videos;
    // console.log(videos)
    const videoItems = videos.map((video) => {
        return (
            <VideoListItem
                OnVideoSelect={videos.OnVideoSelect}
                key={video.etag}
                video={video} />
        )
    })

    return (
        <div className="col-4 list-group">
            {videoItems}
        </div>
    )
};
export default VideoList;
