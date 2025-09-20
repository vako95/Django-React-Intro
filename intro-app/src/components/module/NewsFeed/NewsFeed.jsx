import { BackdropContainer, Container, HoverButton } from "@components/ui";
import bgShape from "./assets/img/backdrop/bg-shape-1.png";
import bgCard1 from "./assets/img/bglog2.jpg";
import "./NewsFeed.css";


const NewsFeed = () => {

    return (
        <BackdropContainer backdropHeight="100%" backdrop={bgShape}>
            <Container>
                <section className="news-feed">
                    <div className="news-feed__container">
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
                                    <div className="news-feed__card-meta">
                                        <div className="news-feed__card-meta-item">
                                            <i class="news-feed__card-meta-icon ri-account-circle-2-line"></i>
                                            <span className="news-feed__card-meta-author">Shahin</span>
                                        </div>
                                        <div className="news-feed__card-meta-item">
                                            <i className="news-feed__card-meta-icon"></i>
                                            <span className="news-feed__card-meta-author">Shahin</span>
                                        </div>
                                    </div>
                                    <div className="news-feed__card-more">
                                        <div className="news-feed__card-heading">
                                            <h1 className="news-feed__card-title">
                                                Read More
                                            </h1>
                                        </div>
                                        <div className="news-feed__card-actions">
                                            <HoverButton className="news-feed__card-btn">
                                                Read More
                                            </HoverButton>
                                            <i className="news-feed__card-btn-icon">

                                            </i>
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