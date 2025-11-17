import { Container, DecoratedHeading } from "@components/ui";
import { SwiperSlide } from 'swiper/react';
import SliderCube from "../../ui/SliderCube/SliderCube";
import Slider from "./components/Slider/Slider";
import { slideData } from "../../../constants/sections";
import testiBg from "./assets/img/testi-bg.jpg";

import "./Testimonial.css";
import HotelRating from "../../ui/HotelRating/HotelRating";






import { Swiper } from 'swiper/react';
import { EffectCreative, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

import { BsChatQuote } from "react-icons/bs";


const Testimonial = () => {

    return (
        <section className="testimonial">
            <div className="testimonial__backdrop" style={{ backgroundImage: `url(${testiBg})` }}>
                <Container>
                    <div className="testimonial__container">
                        <div className="testimonial__content">
                            <div className="testimonial__heading">
                                <DecoratedHeading
                                    position="start"
                                    showLeftIcon={false}
                                    title="What says for customer"
                                    subtitle="WhatClient's Say?"
                                />
                            </div>
                            <div className="testimonial__slider">
                                <Swiper
                                    spaceBetween={30}
                                    speed={400}
                                    simulateTouch={true}
                                    touchRatio={1}
                                    resistance={true}
                                    resistanceRatio={0.85}
                                    pagination={{ clickable: true }}
                                    modules={[Pagination]}
                                    className="testimonial__slider-panel"
                                >
                                    {slideData.map((item, idx) => (
                                        <SwiperSlide className="testimonial__slider-content" key={idx}>
                                            <div className="testimonial__slider-item">
                                                <div className="testimonial__slider-wrapper">
                                                    <img className="testimonial__slider-wrapper-img" src={item.img} alt="" />
                                                </div>
                                                <div className="testimonial__slider-item-rewiew">
                                                    <div className="testimonial__slider-item-rewiew-rating">
                                                        <HotelRating />
                                                    </div>
                                                    <div className="testimonial__slider-item-rewiew-comment">
                                                        <p className="testimonial__slider-item-rewiew-comment-text">
                                                            The utanislen quam nestibulum ac quame odion elementum sceisu nthe aucan.
                                                            Orci varius natoque penatibu et magnis disney parturient monte nascete ridiculus
                                                            mus nellen etesque habitant morbine.
                                                        </p>
                                                        <p className="testimonial__slider-item-rewiew-comment-author">
                                                            <strong>
                                                                Jackson Smith
                                                            </strong>
                                                        </p>
                                                        <span className="testimonial__slider-item-rewiew-comment-role">
                                                            Guest Review
                                                        </span>
                                                        <span className="testimonial__slider-item-rewiew-comment-icon">
                                                            <BsChatQuote />
                                                        </span>
                                                    </div>

                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </Container>
            </div >
        </section >
    )
}

export default Testimonial; 