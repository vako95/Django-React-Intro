
import { NavLink } from "react-router-dom";
import "./MenuItem.css";

const MenuItem = ({ item }) => {

    return (
        <li className="menu__item">
            <NavLink to={item.link} className="menu__link">
                <span className="menu__link-title">{item.name}</span>

            </NavLink>
        </li>
    )
}

export default MenuItem;