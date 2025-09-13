import { Container, DecoratedHeading } from "@components/ui";
import { SwiperSlide } from 'swiper/react';
import SliderCube from "../../ui/SliderCube/SliderCube";
import Slider from "./components/Slider/Slider";
import { slideData } from "../../../constants/sections";
import testiBg from "./assets/img/testi-bg.jpg";

import "./Testimonial.css";
const Testimonial = () => {

    return (
        <section className="testimonial">
            <div className="testimonial__backdrop" style={{ backgroundImage: `url(${testiBg})` }}>
                <Container>
                    <div className="testimonial__container">
                        <div className="testimonial__content">
                            <div className="testimonial__heading">
                                <DecoratedHeading
                                    showLeftIcon={false}
                                    title="What says for customer"
                                    subtitle="WhatClient's Say?"
                                />
                            </div>
                            <div className="testimonial__slider">
                                <SliderCube>
                                    {slideData.map((slide, idx) => (
                                        <SwiperSlide key={idx}>
                                            <Slider slide={slide} />
                                        </SwiperSlide>
                                    ))}
                                </SliderCube>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Testimonial; 