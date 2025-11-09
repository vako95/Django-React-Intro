import "./Gallery.css";
import { useState } from "react";
import { Container } from "@components/ui";
import Lightbox from "yet-another-react-lightbox";


import "yet-another-react-lightbox/styles.css";


import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Download from "yet-another-react-lightbox/plugins/download";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";


import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";


const galleryImg = [
    { id: 1, src: "https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/bg4.jpg" },
    { id: 2, src: "https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/bg4.jpg" },
    { id: 3, src: "https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/bg4.jpg" },
    { id: 4, src: "https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/bg4.jpg" },
]
const Gallery = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen((prev) => !prev);
    }
    return (
        <Container>
            <div className="gallery">
                <div className="gallery__card">
                    {galleryImg.map((item) => (
                        <div className="gallery__card-wrapper" key={item.id} onClick={handleOpen}>
                            <img src={item.src} alt={`image ${item.id}`} className="gallery__card-img" />
                        </div>
                    ))}
                </div>


                <Lightbox
                    counter={{ container: { style: { top: "unset", bottom: 0 } } }}
                    open={open}
                    close={() => setOpen(false)}
                    slides={galleryImg.map((item) => ({
                        src: item.src,
                        alt: `image ${item.id}`,
                    }))}
                    plugins={[Download, Slideshow, Counter, Captions, Thumbnails, Video, Zoom]}
                />
            </div>
        </Container>
    );
}

export default Gallery;
