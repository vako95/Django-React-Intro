import "./Services.css";
import { services } from "../../../constants/sections";
import { Container } from "@components/ui";
import VideoPlayer from "../../ui/HoverPlayer/VideoPlayer";
import { useState } from "react";
import PlayerButton from "../../ui/PlayerButton/PlayerButton";
import HoverLink from "../../ui/HoverLink/HoverLink.jsx";

import ModalContainer from "../../ui/ModalContainer/ModalContainer";
import IconMirror from "../../animation/IconMirror.jsx/IconMirror";

import FadeInRight from "../../animation/FadeInRight/FadeInRight";
import FadeInWordRight from "../../FadeInWordRight/FadeInWordRight";
import FadeInLeft from "../../animation/FadeInLeft/FadeInLeft";

import expoCover from "./assets/icon/exp-icon.png"
import beforeIcon from "./assets/icon/before.png";
import lightIcon from "./assets/icon/chandelier.png";
import phoneCallIcon from "./assets/icon/phone-call.png";
import poolIcon from "./assets/icon/pool.png";

const Services = () => {
    const [openPlayer, setOpenPlayer] = useState(false);

    const handlePlayer = () => {
        setOpenPlayer((play) => !play);
    }

    return (

        <section className="services">
            <Container>
                <div className="services__container">
                    <div className="services__section">
                        <div className="hero">
                            <div className="hero__backdrop" style={{ backgroundImage: `url(${services[0].cover})` }} >
                                <div className="hero__video" onClick={handlePlayer}>
                                    <PlayerButton size="md" />

                                    {openPlayer && (
                                        <ModalContainer>
                                            <VideoPlayer size="lg" videoId="tJSjwiJbOkY?si=GllFDI1M7k6LltcL">
                                            </VideoPlayer>
                                        </ModalContainer>
                                    )}
                                </div>

                                <IconMirror >
                                    <div className="hero__heading">
                                        <div className="hero__heading-cover">
                                            <img className="anime-mirror hero__heading-icon" src={expoCover} alt="" />
                                        </div>
                                        <div className="hero__heading-wrapper">
                                            <h5 className="hero__heading-title">Luxury Room</h5>
                                            <span className="hero__heading-content">
                                                Donec in quis the asd {"\n"}
                                                pellentesque velit Donec id velit {"\n"}
                                                arcu
                                            </span>
                                        </div>
                                    </div>
                                </IconMirror>
                                <div className="hero__card">
                                    <img src={services[0].thumbnail} className="hero__card-cover" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services__section">
                        <div className="feature">
                            <div className="feature__heading">
                                <FadeInLeft>
                                    <h5 className="feature__heading-title">
                                        Hoexr Luxury Hotel
                                    </h5>
                                </FadeInLeft>

                                <FadeInRight>
                                    <div className="feature__heading-badge">
                                        <img className="feature__badge-icon" src={beforeIcon} alt="" />
                                    </div>
                                </FadeInRight>
                            </div>
                            <div className="feature__info">
                                <div className="feature__info-words">
                                    {"Most Safe & Rated Hotel in London.".split(" ").map((letter, i) => (
                                        <h4 className="feature__info-word" key={i}>
                                            <FadeInWordRight custom={i}>
                                                {letter}
                                            </FadeInWordRight>

                                        </h4>
                                    ))}
                                </div>
                                <FadeInLeft>
                                    <span className="feature__info-summary">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipiscing elit incididunt ut labore et
                                        dolore magna aliqua.
                                    </span>
                                </FadeInLeft>


                                <FadeInRight>
                                    <p className="feature__info-desc">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua.
                                        Quis ipsum suspendisse ultrices gravida. Risus commodo maecenas accumsan
                                    </p>
                                </FadeInRight>
                            </div>

                            <div className="future__points">
                                <IconMirror >
                                    <div className="future__points-item">
                                        <div className="future__points-wrapper">
                                            <img src={lightIcon} className="anime-mirror future__points-img" alt="pool" />
                                        </div>
                                        <h5 className="future__points-title">
                                            The Best
                                            Lighting

                                        </h5>
                                    </div>
                                </IconMirror>
                                <IconMirror >
                                    <div className="future__points-item">
                                        <div className="future__points-wrapper">
                                            <img src={poolIcon} className="anime-mirror future__points-img" alt="pool" />
                                        </div>
                                        <h5 className="future__points-title">
                                            The Best
                                            Lighting

                                        </h5>
                                    </div>
                                </IconMirror>
                                <div className="future__points-item">
                                    <HoverLink bgColor="rgba(34, 34, 34)" size="lx">
                                        Discover More
                                    </HoverLink>
                                </div>
                                <IconMirror >
                                    <div className="future__points-item">
                                        <div className="future__points-wrapper">
                                            <img src={phoneCallIcon} className="anime-mirror future__points-img" alt="pool" />
                                        </div>
                                        <h5 className="future__points-title">
                                            Booking Now
                                            123 456 7890
                                        </h5>
                                    </div>
                                </IconMirror >

                            </div>

                        </div>
                    </div>
                </div>

            </Container>
        </section >

    )
}

export default Services;