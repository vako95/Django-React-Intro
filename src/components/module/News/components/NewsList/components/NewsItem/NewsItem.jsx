import "./NewsItem.css";
import NewsItemBackdrop from "./components/NewsItemBackdrop/NewsItemBackdrop";
import NewsItemMeta from "./components/NewsItemMeta/NewsItemMeta";
const NewsItem = ({ image }) => {

    return (
        <div className="news__item">
            <div className="news__item-container">
                <NewsItemMeta />
            </div>
            <div class="news__item-backdrop-wrapper">
                <NewsItemBackdrop image={image} />
            </div>
        </div>
    )
}

export default NewsItem;