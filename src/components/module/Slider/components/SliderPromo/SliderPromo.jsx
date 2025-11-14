import { BackInUp, FadeInRight, FadeInLeft, BackInDown } from "@components/animation";
import { DecoratedHeading, HoverLink } from "@components/ui";
import SliderLogo from "./assets/images/logo/logo.png"

import "./SliderPromo.css";
const SliderPromo = ({ currentSlide }) => {

    return (
        <div className="slider__promo" tabIndex={4}>
            <BackInDown trigger={currentSlide}>
                <div className="slider__promo-logo">
                    <img className="slider__promo-logo-img" src={SliderLogo} alt="slider__logo" />
                </div>
            </BackInDown>
            <div className="slider__promo-header">
                <FadeInLeft trigger={currentSlide}>
                    <DecoratedHeading
                        className="slider__promo-title"
                        showLeftIcon={false}
                        showRightIcon={false}
                        title="Unique Place and Luxury Hotel"
                    />
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
                        size="md"
                        variant="silver"
                        border={true}
                        color="white"

                    >
                        Rooms & Suites
                    </HoverLink>
                </BackInUp>
            </div>
        </div>
    )
}
export default SliderPromo;