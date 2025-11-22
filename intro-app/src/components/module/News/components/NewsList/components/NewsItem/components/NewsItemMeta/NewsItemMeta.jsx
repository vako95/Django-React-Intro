import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { CiFolderOn } from "react-icons/ci";
import { FaArrowAltCircleRight } from "react-icons/fa";
import "./NewsItemMeta.css";
import { HoverLink } from "@components/ui";

const NewsItemMeta = () => {

    return (
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
                <div className="news__item-meta-link">
                    <HoverLink
                        className="news__item-meta-link-action"
                        variant="gold"
                    >
                        <h4 className="news__item-meta-link-title">
                            Read More
                        </h4>
                        <span className="news__item-meta-link-icon">
                            <FaArrowAltCircleRight />
                        </span>
                    </HoverLink>
                </div>
            </div>
        </div>
    )
}
export default NewsItemMeta;