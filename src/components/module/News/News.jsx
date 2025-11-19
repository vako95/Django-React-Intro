import { Link } from "react-router-dom";
import { Container, HoverLink } from "@components/ui";
import { AnimationShine } from "@components/animation"
import { CgProfile } from "react-icons/cg";
import { CiFolderOn } from "react-icons/ci";
import { FaArrowAltCircleRight } from "react-icons/fa";

import "./News.css";
const images = [
    { id: 1, src: "https://wallpapers.com/images/high/restaurant-in-grand-resort-lagonissi-greece-znonmfdj26fii6ol.webp" },
    { id: 2, src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, src: "https://media.cntraveler.com/photos/5a68c6949e34830eca77d87b/16:9/w_1920,c_limit/Beekman_2018_Beekman_BarRoom.jpg" },
];
const News = () => {

    return (
        <Container>


            <div className="news">
                <div className="news__container">
                    {images.map(image => (
                        <>

                            <div className="news__content">
                                <AnimationShine variant="vertical">
                                    <div className="news__content-backdrop">
                                        <img className="news__content-backdrop-img" src={image.src} alt="" />
                                    </div>
                                </AnimationShine>
                                <div className="news__meta">
                                    <time className="news__meta-calendar" dateTime="2025-01-31">
                                        <span className="news__meta-calendar-month">
                                            Jan
                                        </span>
                                        <span className="news__meta-calendar-date">
                                            31
                                        </span>
                                    </time>
                                    <div className="news__meta-content">
                                        <ul className="news__meta-list">
                                            <li className="news__meta-item">
                                                <div className="news__meta-item-person">
                                                    <span className="news__meta-item-person-icon">
                                                        <CgProfile />
                                                    </span>
                                                    <span className="news__meta-item-person-prefix">
                                                        By
                                                    </span>
                                                    <Link className="news__meta-item-person-link">
                                                        Vako
                                                    </Link>

                                                </div>
                                                <div className="news__meta-item-categories">
                                                    <span className="news__meta-item-categories-icon">
                                                        <CiFolderOn />
                                                    </span>
                                                    <Link className="news__meta-item-categories-link">
                                                        Digital Nomad
                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="news__meta-details">
                                            <div className="news__meta-details-heading">
                                                <Link className="news__meta-details-heading-link">
                                                    New chef and spring special menu
                                                </Link>
                                            </div>
                                            <div className="news__meta-details-link">
                                                <HoverLink
                                                    className="news__meta-details-link-action"
                                                    // size="sm"
                                                    variant="gold"

                                                >
                                                    <h4 className="news__meta-details-link-title">
                                                        Read More
                                                    </h4>
                                                    <span className="news__meta-details-link-icon">
                                                        <FaArrowAltCircleRight />
                                                    </span>
                                                </HoverLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </>

                    ))}

                </div>
            </div>
        </Container>
    )
}

export default News;