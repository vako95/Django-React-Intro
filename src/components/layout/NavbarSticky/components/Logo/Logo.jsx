import { Link } from "react-router-dom";
import LogoBrand from "./assets/images/logo/logo-wide-white.png";

import "./Logo.css"


const Logo = () => {

    return (
        <figure className="navbar-sticky__logo">
            <Link to="/" className="navbar-sticky__logo-link">
                <img className="navbar-sticky__logo-img" src={LogoBrand} alt="Logo brand" />
            </Link>
        </figure>
    )
}

export default Logo;