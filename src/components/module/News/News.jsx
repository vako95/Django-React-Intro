import { Container } from "@components/ui";
import NewsList from "./components/NewsList/NewsList";
import "./News.css";

const News = () => {
    return (
        <div className="news">
            <Container>
                <NewsList />
            </Container>
        </div>
    )
}

export default News;