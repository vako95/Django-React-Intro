import "./Logo.css";
import LogoBrand from "./assets/img/logo/logo-wide-white.png";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <figure className="logo">
            <Link className="logo__link">
                <img src={LogoBrand} className="logo__brand" alt="logo" />
            </Link>
        </figure>
    )
}

export default Logo;