import React from 'react';

const VideoListItem = ({ video, OnVideoSelect }) => {
    // {video, OnVideoSelecte} is the same as 
    //   const videos = props.videos;
    //   const OnVideoSelect = props.OnVideoSelect;

    // console.log(video);
    const title = video.snippet.title;
    const description = video.snippet.description;
    const publishedAt = video.snippet.publishedAt.substr(0, 10);
    const img = video.snippet.thumbnails.medium.url;
    const channelTitle = video.snippet.channelTitle;

    return (

        // </li>
        <li className="list-group-item" onClick={() => OnVideoSelect(video)}>
            <div className="card ">
                <img className="card-img-top" src={img} alt="Card image" />
                <div className="card-block">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{description}</p>
                    <div className=" card-text d-flex w-100 justify-content-between">
                        <small className="text-muted">{channelTitle}</small>
                        <small className="text-muted">{publishedAt}</small>
                    </div>
                </div>
            </div>
        </li>
    )
};
export default VideoListItem;

 // <a className="list-group-item list-group-item-action flex-column align-items-start">
        //     <div className="d-flex w-100 justify-content-between">
        //         <h5 className="mb-1">{title}</h5>
        //         <small>{publishedAt}</small>
        //     </div>
        //     <div className="d-flex w-100 justify-content-between">
        //         <img className="d-flex align-self-center mr-3" src={img} alt="Generic placeholder image" />
        //         <p className="mb-1">{description}</p>
        //     </div>
        //     <small> <a href={video.snippet.channelId}>{video.snippet.channelTitle}</a></small>
        // </a>

        // <li className="list-group-item">
        //     <div className="media">
        //         <img className="d-flex align-self-center mr-3" src={img} alt="Generic placeholder image" />
        //         <div className="media-body">
        //             <h5 className="mt-0">{title}</h5>
        //             <small>{publishedAt}</small>
        //             <p>{description}</p>
        //             <p className="mb-0">{channelTitle}</p>
        //         </div>
        //     </div>


// snippet
// channelId : "UCsG5dkqFUHZO6eY9uOzQqow"
// channelTitle : "Stab Magazine"
// description : "The overriding goal of this project was to see if we could answer the question: Is it possible to call a surfboard the best in the world? Sure, it's a flawed objective."
// liveBroadcastContent : "none"
// publishedAt : "2016-02-05T01:19:18.000Z"
// thumbnails :
//      default : {url: "https://i.ytimg.com/vi/T7jC3LDlLi8/default.jpg", width: 120, height: 90}
//      high : {url: "https://i.ytimg.com/vi/T7jC3LDlLi8/hqdefault.jpg", width: 480, height: 360}
//      medium : {url: "https://i.ytimg.com/vi/T7jC3LDlLi8/mqdefault.jpg", width: 320, height: 180}