import HoverLink from "../../../../../../ui/HoverLink/HoverLink";
import "./SliderPromo.css";

import SliderLogo from "./assets/images/logo/logo.png"

const SliderPromo = () => {

    return (
        <div className="slider__promo">
            <div className="slider__promo-logo">
                <img className="slider__promo-logo-img" src={SliderLogo} alt="slider__logo" />
            </div>

            <div className="slider__promo-header">
                <h1 className="slider__promo-title">
                    Unique Place and Luxury Hotel
                </h1>
                <span className="slider__promo-content">
                    Life Enjoy With The Great Moments
                </span>
            </div>

            <div className="slider__promo-link">
                <HoverLink
                    size="large"
                    color="transparent"
                >
                    Rooms & Suites
                </HoverLink>
            </div>

        </div>
    )
}
export default SliderPromo;