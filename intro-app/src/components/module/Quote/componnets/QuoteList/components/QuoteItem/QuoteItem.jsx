import "./QuoteItem.css";
import { FaCheck } from "react-icons/fa";

const QuoteItem = ({ item }) => {

    return (
        <li className="quote__item" style={{ backgroundImage: `url("http://localhost:5173/src/components/module/NewsFeed/assets/img/backdrop/bg-shape-1.png")` }}>
            <div className="quote__item-heading">
                <h1 className="quote__item-heading-name">
                    {item.name}
                </h1>
                <span className="quote__item-heading-role">
                    {item.position}
                </span>
            </div>
            <div className="quote__item-wrapper">
                <img className="quote__item-wrapper-img" src={item.img} alt="" />
                {item.personal && (
                    <span className="quote__item-check">
                        <span className="quote__item-wrapper-icon">
                            <FaCheck className="quote__item-wrapper-icons" />
                        </span>
                    </span>
                )}
            </div>
            <p className="quote__item-desc">
                {item.quote}
            </p>
        </li>
    )
}

export default QuoteItem;