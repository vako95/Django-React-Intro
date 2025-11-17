import React, { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';
import BackdropContainer from '../../../components/ui/BackdropContainer/BackdropContainer';
import { Container } from "@components/ui"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { maintainceItem } from "../../../constants/sections"
import { Link } from "react-router-dom"
import maintenceLogo from "./assets/img/logo-wide-white.png";
import "./Maintenance.css";
import { socialLinks } from '../../../constants/socials';
import { ICON_MAP } from "@constants/map.js";


const images = [
    { id: 1, src: "https://media.cntraveler.com/photos/5a68c6949e34830eca77d87b/16:9/w_1920,c_limit/Beekman_2018_Beekman_BarRoom.jpg" },
    { id: 2, src: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTu-GSY_bXjggu92Go8I0Od4bEoIE-RnSuaCRmN5xcL4lfSDQI169Wyg5hK0VegSLUJjpqlG47veDZ33C0" },
    { id: 3, src: "https://media.cntraveler.com/photos/5a68c6949e34830eca77d87b/16:9/w_1920,c_limit/Beekman_2018_Beekman_BarRoom.jpg" },

];
const Maintenance = ({ expiryTimestamp }) => {
    const defaultTime = React.useMemo(() => {
        const time = new Date();
        time.setDate(time.getDate() + 2);
        return time;
    }, []);

    const finalTimestamp = expiryTimestamp ? new Date(expiryTimestamp) : defaultTime;

    const {
        totalSeconds,
        milliseconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
    } = useTimer({
        expiryTimestamp: finalTimestamp,
        onExpire: () => console.warn("Timer expired"),
        // interval: 20,
    });

    const [imgIdx, setImgIdx] = useState(0);


    useEffect(() => {
        let lastTime = performance.now();
        const interval = 1000
        let frameId = null
        const step = (timeStamp) => {
            const delta = timeStamp - lastTime
            if (delta >= interval) {
                setImgIdx((prev) => prev >= images.length - 1 ? 0 : prev + 1)
                lastTime = timeStamp;
            }

            frameId = requestAnimationFrame(step);
        }
        frameId = requestAnimationFrame(step)
        return () => cancelAnimationFrame(frameId);
    }, [])

    return (
        <>
            <div className="maintenance">

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
                                <div className="maintenance__about-social">
                                    <div className="maintenance__about-social-heading">
                                        <span className="maintenance__about-social-heading-title">
                                            Connect With Us
                                        </span>
                                    </div>
                                    <ul className="maintenance__about-social-list">
                                        {socialLinks.map((item) => {
                                            const Icon = ICON_MAP[item.icon] ?? ICON_MAP.default;
                                            return (
                                                <li className="maintenance__about-social-item" key={item.id}>
                                                    <Link to={item.url || "#"}>
                                                        <h2 className="maintenance__about-social-item-icon">
                                                            <Icon />
                                                        </h2>
                                                    </Link>
                                                </li>
                                            );
                                        })
                                        }
                                    </ul>
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
                                    <div className="maintenance__timer-unit">
                                        <span className="maintenance__timer-unit-value">
                                            {milliseconds}
                                        </span>

                                        <h2 className="maintenance__timer-unit-title">
                                            Milliseconds
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

                <div className="maintenance__container">
                    <div className="maintenance__slider">
                        {/* {images.map((item) => (
                            <div className="maintenance__slider-backdrop">
                                <img className="maintenance__slider-backdrop-img" key={item.id} src={item.src} alt="" />
                            </div>
                        ))} */}

                        <div className="maintenance__slider-backdrop">
                            <img
                                className="maintenance__slider-backdrop-img"
                                src={images[imgIdx]?.src}
                                alt="" />
                        </div>
                    </div>

                    {/* <Swiper className="maintenance__slider"
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                    >
                        {maintainceItem.map((item) => (
                            <SwiperSlide className="maintenance__slider-panel" key={item.id}>
                                <div className="maintance__backdrop">
                                    <img className="maintance__backdrop-img" src={item.img} alt="" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper> */}
                </div>
            </div>
        </>
    );
}

export default Maintenance;