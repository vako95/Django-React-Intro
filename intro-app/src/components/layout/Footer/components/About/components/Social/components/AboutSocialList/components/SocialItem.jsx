import { Link } from "react-router-dom";
import "./SocialItem.css";

const SocialItem = ({ icon }) => {

    return (
        <li className="footer__about-social-item">
            <Link className="footer__about-social-link">
                <i className={`footer__about-social-link ${icon}`}></i>
            </Link>
        </li>
    )
}

export default SocialItem;