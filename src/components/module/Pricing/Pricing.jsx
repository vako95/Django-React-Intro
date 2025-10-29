import { Container, HoverButton, StripedOverlay } from "@components/ui";
import { FaCheck } from "react-icons/fa";

import "./Pricing.css";


const Pricing = () => {

    return (
        <Container>
            <div className="pricing">
                <ul className="pricing__list">
                    <li className="pricing__item">
                        <div className="pricing__item-content">
                            <div className="pricing__item-heading">
                                <span className="pricing__item-heading-price">
                                    200$
                                    <span className="pricing__item-heading-period">
                                        Night
                                    </span>
                                </span>
                                <h1 className="pricing__item-heading-title">
                                    Single Room
                                </h1>
                            </div>

                            <ul className="pricing__item-feautures">
                                <li className="pricing__item-feauture">
                                    <FaCheck className="pricing__item-feauture-icon" />
                                    <span className="pricing__item-feauture-title">Pick & Drop Service </span>
                                </li>

                                <li className="pricing__item-feauture">
                                    <FaCheck className="pricing__item-feauture-icon" />
                                    <span className="pricing__item-feauture-title">Pick & Drop Service </span>
                                </li>
                                <li className="pricing__item-feauture">
                                    <FaCheck className="pricing__item-feauture-icon" />
                                    <span className="pricing__item-feauture-title">Pick & Drop Service </span>
                                </li>
                                <li className="pricing__item-feauture">
                                    <FaCheck className="pricing__item-feauture-icon" />
                                    <span className="pricing__item-feauture-title">Pick & Drop Service </span>
                                </li>
                                <HoverButton className="btr">Book-Now</HoverButton>
                            </ul>
                        </div>
                        <div className="pricing__item-media">
                            <div className="pricing__item-media-wrapper">
                                <StripedOverlay>
                                    <img className="pricing__item-media-img" src="https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/pricing2-1.jpeg" alt="" />
                                </StripedOverlay>
                            </div>
                        </div>
                    </li>
                    <li className="pricing__item">
                        <div className="pricing__item-content">
                            <div className="pricing__item-heading">
                                <span className="pricing__item-heading-price">
                                    200$
                                    <span className="pricing__item-heading-period">
                                        Night
                                    </span>
                                </span>
                                <h1 className="pricing__item-heading-title">
                                    Single Room
                                </h1>
                            </div>

                            <ul className="pricing__item-feautures">
                                <li className="pricing__item-feauture">
                                    <FaCheck className="pricing__item-feauture-icon" />
                                    <span className="pricing__item-feauture-title">Pick & Drop Service </span>
                                </li>

                                <li className="pricing__item-feauture">
                                    <FaCheck className="pricing__item-feauture-icon" />
                                    <span className="pricing__item-feauture-title">Pick & Drop Service </span>
                                </li>
                                <li className="pricing__item-feauture">
                                    <FaCheck className="pricing__item-feauture-icon" />
                                    <span className="pricing__item-feauture-title">Pick & Drop Service </span>
                                </li>
                                <li className="pricing__item-feauture">
                                    <FaCheck className="pricing__item-feauture-icon" />
                                    <span className="pricing__item-feauture-title">Pick & Drop Service </span>
                                </li>
                                <HoverButton className="btr">Book-Now</HoverButton>
                            </ul>
                        </div>
                        <div className="pricing__item-media">
                            <div className="pricing__item-media-wrapper">
                                <StripedOverlay>
                                    <img className="pricing__item-media-img" src="https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/pricing2-1.jpeg" alt="" />
                                </StripedOverlay>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </Container>
    )
}

export default Pricing;