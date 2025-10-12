import { NavLink } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { PiPencilLineThin } from "react-icons/pi";
import { FaLock } from "react-icons/fa";

import "./AuthNav.css";

const AuthNav = ({ children }) => {

    const getLinkClass = ({ isActive }) =>
        isActive
            ? "auth-nav__link auth-nav__link--active"
            : "auth-nav__link";

    return (

        <div className="auth-nav">
            <div className="auth-nav__banner">
                <img className="auth-nav__banner-img" src="https://img.freepik.com/free-photo/black-white-photo-mall_250224-119.jpg?semt=ais_hybrid&w=740" alt="" />
            </div>
            <div className="auth-nav__container">
                <div className="auth-nav__content">
                    <NavLink to="/auth/login" className={getLinkClass}>

                        <BsPersonCircle className="auth-nav__icon" />
                        <h1 className="auth-nav__title">Login</h1>
                    </NavLink>

                    <NavLink to="/auth/register" className={getLinkClass}>
                        <PiPencilLineThin className="auth-nav__icon" />
                        <h1 className="auth-nav__title">Register</h1>
                    </NavLink>

                    <NavLink to="/auth/reset" className={getLinkClass}>
                        <FaLock className="auth-nav__icon" />
                        <h1 className="auth-nav__title">Reset</h1>
                    </NavLink>
                </div>
                {children}
            </div>
        </div>
    );
};

export default AuthNav;
