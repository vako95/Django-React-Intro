
import { ModalContainer, PlayerButton, VideoPlayer } from "@components/ui";

import { IconMirror } from "@components/animation";

import expoCover from "./assets/icon/exp-icon.png";
import "./Hero.css";


const Hero = ({ service, openPlayer, onTogglePlayer }) => {

    return (
        <div className="hero">
            <div className="hero__backdrop" style={{ backgroundImage: `url(${service.cover})` }} >
                <div className="hero__video" onClick={onTogglePlayer}>
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
                    <img src={service.thumbnail} className="hero__card-cover" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero;