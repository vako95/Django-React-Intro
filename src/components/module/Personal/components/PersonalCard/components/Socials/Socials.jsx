import { Link } from "react-router-dom";
import "./Socials.css";

const Socials = ({ socials }) => {

    return (
        <nav className="personal__card-icons">
            {socials.map((social, idx) => (
                <Link key={idx} to={social.href} className="personal__card-icon-link">
                    <i className={`personal__card-icon ${social.iconClass}`}></i>
                </Link>
            ))}
        </nav>
    )
}

export default Socials