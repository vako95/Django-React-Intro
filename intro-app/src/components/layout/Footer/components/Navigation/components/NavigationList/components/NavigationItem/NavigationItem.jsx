import "./NavigationItem.css";
import { Link } from "react-router-dom";
const NavigationItem = ({ item }) => {

    return (
        <li className="navigation__item">
            <Link className="navigation__link" to="">
                <i className={item.icon}></i>
                <span className="navigation__link-title">
                    {item.name}
                </span>
            </Link>
        </li>
    )
}


export default NavigationItem;


