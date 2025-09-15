import FoodItem from "../FoodItem/FoodItem";
import "./FoodList.css";

const FoodList = ({ foodItems }) => {

    return (
        <ul className="food-card__list">
            {foodItems.map((item) => (
                <FoodItem {...item} key={item.id} />
            ))}
        </ul>
    )
}

export default FoodList;