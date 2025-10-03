import { Link } from "react-router-dom";
import "./Contact.css";
import { CalendarFrame, Container, DecoratedHeading } from "@components/ui";
import { PiPhoneCallThin } from 'react-icons/pi';
import { PiEnvelopeThin } from 'react-icons/pi';
import { PiMapPinThin } from 'react-icons/pi';
const Contact = () => {
    return (

        <section className="contact">
            <Container>
                <div className="contact__wrapper">
                    <div className="contact__columns">
                        <div className="contact__column contact__column--left">
                            <div className="contact__column-content">
                                <CalendarFrame />
                            </div>
                        </div>

                        <div className="contact__column contact__column--right">
                            <div className="contact__column-content">
                                <div className="contact__heading">
                                    <h1 className="contact__heading-title">
                                        NEED ANY HELP?
                                    </h1>
                                    <h2 className="contact__heading-subtitle">
                                        Get in touch with us
                                    </h2>
                                    <span className="contact__heading-desc">
                                        Lorem ipsum is simply free text available dolor sit amet
                                        consectetur notted adipisicing elit sed do eiusmod tempor
                                        incididunt simply dolore magna.ipsum is simply free
                                    </span>
                                </div>

                                <ul className="contact__list">
                                    <li className="contact__item">
                                        <div className="contact__item-wrapper">
                                            <PiPhoneCallThin className="contact__item-wrapper-icon" />
                                        </div>
                                        <div className="contact__item-content">
                                            <h1 className="contact__item-heading-title">
                                                Have any question?
                                            </h1>
                                            <Link className="contact__item-link">
                                                +92 (020)-9850
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="contact__item">
                                        <div className="contact__item-wrapper">
                                            <PiEnvelopeThin className="contact__item-wrapper-icon" />
                                        </div>
                                        <div className="contact__item-content">
                                            <h1 className="contact__item-heading-title">
                                                Write email
                                            </h1>
                                            <Link className="contact__item-link">
                                                needhelp@company.com
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="contact__item">
                                        <div className="contact__item-wrapper">
                                            <PiMapPinThin className="contact__item-wrapper-icon" />
                                        </div>
                                        <div className="contact__item-content">
                                            <h1 className="contact__item-heading-title">
                                                Write email
                                            </h1>
                                            <Link className="contact__item-link">
                                                +92 (020)-9850
                                            </Link>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="content-map">

            </div>
        </section>

    );
};

export default Contact;
