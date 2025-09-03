import { useEffect } from "react";

import clsx from "clsx";

import "./VideoPlayer.css";
import ZoomInUp from "../../animation/ZoomInUp/ZoomInUp";
const VideoPlayer = ({ children, videoId, size = "md", border = true }) => {
    const classes = clsx(
        "modal",
        size && `modal--${size}`
    )


    const iframeClass = clsx(
        "video-player__iframe",
        border && "video-player__iframe--border"
    );

    useEffect(() => {

        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (

        <div className={classes}>
            <ZoomInUp isVisible={true}>
                <div className="video-player">
                    <iframe
                        className={iframeClass}
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    >
                        {children}
                    </iframe>
                </div>
            </ZoomInUp>
        </div>


    )
}

export default VideoPlayer;