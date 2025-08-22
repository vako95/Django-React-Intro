import NavigationList from "./components/NavigationList/NavigationList.jsx";

import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className="footer__navigation">
            <div className="footer__navigation-heading">
                <h5 className="footer__navigation-heading-title">
                    Services Links
                </h5>
            </div>
            <NavigationList />
        </nav>
    )
}

export default Navigation;