import { BackdropContainer } from "@components/ui";
import { useLocation } from "react-router-dom";
import { backgroundImages } from "../../../constants/backdroundPages";
import pageBg from "./assets/img/page_bg.jpg";
import "./Header.css";

const Header = ({ children }) => {
    const location = useLocation();
    const currentBackground = backgroundImages[location.pathname] || pageBg;

    return (
        <BackdropContainer
            backdropHeight="80%"
            position="top"
            backdrop={currentBackground}
        >
            <header tabIndex={1} className="header">
                <div className="header__container">
                    {children}
                </div>
            </header>
        </BackdropContainer>
    );
};

export default Header;
