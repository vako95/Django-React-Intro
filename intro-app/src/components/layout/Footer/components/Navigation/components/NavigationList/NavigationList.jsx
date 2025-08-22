import NavigationItem from "./components/NavigationItem/NavigationItem.jsx";
import { footerNav } from "../../../../../../../constants/navigations.js";
import "./NavigationList.css";

const NavigationList = () => {

    return (
        <ul className="footer__navigation-links">
            {footerNav.map((item, idx) => (
                <NavigationItem item={item} key={idx} />
            ))}
        </ul>
    )
}

export default NavigationList;