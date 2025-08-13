import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";

import bg1 from "./assets/bg1.jpg";
import bg2 from "./assets/bg1.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";

const Slider = () => {
    const slides = [
        { id: 1, bg: bg1, text: "ПЕРВЫЙ СЛАЙД" },
        { id: 2, bg: bg2, text: "ВТОРОЙ СЛАЙД" },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const textVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    };

    const imageVariants = {
        hidden: { scale: 1, opacity: 0.7 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "linear" } },
    };

    return (
        <div className="slider">
            <Swiper
                className="slider__swiper"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(s) => setActiveIndex(s.realIndex)}        // начальный индекс
                onSlideChange={(s) => setActiveIndex(s.realIndex)}   // при каждой смене
            >
                {slides.map((slide, index) => {
                    const isActive = activeIndex === index;
                    return (
                        <SwiperSlide key={slide.id} className="slider__swiper-slide">
                            <div className="slider-div">
                                {/* motion.img лучше, чем обычный img — можно анимировать */}
                                <motion.img
                                    className="slider-bg"
                                    src={slide.bg}
                                    alt=""
                                    variants={imageVariants}
                                    initial="hidden"
                                    animate={isActive ? "visible" : "hidden"}
                                />

                                <motion.h1
                                    className="slider-text"
                                    variants={textVariants}
                                    initial="hidden"
                                    animate={isActive ? "visible" : "hidden"}
                                >
                                    {slide.text}
                                </motion.h1>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default Slider;
