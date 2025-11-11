import { navbarNav } from "../../../../../constants/navigations";
import MenuItem from "./components/MenuItem/MenuItem";

import "./Menu.css";

const Menu = () => {
    return (
        <ul className="navbar-sticky__list">
            {navbarNav.map((item) => (
                <MenuItem item={item} key={item.id} />
            ))}
        </ul>
    )
}

export default Menu;