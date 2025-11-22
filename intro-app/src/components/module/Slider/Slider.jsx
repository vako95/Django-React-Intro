import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Parallax, Autoplay, EffectFade } from 'swiper/modules';
import { useRef, useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import "./Slider.css";

import SliderPromo from './components/SliderPromo/SliderPromo.jsx';
import SliderFrame from '../../ui/SliderFrame/SliderFrame.jsx';

const photos = [
    { id: 1, src: 'https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/bg1.jpg' },
    { id: 2, src: 'https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/slide2.jpg' },
];

const Slider = () => {
    const photoRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [hoveredButton, setHoveredButton] = useState("");

    const getPrevIndex = () => (currentSlide - 1 + photos.length) % photos.length;
    const getNextIndex = () => (currentSlide + 1) % photos.length;

    return (
        <div className="slider">
            <Swiper
                simulateTouch={false}
                onSwiper={(swiper) => (photoRef.current = swiper)}
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                parallax={true}
                speed={300}
                loop={true}
                watchSlidesProgress={true}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                modules={[Navigation, Parallax, Autoplay, EffectFade]}
                className="mySwiper"
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }}
            >
                {photos.map((photo, index) => (
                    <SwiperSlide key={photo.id} className="slider__frame">
                        <SliderFrame src={photo.src} isActive={currentSlide === index}>
                            <SliderPromo currentSlide={currentSlide === index} />
                        </SliderFrame>
                    </SwiperSlide>
                ))}

                <div
                    touchStartPreventDefault={false}
                    touchMoveStopPropagation={false}
                    className="swiper-button-prev"
                    onMouseEnter={() => setHoveredButton("prev")}
                    onMouseLeave={() => setHoveredButton(null)}
                    onClick={() => {
                        photoRef.current?.slidePrev();
                        setHoveredButton("prev");
                    }}
                >
                    <img
                        className={`swiper__preview-img ${hoveredButton === "prev" ? "swiper__preview-img--active" : ""}`}
                        src={photos[getPrevIndex()]?.src}
                        alt="prev preview"
                    />
                </div>

                <div
                    className="swiper-button-next"
                    onMouseEnter={() => setHoveredButton("next")}
                    onMouseLeave={() => setHoveredButton(null)}
                    onClick={() => {
                        photoRef.current?.slideNext();
                        setHoveredButton("next");
                    }}
                >
                    <img
                        className={`swiper__preview-img ${hoveredButton === "next" ? "swiper__preview-img--active" : ""}`}
                        src={photos[getNextIndex()]?.src}
                        alt="next preview"
                    />
                </div>
            </Swiper>
        </div>
    );
};

export default Slider;
