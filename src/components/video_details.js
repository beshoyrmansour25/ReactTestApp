import React from 'react';
import Reactlogo from '../assets/logo.svg';
import '../style/App.css';
const VideoDetail = ({ video }) => {
    if (!video) {
        return <div className="text-center">
            <img src={Reactlogo} className=" App-loading" alt="logo" />
        </div>
    }
    const videoId = video.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    const title = video.snippet.title;
    const description = video.snippet.description;
    const publishedAt = video.snippet.publishedAt.substr(0, 10);
    const img = video.snippet.thumbnails.medium.url;
    const channelTitle = video.snippet.channelTitle;

    return (
        <div className="col-8">
            <div className="card">
                <iframe height="400" src={videoUrl} frameBorder="0" allowFullScreen></iframe>
                <div className="card-block">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{description}</p>
                    <div className=" card-text d-flex w-100 justify-content-between">
                        <small className="text-muted">{channelTitle}</small>
                        <small className="text-muted">{publishedAt}</small>
                    </div>
                </div>
            </div>
            <div className="card-block">

            </div>
        </div>
    )
}

export default VideoDetail
// <iframe width="560" height="315" src="https://www.youtube.com/embed/" frameborder="0" allowfullscreen></iframe>