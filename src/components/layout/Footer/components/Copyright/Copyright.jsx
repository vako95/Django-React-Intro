import { Link } from "react-router-dom";
import "./Copyright.css";

const Copyright = () => {
    return (
        <div className="footer__copyright">
            <div className="footer__copyright-about">
                <small>&copy; Copyright 2025 By</small>
            </div>
            <div className="footer__copyright-social">
                <Link className="footer__copyright-link" to="https://github.com/vako95">
                    <i className="ri-github-line"></i>
                    vako95
                </Link>
            </div>
        </div>
    );
};

export default Copyright;
