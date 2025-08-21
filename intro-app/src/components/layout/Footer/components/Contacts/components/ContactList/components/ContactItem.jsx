import { Link } from "react-router-dom";
import "./ContactItem.css";

const ContactItem = ({ item }) => {

    return (
        <li className="contact__item">
            <Link>
                <i className={item.icon}></i>
                <span>{item.name}</span>
            </Link>
        </li>
    )
}

export default ContactItem;