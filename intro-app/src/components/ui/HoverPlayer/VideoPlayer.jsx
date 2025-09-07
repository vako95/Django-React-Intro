import clsx from "clsx";

import "./VideoPlayer.css";
import ZoomInUp from "../../animation/ZoomInUp/ZoomInUp";

const VideoPlayer = ({ className, children, videoId, size = "md", border = true }) => {

    const classes = clsx(
        "iframe",
        border && "iframe-border",
        className
    );

    return (
        <ZoomInUp className="iframe-zoom" isVisible={true}>
            <div className="iframe-ambient-wrapper">
                <iframe
                    className={classes}
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                >
                    {children}
                </iframe>
            </div>
        </ZoomInUp>
    );
}

export default VideoPlayer;
