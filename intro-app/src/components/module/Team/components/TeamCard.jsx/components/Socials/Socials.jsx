import { Link } from "react-router-dom";
import "./Socials.css";

const Socials = ({ socials }) => {

    return (
        <nav className="team__card-icons">
            {socials.map((social, idx) => (
                <Link key={idx} to={social.href} className="team__card-icon-link">
                    <i className={`team__card-icon ${social.iconClass}`}></i>
                </Link>
            ))}
        </nav>
    )
}

export default Socials