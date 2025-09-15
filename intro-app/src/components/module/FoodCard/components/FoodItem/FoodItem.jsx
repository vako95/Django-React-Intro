import "./FoodItem.css";
import { useState } from "react";

const FoodItem = ({ img, title, subtitle, tag, price }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePos({ x, y });
    };

    return (
        <li className="food-card__item">
            <article
                className="food-card__listing"
                onMouseMove={handleMove}
            >
                <div className="food-card__fly">
                    <img
                        className="food-card__fly-img"
                        src={img}
                        style={{ left: mousePos.x, top: mousePos.y }}
                        alt={title}
                    />
                </div>
                <div className="food-card-wrapper">
                    <img className="food-card-img" src={img} alt={title} />
                </div>
                <div className="food-card__content">
                    <div className="food-card__heading">
                        <h5 className="food-card__title">{title}</h5>
                        <span className="food-card__subtitle">{subtitle}</span>
                    </div>
                    <div className="food-card__detail">
                        <h5 className="food-card__tag">{tag}</h5>
                        <div className="food__card-line">
                            <span className="food-card__price">${price}</span>
                        </div>
                    </div>
                </div>
            </article>
        </li>
    );
};

export default FoodItem;
