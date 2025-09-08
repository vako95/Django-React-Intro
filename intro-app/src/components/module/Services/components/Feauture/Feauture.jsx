
import { FadeInLeft, FadeInRight, FadeInWordRight, IconMirror, } from "@components/animation";
import { HoverLink } from "@components/ui"
import beforeIcon from "./assets/icon/before.png";
import lightIcon from "./assets/icon/chandelier.png";
import poolIcon from "./assets/icon/pool.png";
import phoneCallIcon from "./assets/icon/phone-call.png";

import "./Feauture.css";


const Feauture = () => {

    return (
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
                    {"Most Safe & Rated Hotel in London.".split(" ").map((letter, idx) => (
                        <h4 key={idx} className="feature__info-word" >
                            <FadeInWordRight custom={idx}>
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

            <div className="feature__points">
                <IconMirror >
                    <div className="feature__points-item">
                        <div className="feature__points-wrapper">
                            <img src={lightIcon} className="anime-mirror feature__points-img" alt="pool" />
                        </div>
                        <h5 className="feature__points-title">
                            The Best
                            Lighting

                        </h5>
                    </div>
                </IconMirror>
                <IconMirror >
                    <div className="feature__points-item">
                        <div className="feature__points-wrapper">
                            <img src={poolIcon} className="anime-mirror feature__points-img" alt="pool" />
                        </div>
                        <h5 className="feature__points-title">
                            The Best
                            Lighting

                        </h5>
                    </div>
                </IconMirror>
                <div className="feature__points-item">
                    <HoverLink bgColor="rgba(34, 34, 34)" size="lx">
                        Discover More
                    </HoverLink>
                </div>
                <IconMirror >
                    <div className="feature__points-item">
                        <div className="feature__points-wrapper">
                            <img src={phoneCallIcon} className="anime-mirror feature__points-img" alt="pool" />
                        </div>
                        <h5 className="feature__points-title">
                            Booking Now
                            123 456 7890
                        </h5>
                    </div>
                </IconMirror >

            </div>

        </div>
    )
}

export default Feauture;