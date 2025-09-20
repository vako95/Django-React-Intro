import { BackdropContainer, Container, DecoratedHeading } from "@components/ui";
import { Link } from "react-router-dom"
import bgShape from "./assets/img/backdrop/bg-shape-1.png";
import bgCard1 from "./assets/img/bglog2.jpg";
import "./NewsFeed.css";


const NewsFeed = () => {

    return (
        <BackdropContainer backdropWidth="50%" backdropHeight="50%" backdrop={bgShape}>
            <Container>
                <section className="news-feed">
                    <div className="news-feed__container">
                        <div className="news-feed__heading">
                            <DecoratedHeading
                                title="Hoexr Hotel News"
                                subtitle="Latest News Update"
                            />


                        </div>
                        <ul className="news-feed__cards">
                            <li className="news-feed__card">
                                <div className="news-feed__card-wrapper">
                                    <div className="news-feed__thumbs">
                                        <div className="news-feed__thumb">
                                            <img
                                                src="https://picsum.photos/id/1018/600/400"
                                                alt="Image 1"
                                                className="news-feed__img"
                                            />
                                        </div>
                                        <div className="news-feed__thumb">
                                            <img
                                                src="https://picsum.photos/id/1018/600/400"
                                                alt="Image 1"
                                                className="news-feed__img"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="news-feed__card-content">
                                    <div className="news-feed__card-content-item">
                                        <div className="news-feed__card-date">
                                            <div className="news-feed__card-date-box">
                                                <div className="news-feed__card-day">
                                                    <time className="news-feed__time-day" dateTime="2025-01-31">31</time>
                                                </div>
                                                <div className="news-feed__card-month-year">
                                                    <time className="news-feed__time-month" dateTime="2025-01">Jan</time>
                                                    <time className="news-feed__time-year" dateTime="2025">2025</time>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="news-feed__card-meta-list">
                                            <li className="news-feed__card-meta-item">
                                                <i class="news-feed__card-meta-icon  ri-account-circle-line"></i>
                                                <span className="news-feed__card-meta-prefix">By</span>
                                                <Link className="news-feed__card-meta-link">Shadhin</Link>
                                            </li>
                                            <li className="news-feed__card-meta-item">
                                                <i class="news-feed__card-meta-icon  ri-folder-line"></i>
                                                <Link className="news-feed__card-meta-link">Shadhin</Link>
                                            </li>
                                        </ul>
                                        <div className="news-feed__card-more">
                                            <div className="news-feed__card-links">
                                                <Link className="news-feed__card-link">
                                                    Retore Lighting Design in The Hotel
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
                            <li className="news-feed__card">
                                <div className="news-feed__card-wrapper">
                                    <div className="news-feed__thumbs">
                                        <div className="news-feed__thumb">
                                            <img
                                                src="https://picsum.photos/id/1018/600/400"
                                                alt="Image 1"
                                                className="news-feed__img"
                                            />
                                        </div>
                                        <div className="news-feed__thumb">
                                            <img
                                                src="https://picsum.photos/id/1018/600/400"
                                                alt="Image 1"
                                                className="news-feed__img"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="news-feed__card-content">
                                    <div className="news-feed__card-content-item">
                                        <div className="news-feed__card-date">
                                            <div className="news-feed__card-date-box">
                                                <div className="news-feed__card-day">
                                                    <time className="news-feed__time-day" dateTime="2025-01-31">31</time>
                                                </div>
                                                <div className="news-feed__card-month-year">
                                                    <time className="news-feed__time-month" dateTime="2025-01">Jan</time>
                                                    <time className="news-feed__time-year" dateTime="2025">2025</time>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="news-feed__card-meta-list">
                                            <li className="news-feed__card-meta-item">
                                                <i class="news-feed__card-meta-icon  ri-account-circle-line"></i>
                                                <span className="news-feed__card-meta-prefix">By</span>
                                                <Link className="news-feed__card-meta-link">Shadhin</Link>
                                            </li>
                                            <li className="news-feed__card-meta-item">
                                                <i class="news-feed__card-meta-icon  ri-folder-line"></i>
                                                <Link className="news-feed__card-meta-link">Shadhin</Link>
                                            </li>
                                        </ul>
                                        <div className="news-feed__card-more">
                                            <div className="news-feed__card-links">
                                                <Link className="news-feed__card-link">
                                                    Retore Lighting Design in The Hotel
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
                            <li className="news-feed__card">
                                <div className="news-feed__card-wrapper">
                                    <div className="news-feed__thumbs">
                                        <div className="news-feed__thumb">
                                            <img
                                                src="https://picsum.photos/id/1018/600/400"
                                                alt="Image 1"
                                                className="news-feed__img"
                                            />
                                        </div>
                                        <div className="news-feed__thumb">
                                            <img
                                                src="https://picsum.photos/id/1018/600/400"
                                                alt="Image 1"
                                                className="news-feed__img"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="news-feed__card-content">
                                    <div className="news-feed__card-content-item">
                                        <div className="news-feed__card-date">
                                            <div className="news-feed__card-date-box">
                                                <div className="news-feed__card-day">
                                                    <time className="news-feed__time-day" dateTime="2025-01-31">31</time>
                                                </div>
                                                <div className="news-feed__card-month-year">
                                                    <time className="news-feed__time-month" dateTime="2025-01">Jan</time>
                                                    <time className="news-feed__time-year" dateTime="2025">2025</time>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="news-feed__card-meta-list">
                                            <li className="news-feed__card-meta-item">
                                                <i class="news-feed__card-meta-icon  ri-account-circle-line"></i>
                                                <span className="news-feed__card-meta-prefix">By</span>
                                                <Link className="news-feed__card-meta-link">Shadhin</Link>
                                            </li>
                                            <li className="news-feed__card-meta-item">
                                                <i class="news-feed__card-meta-icon  ri-folder-line"></i>
                                                <Link className="news-feed__card-meta-link">Shadhin</Link>
                                            </li>
                                        </ul>
                                        <div className="news-feed__card-more">
                                            <div className="news-feed__card-links">
                                                <Link className="news-feed__card-link">
                                                    Retore Lighting Design in The Hotel
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
                            <li className="news-feed__card">
                                <div className="news-feed__card-wrapper">
                                    <div className="news-feed__thumbs">
                                        <div className="news-feed__thumb">
                                            <img
                                                src="https://picsum.photos/id/1018/600/400"
                                                alt="Image 1"
                                                className="news-feed__img"
                                            />
                                        </div>
                                        <div className="news-feed__thumb">
                                            <img
                                                src="https://picsum.photos/id/1018/600/400"
                                                alt="Image 1"
                                                className="news-feed__img"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="news-feed__card-content">
                                    <div className="news-feed__card-content-item">
                                        <div className="news-feed__card-date">
                                            <div className="news-feed__card-date-box">
                                                <div className="news-feed__card-day">
                                                    <time className="news-feed__time-day" dateTime="2025-01-31">31</time>
                                                </div>
                                                <div className="news-feed__card-month-year">
                                                    <time className="news-feed__time-month" dateTime="2025-01">Jan</time>
                                                    <time className="news-feed__time-year" dateTime="2025">2025</time>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="news-feed__card-meta-list">
                                            <li className="news-feed__card-meta-item">
                                                <i class="news-feed__card-meta-icon  ri-account-circle-line"></i>
                                                <span className="news-feed__card-meta-prefix">By</span>
                                                <Link className="news-feed__card-meta-link">Shadhin</Link>
                                            </li>
                                            <li className="news-feed__card-meta-item">
                                                <i class="news-feed__card-meta-icon  ri-folder-line"></i>
                                                <Link className="news-feed__card-meta-link">Shadhin</Link>
                                            </li>
                                        </ul>
                                        <div className="news-feed__card-more">
                                            <div className="news-feed__card-links">
                                                <Link className="news-feed__card-link">
                                                    Retore Lighting Design in The Hotel
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
                            <li className="news-feed__card">
                                <div className="news-feed__card-wrapper">
                                    <div className="news-feed__thumbs">
                                        <div className="news-feed__thumb">
                                            <img
                                                src="https://picsum.photos/id/1018/600/400"
                                                alt="Image 1"
                                                className="news-feed__img"
                                            />
                                        </div>
                                        <div className="news-feed__thumb">
                                            <img
                                                src="https://picsum.photos/id/1018/600/400"
                                                alt="Image 1"
                                                className="news-feed__img"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="news-feed__card-content">
                                    <div className="news-feed__card-content-item">
                                        <div className="news-feed__card-date">
                                            <div className="news-feed__card-date-box">
                                                <div className="news-feed__card-day">
                                                    <time className="news-feed__time-day" dateTime="2025-01-31">31</time>
                                                </div>
                                                <div className="news-feed__card-month-year">
                                                    <time className="news-feed__time-month" dateTime="2025-01">Jan</time>
                                                    <time className="news-feed__time-year" dateTime="2025">2025</time>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="news-feed__card-meta-list">
                                            <li className="news-feed__card-meta-item">
                                                <i class="news-feed__card-meta-icon  ri-account-circle-line"></i>
                                                <span className="news-feed__card-meta-prefix">By</span>
                                                <Link className="news-feed__card-meta-link">Shadhin</Link>
                                            </li>
                                            <li className="news-feed__card-meta-item">
                                                <i class="news-feed__card-meta-icon  ri-folder-line"></i>
                                                <Link className="news-feed__card-meta-link">Shadhin</Link>
                                            </li>
                                        </ul>
                                        <div className="news-feed__card-more">
                                            <div className="news-feed__card-links">
                                                <Link className="news-feed__card-link">
                                                    Retore Lighting Design in The Hotel
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
                            <li className="news-feed__card">
                                <div className="news-feed__card-wrapper">
                                    <div className="news-feed__thumbs">
                                        <div className="news-feed__thumb">
                                            <img
                                                src="https://picsum.photos/id/1018/600/400"
                                                alt="Image 1"
                                                className="news-feed__img"
                                            />
                                        </div>
                                        <div className="news-feed__thumb">
                                            <img
                                                src="https://picsum.photos/id/1018/600/400"
                                                alt="Image 1"
                                                className="news-feed__img"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="news-feed__card-content">
                                    <div className="news-feed__card-content-item">
                                        <div className="news-feed__card-date">
                                            <div className="news-feed__card-date-box">
                                                <div className="news-feed__card-day">
                                                    <time className="news-feed__time-day" dateTime="2025-01-31">31</time>
                                                </div>
                                                <div className="news-feed__card-month-year">
                                                    <time className="news-feed__time-month" dateTime="2025-01">Jan</time>
                                                    <time className="news-feed__time-year" dateTime="2025">2025</time>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="news-feed__card-meta-list">
                                            <li className="news-feed__card-meta-item">
                                                <i class="news-feed__card-meta-icon  ri-account-circle-line"></i>
                                                <span className="news-feed__card-meta-prefix">By</span>
                                                <Link className="news-feed__card-meta-link">Shadhin</Link>
                                            </li>
                                            <li className="news-feed__card-meta-item">
                                                <i class="news-feed__card-meta-icon  ri-folder-line"></i>
                                                <Link className="news-feed__card-meta-link">Shadhin</Link>
                                            </li>

                                        </ul>
                                        <div className="news-feed__card-more">
                                            <div className="news-feed__card-links">
                                                <Link className="news-feed__card-link">
                                                    Retore Lighting Design in The Hotel
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
                        </ul>
                    </div>
                </section>
            </Container>
        </BackdropContainer>
    )
}

export default NewsFeed;