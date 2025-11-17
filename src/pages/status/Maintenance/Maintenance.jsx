import React from 'react';
import { useTimer } from 'react-timer-hook';
import BackdropContainer from '../../../components/ui/BackdropContainer/BackdropContainer';
import { Container } from "@components/ui"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { maintainceItem } from "../../../constants/sections"
import { Link } from "react-router-dom"
import maintenceLogo from "./assets/img/logo-wide-white.png";
import "./Maintenance.css";

import { ICON_MAP } from "@constants/map.js";
const Maintenance = ({ expiryTimestamp }) => {
    const {
        totalSeconds,
        milliseconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called'), interval: 20 });


    return (
        <>
            <div className="maintenance">
                <div className="maintenance__table"></div>
                <Container>
                    <div className="maintenance__content">
                        <div className="maintenance__content  maintenance__content--left">
                            <div className="maintenance__about">
                                <div className="maintenance__about-wrapper">
                                    <img className="maintenance__about-wrapper-img" src={maintenceLogo} alt="" />
                                </div>
                                <div className="maintenance__about-item">
                                    <h2 className="maintenance__about-item-title">
                                        Coming Soon, Stay Tuned!
                                    </h2>
                                    <span className="maintenance__about-item-desc">
                                        Our website is under construction.
                                        We are working on something really amazing!
                                    </span>
                                    {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
                                </div>
                            </div>


                        </div>
                        <div className="maintenance__content maintenance__content--right">
                            <div className="maintenance__timer">
                                <div className="maintenance__timer-heading">
                                    <h2 className='maintenance__timer-heading-title'>
                                        The maintenance will end on
                                    </h2>
                                </div>
                                <div className="maintenance__timer-content">
                                    <div className="maintenance__timer-unit">
                                        <span className="maintenance__timer-unit-value">
                                            {days}
                                        </span>
                                        <h2 className="maintenance__timer-unit-title">
                                            Days
                                        </h2>
                                    </div>
                                    <div className="maintenance__timer-unit">
                                        <span className="maintenance__timer-unit-value">
                                            {hours}
                                        </span>
                                        <h2 className="maintenance__timer-unit-title">
                                            Hours
                                        </h2>
                                    </div>
                                    <div className="maintenance__timer-unit">
                                        <span className="maintenance__timer-unit-value">
                                            {minutes}
                                        </span>
                                        <h2 className="maintenance__timer-unit-title">
                                            Minutes
                                        </h2>
                                    </div>
                                    <div className="maintenance__timer-unit">
                                        <span className="maintenance__timer-unit-value">
                                            {seconds}
                                        </span>
                                        <h2 className="maintenance__timer-unit-title">
                                            Seconds
                                        </h2>
                                    </div>
                                    {/* <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>:<span>{milliseconds}</span> */}
                                </div>
                                <div className="maintenance__social">
                                    <ul className="maintenance__social-list">
                                        {Array.isArray(maintainceItem) &&
                                            maintainceItem.map((item) => {
                                                const Icon = ICON_MAP[item.icon] ?? ICON_MAP.default;
                                                return (
                                                    <li className="maintenance__social-item" key={item.id}>
                                                        <Link to={item.url || "#"}>
                                                            <span className="maintenance__social-item-icon">
                                                                <Icon />
                                                            </span>
                                                        </Link>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>

                            </div>

                        </div>

                    </div>

                </Container>

                <div className="maintenance__container">
                    <Swiper className="maintenance__slider"
                        modules={[Autoplay]}
                    // autoplay={{
                    //     delay: 4000,
                    //     disableOnInteraction: false,
                    // }}
                    >
                        {maintainceItem.map((item) => (
                            <SwiperSlide className="maintenance__slider-panel" key={item.id}>
                                <div className="maintance__backdrop">
                                    <img className="maintance__backdrop-img" src={item.img} alt="" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default Maintenance;