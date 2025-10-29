import { Container } from '@components/ui';
import HotelGallery from '../../ui/HotelGallery/HotelGallery';
import "./Gallery.css";

const Gallery = () => {
    const images = [
        "https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/bg4.jpg",
        // "https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/bg2.jpg",
        // "https://dev24.kodesolution.com/hoexr/wp-content/uploads/2024/05/room5.jpg",
        // "https://dev24.kodesolution.com/hoexr/wp-content/uploads/2024/05/room1.jpg",
        // "https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/01/blog3.jpg",
        // "https://dev24.kodesolution.com/hoexr/wp-content/uploads/2024/05/room6.jpg",
    ];

    return (
        <Container>
            <div className='gallery'>
                <div className="gallery__card">
                    <HotelGallery>
                        {images.map((src, i) => (
                            <a className='gallery__card-wrapper' href={src} key={i}>
                                <div className="gallery__card-wrapper">
                                    <img
                                        className='gallery__card-img'
                                        src={src}
                                        alt={`Image ${i}`}
                                    />
                                </div>
                            </a>
                        ))}
                    </HotelGallery>
                </div>
            </div>
        </Container>
    );
}

export default Gallery;
