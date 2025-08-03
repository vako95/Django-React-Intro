import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Slider.css';
import { Navigation } from 'swiper/modules';
import { useState, useRef } from 'react';
import img1 from "./assets/img/bg1.jpg";
import slide2 from "./assets/img/slide2.jpg";

const Slider = () => {
    const images = [
        { id: 1, src: img1, alt: "Фон 1" },
        { id: 2, src: slide2, alt: "Слайд 2" },
    ];

    const [hoveredButton, setHoveredButton] = useState(null);
    const [preview, setPreview] = useState({ direction: null, src: null });
    const swiperRef = useRef(null);

    const getPreviewIndex = (direction) => {
        const swiper = swiperRef.current;
        if (!swiper) return null;

        return direction === "next"
            ? (swiper.realIndex + 1) % images.length
            : (swiper.realIndex - 1 + images.length) % images.length;
    };

    const handleMouseEnter = (direction) => {
        setHoveredButton(direction);
        const index = getPreviewIndex(direction);
        if (index !== null) setPreview({ direction, src: images[index].src });
    };

    const handleMouseLeave = () => {
        setHoveredButton(null);
    };

    const handleSlideChange = () => {
        if (hoveredButton) {
            const index = getPreviewIndex(hoveredButton);
            if (index !== null) setPreview({ direction: hoveredButton, src: images[index].src });
        }
    };

    const renderPreviewCircle = (direction) => (
        <div className={`preview-circle ${direction} ${preview.direction === direction && hoveredButton === direction ? "show" : ""}`}>
            {preview.direction === direction && preview.src && <img src={preview.src} alt="Preview" />}
        </div>
    );

    return (
        <div className="slider">
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                slidesPerView={1}
                loop={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={handleSlideChange}
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="swiper_backdrop">
                            <img src={img.src} alt={img.alt} />
                        </div>
                    </SwiperSlide>
                ))}
                <div
                    className="swiper-button-prev"
                    onMouseEnter={() => handleMouseEnter("prev")}
                    onMouseLeave={handleMouseLeave}
                >
                    {renderPreviewCircle("prev")}
                </div>
                <div
                    className="swiper-button-next"
                    onMouseEnter={() => handleMouseEnter("next")}
                    onMouseLeave={handleMouseLeave}
                >
                    {renderPreviewCircle("next")}
                </div>
            </Swiper>
        </div>
    );
};

export default Slider;
