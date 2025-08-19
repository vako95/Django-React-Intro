import BackInDown from "../../../../../../animation/BackInDown/BackInDown";
import BackInUp from "../../../../../../animation/BackInUp/BackInUp";
import FadeInLeft from "../../../../../../animation/FadeInLeft/FadeInLeft";
import FadeInRight from "../../../../../../animation/FadeInRight/FadeInRight";
import HoverLink from "../../../../../../ui/HoverLink/HoverLink";
import "./SliderPromo.css";

import SliderLogo from "./assets/images/logo/logo.png"

const SliderPromo = ({ currentSlide }) => {

    return (
        <div className="slider__promo">
            <BackInDown trigger={currentSlide}>
                <div className="slider__promo-logo">
                    <img className="slider__promo-logo-img" src={SliderLogo} alt="slider__logo" />
                </div>
            </BackInDown>

            <div className="slider__promo-header">
                <FadeInLeft trigger={currentSlide}>
                    <h1 className="slider__promo-title">
                        Unique Place and Luxury Hotel
                    </h1>
                </FadeInLeft>


                <FadeInRight trigger={currentSlide}>
                    <span className="slider__promo-content">
                        Life Enjoy With The Great Moments
                    </span>
                </FadeInRight>
            </div>

            <div className="slider__promo-link">
                <BackInUp trigger={currentSlide}>
                    <HoverLink
                        size="large"
                        color="transparent"
                    >
                        Rooms & Suites
                    </HoverLink>
                </BackInUp>

            </div>

        </div>
    )
}
export default SliderPromo;