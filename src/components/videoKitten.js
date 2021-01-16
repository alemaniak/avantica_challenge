import React from "react"
import YouTube from "react-youtube"

function YouTubeVideo(props) {
    // This grabs de youtube video ID as a prop parameter
    const videoId = props.videoId

    // This videoConfig set how the video will look on the page
    const videoConfig = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };

    const _onReady = (event) => {
        event.target.pauseVideo();
    }
    return <YouTube videoId={videoId} opts={videoConfig} onReady={_onReady} />;
}

export default YouTubeVideo