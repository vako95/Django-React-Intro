import { Container, DecoratedHeading } from "@components/ui";
import testiBg from "./assets/img/testi-bg.jpg";
import "./Testimonial.css";
import { SwiperSlide } from 'swiper/react';
import { FadeInRight } from "@components/animation"
import SliderCube from "../../ui/SliderCube/SliderCube";
import StarRating from "./SlideRaiting/SlideRaiting";
import { slideData } from "../../../constants/sections";

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
                                            <div className="slide-content">
                                                <FadeInRight>
                                                    <div className="slide-content-wrapper">
                                                        <img
                                                            src={slide.img}
                                                            alt="Reviewer"
                                                            className="slide-content-cover"
                                                        />
                                                    </div>
                                                </FadeInRight>
                                                <FadeInRight>
                                                    <div className="slide-review">
                                                        <div className="slide-review-stars">
                                                            <StarRating rating={slide.rating} />
                                                        </div>
                                                        <div className="slide-review-comment">
                                                            <span className="slide-review-comment-desc">
                                                                {slide.desc}
                                                            </span>
                                                            <cite className="slide-review-comment-author">{slide.author}</cite>
                                                            <strong className="slide-review-comment-review">{slide.role}</strong>
                                                        </div>
                                                    </div>
                                                </FadeInRight>
                                            </div>
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