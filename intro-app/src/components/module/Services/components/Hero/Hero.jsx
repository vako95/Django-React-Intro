

import "./Hero.css";

import React, { useState } from "react";
import PlayerButton from "../../ui/PlayerButton/PlayerButton";
import ModalContainer from "../../ui/ModalContainer/ModalContainer";
import VideoPlayer from "../../ui/HoverPlayer/VideoPlayer";
import IconMirror from "../../animation/IconMirror.jsx/IconMirror";
import expoCover from "./assets/icon/exp-icon.png";

const Hero = ({ cover, thumbnail }) => {
    const [openPlayer, setOpenPlayer] = useState(false);

    const handlePlayer = () => {
        setOpenPlayer((play) => !play);
    };

    return (
        <div className="hero">
            <div className="hero__backdrop" style={{ backgroundImage: `url(${cover})` }}>
                <div className="hero__video" onClick={handlePlayer}>
                    <PlayerButton size="md" />
                    {openPlayer && (
                        <ModalContainer>
                            <VideoPlayer size="lg" videoId="tJSjwiJbOkY?si=GllFDI1M7k6LltcL" />
                        </ModalContainer>
                    )}
                </div>

                <IconMirror>
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
                    <img src={thumbnail} className="hero__card-cover" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
