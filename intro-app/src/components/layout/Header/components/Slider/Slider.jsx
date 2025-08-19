import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Parallax, Autoplay, EffectFade } from 'swiper/modules';
import { useRef, useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import "./Slider.css";
import SliderPromo from './components/SliderPromo/SliderPromo.jsx';

// import SliderBooking from './components/SliderBooking/SliderBooking.jsx';

const photos = [
    { id: 1, src: 'https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/bg1.jpg' },
    { id: 2, src: 'https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/slide2.jpg' },
    { id: 3, src: 'https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/bg1.jpg' },
    { id: 4, src: 'https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/slide2.jpg' },
];

const Slider = () => {
    const [currentPreview, setCurrentPreview] = useState({ src: '', hovered: false });
    const [prevPreview, setPrevPreview] = useState({ src: '', hovered: false });
    const photoRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextHover = () => {
        const swiper = photoRef.current;
        if (!swiper) return;

        const nextIndex = (swiper.realIndex + 1) % photos.length;
        setCurrentPreview({ src: photos[nextIndex].src, hovered: true });
    };

    const handlePrevHover = () => {
        const swiper = photoRef.current;
        if (!swiper) return;

        const prevIndex = (swiper.realIndex - 1 + photos.length) % photos.length;
        setPrevPreview({ src: photos[prevIndex].src, hovered: true });
    };

    const handleNextLeave = () => {
        setCurrentPreview((prev) => ({ ...prev, hovered: false }));
    };

    const handlePrevLeave = () => {
        setPrevPreview((prev) => ({ ...prev, hovered: false }));
    };

    return (
        <div className="slider">
            <Swiper
                onSwiper={(swiper) => (photoRef.current = swiper)}
                onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
                autoplay={false}
                parallax={true}
                speed={3000}
                loop={true}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                modules={[Navigation, Parallax, Autoplay, EffectFade]}
                className="mySwiper"
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }}
            >
                {photos.map((photo) => (
                    <SwiperSlide key={photo.id} className="slider__frame">
                        <div style={{ backgroundImage: `url(${photo.src})` }} className="slider__frame-backdrop">
                            <SliderPromo currentSlide={currentSlide} />
                        </div>
                    </SwiperSlide>
                ))}

                <div
                    className="swiper-button-prev"
                    onMouseEnter={handlePrevHover}
                    onMouseLeave={handlePrevLeave}
                    onClick={handlePrevHover}
                >
                    {prevPreview.src && (
                        <img
                            className={`swiper__preview-img ${prevPreview.hovered ? "swiper__preview-img--active" : ""}`}
                            src={prevPreview.src}
                            alt="next preview"
                        />
                    )}
                </div>


                <div
                    className="swiper-button-next"
                    onMouseEnter={handleNextHover}
                    onMouseLeave={handleNextLeave}
                    onClick={handleNextHover}
                >
                    {currentPreview.src && (
                        <img
                            className={`swiper__preview-img ${currentPreview.hovered ? "swiper__preview-img--active" : ""}`}
                            src={currentPreview.src}
                            alt="next preview"
                        />
                    )}
                </div>
            </Swiper>
        </div >
    );
};

export default Slider;
