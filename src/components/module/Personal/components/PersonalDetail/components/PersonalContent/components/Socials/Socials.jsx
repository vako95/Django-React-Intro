import { Link } from "react-router-dom";
import "./Socials.css";

const Socials = () => {

    return (
        <ul className="personal__detail-info-socials">
            <li className="personal__detail-info-social">
                <Link className="personal__detail-info-social-link">
                    <i className="personal__detail-info-social-icon ri-twitter-x-fill"></i>
                </Link>
            </li>
            <li className="personal__detail-info-social">
                <Link className="personal__detail-info-social-link">
                    <i className="personal__detail-info-social-icon ri-facebook-fill"></i>
                </Link>
            </li>
            <li className="personal__detail-info-social">
                <Link className="personal__detail-info-social-link">
                    <i className="personal__detail-info-social-icon ri-youtube-fill"></i>
                </Link>
            </li>
            <li className="personal__detail-info-social">
                <Link className="personal__detail-info-social-link">
                    <i className="personal__detail-info-social-icon ri-instagram-fill"></i>
                </Link>
            </li>
        </ul>
    )
}

export default Socials;