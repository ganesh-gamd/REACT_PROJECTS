import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
    return (
        <div>
            <ReactPlayer url="https://www.youtube.com/watch?v=jjp9SPyEB7k" controls={true} />
        </div>
    );
};

export default VideoPlayer;
