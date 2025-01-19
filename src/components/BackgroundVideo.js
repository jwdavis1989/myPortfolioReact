import backgroundVideo from '../resources/videos/JerryBackgroundVideo_02.mp4';
import React, { useRef, useEffect } from 'react';

function BackgroundVideo() {

    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current.playbackRate = 0.5;
    }, []);  

    return (
        <div className="background-video">
            <video ref={videoRef} loop autoPlay muted>
                <source src={backgroundVideo} type="video/mp4" />
            </video>
        </div>
    );
}

export { BackgroundVideo };