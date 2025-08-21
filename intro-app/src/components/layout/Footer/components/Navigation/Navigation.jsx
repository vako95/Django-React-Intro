import { footerNav } from "../../../../../constants/navigations";
import NavigationList from "./components/NavigationList/NavigationList";

import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className="navigation">
            <NavigationList items={footerNav} />
        </nav>
    )
}

export default Navigation;