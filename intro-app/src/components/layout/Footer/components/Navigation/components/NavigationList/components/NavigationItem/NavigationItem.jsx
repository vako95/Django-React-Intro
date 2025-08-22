import { Link } from "react-router-dom";
import "./NavigationItem.css";

const NavigationItem = ({ item }) => {

    return (
        <li className="footer__navigation-item">
            <Link className="footer__navigation-link" to="">
                <i className={item.icon}></i>
                <span className="footer__navigation-title">
                    {item.name}
                </span>
            </Link>
        </li>
    )
}

export default NavigationItem;


