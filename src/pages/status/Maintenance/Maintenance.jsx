import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useTimer } from 'react-timer-hook';
import { socialLinks } from '../../../constants/socials';
import { motion, AnimatePresence } from "framer-motion";
import "./Maintenance.css";
import maintenceLogo from "./assets/img/logo-wide-white.png";
import { ICON_MAP } from "@constants/map.js";
import { Container } from "@components/ui";
const images = [
    { id: 1, src: "https://wallpapers.com/images/high/restaurant-in-grand-resort-lagonissi-greece-znonmfdj26fii6ol.webp" },
    { id: 2, src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
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
        seconds,
        minutes,
        hours,
        days,
        isRunning,
    } = useTimer({
        expiryTimestamp: finalTimestamp,
        onExpire: () => console.warn("Timer expired"),
    });

    const [imgIdx, setImgIdx] = useState(0);



    useEffect(() => {
        let lastTime = performance.now();
        const interval = 5000
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
                <div className="maintenance__slider">
                    <div className="maintenance__slider-backdrop"
                        style={{
                            backgroundImage: `url(${images[imgIdx].src})`
                        }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={imgIdx}
                                src={images[imgIdx].src}
                                className="maintenance__slider-backdrop-img"
                                initial={{ opacity: 0, scale: 1.6 }}
                                animate={{ opacity: 1, scale: 1.4 }}
                                exit={{ opacity: 1, scale: 1 }}
                                transition={{
                                    opacity: { duration: 1, ease: 'easeInOut' },
                                    scale: { duration: 6, ease: 'easeInOut' },
                                }}
                            />
                        </AnimatePresence>


                    </div>
                </div>

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

                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Maintenance;