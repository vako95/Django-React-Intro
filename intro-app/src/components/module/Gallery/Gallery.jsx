import { Container } from '@components/ui';
import HotelGallery from '../../ui/HotelGallery/HotelGallery';
import "./Gallery.css"
function Gallery() {


    const images = [
        "https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/bg4.jpg",
        "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?fm=jpg&q=60&w=3000",
        "https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/bg4.jpg",
        "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?fm=jpg&q=60&w=3000",
        "https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/bg4.jpg",
        "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?fm=jpg&q=60&w=3000",
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
