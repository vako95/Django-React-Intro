import { FadeInLeft, FadeInRight, IconMirror, } from "@components/animation";
import { HoverLink, DecoratedHeading } from "@components/ui"
import beforeIcon from "./assets/icon/before.png";
import lightIcon from "./assets/icon/chandelier.png";
import poolIcon from "./assets/icon/pool.png";
import phoneCallIcon from "./assets/icon/phone-call.png";
import "./Feature.css";


const Feature = () => {
    return (
        <div className="section__feature">
            <div className="section__feature-heading">
                <DecoratedHeading
                    position="start"
                    showLeftIcon={false}
                    showRightIcon={true}
                    title="Hoexr Luxury Hotel"
                    subtitle="Most Safe & Rated Hotel in London."
                />

                <FadeInRight>
                    <div className="section__feature-heading-badge">
                        <img className="section__feature-badge-icon" src={beforeIcon} alt="" />
                    </div>
                </FadeInRight>
            </div>
            <div className="section__feature-info">

                <FadeInLeft>
                    <span className="section__feature-info-summary">
                        Lorem ipsum dolor sit amet consectetur
                        adipiscing elit incididunt ut labore et
                        dolore magna aliqua.
                    </span>
                </FadeInLeft>

                <FadeInRight>
                    <p className="section__feature-info-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua.
                        Quis ipsum suspendisse ultrices gravida. Risus commodo maecenas accumsan
                    </p>
                </FadeInRight>
            </div>

            <div className="section__feature-points">
                <IconMirror>
                    <div className="section__feature-points-item">
                        <div className="section__feature-points-wrapper">
                            <img src={lightIcon} className="anime-mirror section__feature-points-img" alt="pool" />
                        </div>
                        <h5 className="section__feature-points-title">
                            The Best
                            Lighting
                        </h5>
                    </div>
                </IconMirror>
                <IconMirror >
                    <div className="section__feature-points-item">
                        <div className="section__feature-points-wrapper">
                            <img src={poolIcon} className="anime-mirror section__feature-points-img" alt="pool" />
                        </div>
                        <h5 className="section__feature-points-title">
                            The Best
                            Lighting
                        </h5>
                    </div>
                </IconMirror>
                <div className="section__feature-points-item">
                    <HoverLink
                        size="md"
                        border={true}
                        color="white"
                        variant="gold"
                    >
                        Discover More
                    </HoverLink>
                </div>
                <IconMirror >
                    <div className="section__feature-points-item">
                        <div className="section__feature-points-wrapper">
                            <img src={phoneCallIcon} className="anime-mirror section__feature-points-img" alt="pool" />
                        </div>
                        <h5 className="section__feature-points-title">
                            Booking Now
                            123 456 7890
                        </h5>
                    </div>
                </IconMirror >

            </div>

        </div>
    )
}

export default Feature;