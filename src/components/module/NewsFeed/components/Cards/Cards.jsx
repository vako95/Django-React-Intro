import "./Cards.css";
import Card from "./components/Card/Card";


const Cards = ({ newsFeedItem }) => {

    return (
        <ul className="news-feed__cards">
            {newsFeedItem.length > 0 && newsFeedItem.map((item) => (
                <Card item={item} key={item.id} />
            ))}
        </ul>
    )
}

export default Cards;