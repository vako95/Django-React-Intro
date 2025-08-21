import { Link } from "react-router-dom";
import "./About.css";
import LogoBrand from "./assets/img/logo/logo-wide-white.png";

const About = () => {

    return (
        <div className="footer__about">
            <div className="footer__about-container">
                <Link className="footer__about-link">
                    <img src={LogoBrand} alt="logo__brand" className="footer__about-brand" />
                </Link>
            </div>
            <div className="footer__about-content">
                <h6>
                    Lorem Ipsum is simply dummy text of printing and typesetting industry.
                    Lo Ipsum has been the industry' dummy text.
                </h6>
            </div>
            <div className="footer__about-social">
                <ul className="footer__about-social-links">
                    <li className="footer__about-social-item">
                        <Link className="footer__about-social-link">
                            <i className=""></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About;