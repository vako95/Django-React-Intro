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
    { id: 3, src: "https://wallpapers.com/images/high/restaurant-in-grand-resort-lagonissi-greece-znonmfdj26fii6ol.webp" },
    { id: 4, src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 5, src: "https://wallpapers.com/images/high/restaurant-in-grand-resort-lagonissi-greece-znonmfdj26fii6ol.webp" },
    { id: 6, src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

];
const News = () => {

    return (

        <div className="news">
            <Container>
                <div className="news__list">
                    {images.map(image => (
                        <div className="news__item">
                            <div className="news__item-container">
                                <div className="news__item-meta">
                                    <time className="news__item-meta-calendar" dateTime="2025-01-31">
                                        <span className="news__item-meta-calendar-month">
                                            Jan
                                        </span>
                                        <span className="news__item-meta-calendar-date">
                                            31
                                        </span>
                                    </time>
                                    <div className="news__item-meta-container">
                                        <div className="news__item-meta-content">
                                            <ul className="news__item-meta-list">
                                                <li className="news__item-meta-item">
                                                    <div className="news__item-meta-item-person">
                                                        <span className="news__item-meta-item-person-icon">
                                                            <CgProfile />
                                                        </span>
                                                        <span className="news__item-meta-item-person-prefix">
                                                            By
                                                        </span>
                                                        <Link className="news__item-meta-item-person-link">
                                                            Vako
                                                        </Link>
                                                    </div>
                                                    <div className="news__item-meta-item-categories">
                                                        <span className="news__item-meta-item-categories-icon">
                                                            <CiFolderOn />
                                                        </span>
                                                        <Link className="news__item-meta-item-categories-link">
                                                            Digital Nomad
                                                        </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="news__item-meta-details">
                                                <div className="news__item-meta-details-heading">
                                                    <Link className="news__item-meta-details-heading-link">
                                                        Retore Lighting Design in The Hotel
                                                    </Link>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="news__item-meta-details-link">
                                            <HoverLink
                                                className="news__item-meta-details-link-action"
                                                variant="gold"
                                            >
                                                <h4 className="news__item-meta-details-link-title">
                                                    Read More
                                                </h4>
                                                <span className="news__item-meta-details-link-icon">
                                                    <FaArrowAltCircleRight />
                                                </span>
                                            </HoverLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="news__item-backdrop-wrapper">

                                <div className="news__item-backdrop">
                                    <img className="news__item-backdrop-img" src={image.src} alt="" />
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </Container>
        </div>
    )
}

export default News;