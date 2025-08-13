
import sliderLogo from "../assets/img/logo.png";
import "./SliderPromo.css";

import HoverLink from "../../../../../../ui/HoverLink/HoverLink";



const SliderPromo = ({
    active = false,

}) => {

    const animClass = (animName) =>
        !!active ? `wow animate__animated animate__${animName}` : "";

    return (
        <section className={`slide__promo`}>
            <div className="slide__promo-container">
                <figure className="slide__promo-logo">
                    <div className="slide__promo-logo-container-padding">
                        <div className={`slider__promo-logo-container ${animClass("backInDown")}`}>
                            <img className="slide__promo-logo-img" src={sliderLogo} alt="sliderLogo" />
                        </div>
                    </div>

                </figure>
                <header className="slide__promo-content">
                    <h2 className={`slide__promo-content-title ${animClass("backInLeft")}`}>
                        Добро пожаловать в наш отель
                    </h2>
                    <p className={`slide-promo__text  ${animClass("backInRight")}`}>
                        Life Enjoy With The Great Moments
                    </p>
                </header>
                <nav className={`slide__promo-button ${animClass("backInUp")}`}>
                    <HoverLink>
                        Rooms & Suites
                    </HoverLink>

                </nav>
            </div>
        </section >
    );
};

export default SliderPromo;
