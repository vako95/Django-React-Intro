
import { ModalContainer, PlayerButton, VideoPlayer } from "@components/ui";
import { IconMirror } from "@components/animation";
import { useState, useEffect } from "react";
import expoCover from "./assets/icon/exp-icon.png";
import { FaPlay } from "react-icons/fa";

import "./Hero.css";


const Hero = ({ service }) => {
    const [openPlayer, setOpenPlayer] = useState(false);

    const handlePlayer = () => {
        setOpenPlayer((prev) => !prev);
    };
    useEffect(() => {
        if (openPlayer) document.body.classList.add("overflow-hidden");
        else document.body.classList.remove("overflow-hidden");
        return () => document.body.classList.remove("overflow-hidden");
    }, [openPlayer]);

    return (
        <div className="section__hero">
            <div className="section__hero-backdrop" style={{ backgroundImage: `url(${service.cover})` }} >
                <div className="section__hero-video" onClick={handlePlayer}>
                    <PlayerButton size="md">
                        <span className="section__hero-video-icon">
                            <FaPlay />
                        </span>
                    </PlayerButton>

                    <ModalContainer isOpen={openPlayer}>
                        <VideoPlayer size="lg" videoId="tJSjwiJbOkY?si=GllFDI1M7k6LltcL">
                        </VideoPlayer>
                    </ModalContainer>
                </div>

                <IconMirror >
                    <div className="section__hero-heading">
                        <div className="section__hero-heading-cover">
                            <img className="anime-mirror section__hero-heading-icon" src={expoCover} alt="" />
                        </div>
                        <div className="section__hero-heading-wrapper">
                            <h5 className="section__hero-heading-title">Luxury Room</h5>
                            <span className="section__hero-heading-content">
                                Donec in quis the asd {"\n"}
                                pellentesque velit Donec id velit {"\n"}
                                arcu
                            </span>
                        </div>
                    </div>
                </IconMirror>

                <div className="section__hero-card">
                    <img src={service.thumbnail} className="section__hero-card-cover" alt="" />
                </div>
            </div>
        </div >
    )
}

export default Hero;