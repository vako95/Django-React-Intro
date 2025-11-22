import { Link } from "react-router-dom"
import "./Card.css";

const Card = ({ item }) => {

    return (
        <li key={item.id} className="news-feed__card">
            <div className="news-feed__card-wrapper">
                <div className="news-feed__thumbs">
                    {item.images.map((image, idx) => (
                        <div key={idx} className="news-feed__thumb">
                            <img
                                src={image.src}
                                alt={image.name}
                                className="news-feed__img"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="news-feed__card-content">
                <div className="news-feed__card-content-item">
                    <div className="news-feed__card-date">
                        <Link className="news-feed__card-date-box">
                            <div className="news-feed__card-day">
                                <time className="news-feed__time-day" dateTime={item.day}>
                                    {item.day}
                                </time>
                            </div>
                            <div className="news-feed__card-month-year">
                                <time className="news-feed__time-month" dateTime={item.month}>
                                    {item.month}
                                </time>
                                <time className="news-feed__time-year" dateTime={item.year}>
                                    {item.year}
                                </time>
                            </div>
                        </Link>
                    </div>
                    <ul className="news-feed__card-meta-list">
                        <li className="news-feed__card-meta-item">
                            <i className="news-feed__card-meta-icon  ri-account-circle-line"></i>
                            <span className="news-feed__card-meta-prefix">By</span>
                            <Link className="news-feed__card-meta-link">{item.author}</Link>
                        </li>
                        <li className="news-feed__card-meta-item">
                            <i className="news-feed__card-meta-icon  ri-folder-line"></i>
                            <Link className="news-feed__card-meta-link">{item.category}</Link>
                        </li>
                    </ul>
                    <div className="news-feed__card-more">
                        <div className="news-feed__card-links">
                            <Link className="news-feed__card-link">
                                {item.title}
                            </Link>
                        </div>
                        <div className="news-feed__card-actions">
                            <Link to="#" className="news-feed__card-actions-link">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Card;