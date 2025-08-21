import { navbarNav } from "../../../../../../../constants/navigations";
import MenuItem from "./components/MenuItem/MenuItem";

import "./Menu.css";

const Menu = () => {
    return (
        <ul className="menu">
            {navbarNav.map((item) => (
                <MenuItem item={item} key={item.id} />
            ))}
        </ul>
    )
}

export default Menu;