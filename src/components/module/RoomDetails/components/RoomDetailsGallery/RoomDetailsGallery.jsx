import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Download from "yet-another-react-lightbox/plugins/download";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "./RoomDetailsGallery.css";
import { slicetext } from "@utils";

const galleryImg = [
    { id: 1, src: "https://w0.peakpx.com/wallpaper/137/548/HD-wallpaper-korean-girl-sexy-girl-koran-women.jpg", badge: "Private Bedroom", title: "Standard Double Room", desc: "40-inch LED TV / Mini bar / Non-smoking / USB charging" },
    { id: 2, src: "https://w0.peakpx.com/wallpaper/137/548/HD-wallpaper-korean-girl-sexy-girl-koran-women.jpg", badge: "Private Bedroom", title: "Standard Double Room", desc: "40-inch LED TV / Mini bar / Non-smoking / USB charging" },
    { id: 3, src: "https://w0.peakpx.com/wallpaper/137/548/HD-wallpaper-korean-girl-sexy-girl-koran-women.jpg", badge: "Private Bedroom", title: "Standard Double Room", desc: "40-inch LED TV / Mini bar / Non-smoking / USB charging" },
    { id: 4, src: "https://w0.peakpx.com/wallpaper/137/548/HD-wallpaper-korean-girl-sexy-girl-koran-women.jpg", badge: "Private Bedroom", title: "Standard Double Room", desc: "40-inch LED TV / Mini bar / Non-smoking / USB charging" },
    { id: 5, src: "https://w0.peakpx.com/wallpaper/137/548/HD-wallpaper-korean-girl-sexy-girl-koran-women.jpg", badge: "Private Bedroom", title: "Standard Double Room", desc: "40-inch LED TV / Mini bar / Non-smoking / USB charging" },
    { id: 6, src: "https://w0.peakpx.com/wallpaper/137/548/HD-wallpaper-korean-girl-sexy-girl-koran-women.jpg", badge: "Private Bedroom", title: "Standard Double Room", desc: "40-inch LED TV / Mini bar / Non-smoking / USB charging" },

]
const RoomDetailsGallery = () => {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = (index) => {
        setCurrentIndex(index);
        setOpen(true);
    };
    return (
        <div className="room-details__gallery">
            <div className="room-details__gallery-heading">
                <h2 className="room-details__gallery-heading-title">
                    Around the Room
                </h2>
            </div>
            <div className="room-details__gallery-card">
                {galleryImg.map((item, index) => (
                    <div className="room-details__gallery-card-content">
                        <div className="room-details__gallery-card-wrapper" onClick={() => handleClick(index)}>
                            <img className="room-details__gallery-card-wrapper-img" src={item.src} alt="" />
                        </div>
                        <div className="room-details__gallery-card-preview">
                            <h2
                                className="room-details__gallery-card-preview-title"
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content={item.title}

                            >
                                {slicetext(item.title, 24)}
                            </h2>
                        </div>
                    </div>
                ))}


                <Lightbox
                    counter={{ container: { style: { top: "unset", bottom: 0 } } }}
                    open={open}
                    index={currentIndex}
                    close={() => setOpen(false)}
                    slides={galleryImg.map((item) => ({
                        src: item.src,
                        alt: `image ${item.id}`,
                    }))}
                    plugins={[Download, Slideshow, Counter, Captions, Thumbnails, Video, Zoom]}
                />
            </div>
        </div>
    )
}

export default RoomDetailsGallery;