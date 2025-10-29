import { Container } from "@components/ui";
import { Link } from "react-router-dom";
import "./Topbar.css";

const Topbar = () => {

    return (
        <Container>
            <nav className="topbar">
                <div className="topbar__content">
                    <ul className="topbar__supports">
                        <li className="topbar__support">
                            <Link className="topbar__support-link">
                                <i className="topbar__support-link-icon  ri-mail-fill"></i>
                                <span className="topbar__support-link-title">
                                    needhelp@company.com
                                </span>
                            </Link>
                        </li>
                        <li className="topbar__support">
                            <Link className="topbar__support-link">
                                <i className="topbar__support-link-icon ri-map-pin-2-line"></i>
                                <span className="topbar__support-link-title">
                                    6391 Elgin St. Celina, 10299
                                </span>
                            </Link>
                        </li>
                        <li className="topbar__support">
                            <i className="topbar__support-link-icon ri-time-line"></i>
                            <span className="topbar__support-link-title">
                                Sunday - Friday: 9.am - 8pm
                            </span>
                        </li>
                    </ul>

                    <ul className="topbar__socials">
                        <li className="topbar__social">
                            <Link className="topbar__social-link">
                                <i className="topbar__social-link-icon ri-twitter-x-fill"></i>
                            </Link>
                        </li>
                        <li className="topbar__social">
                            <Link className="topbar__social-link">
                                <i className="topbar__social-link-icon ri-youtube-fill"></i>
                            </Link>
                        </li>
                        <li className="topbar__social">
                            <Link className="topbar__social-link">
                                <i className="topbar__social-link-icon ri-linkedin-fill"></i>
                            </Link>
                        </li>
                        <li className="topbar__social">
                            <Link className="topbar__social-link">
                                <i className="topbar__social-link-icon ri-instagram-line"></i>
                            </Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </Container>
    )
}

export default Topbar;