import { BackdropContainer, Container, DecoratedHeading } from "@components/ui";
import bgShape from "./assets/img/backdrop/bg-shape-1.png";
import bgCard1 from "./assets/img/bglog2.jpg";
import "./NewsFeed.css";
import { newsFeedItem } from "../../../constants/sections";
import Cards from "./components/Cards/Cards";

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
                        <div className="news-feed__card-news">
                            <Cards newsFeedItem={newsFeedItem} />
                        </div>
                    </div>
                </section >
            </Container >
        </BackdropContainer >
    )
}

export default NewsFeed;