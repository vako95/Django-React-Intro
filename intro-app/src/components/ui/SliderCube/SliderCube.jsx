import React from 'react';
import { Swiper } from 'swiper/react';
import { EffectCreative, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import './SliderCube.css';

const SliderCube = ({ children }) => {
    return (
        <div className="slider-cube">
            <div className="slider__container">
                <Swiper
                    grabCursor={true}
                    effect={'creative'}
                    pagination={{
                        clickable: true,
                        dynamicBullets: false,
                    }}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -300],
                        },
                        next: {
                            translate: ['120%', 0, 0],
                        },
                    }}
                    modules={[EffectCreative, Pagination]}
                    className="mySwiper"
                >
                    {children}
                </Swiper>
            </div>
        </div>
    );
};

export default SliderCube;
