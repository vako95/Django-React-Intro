import { menuItem } from "@/constants/menuitem";
import MenuItem from "./components/MenuItem";

import "./Menu.css";

const Menu = () => {
    return (
        <ul className="menu">
            {menuItem.map((item) => (
                <MenuItem item={item} key={item.id} />
            ))}
        </ul>
    )
}

export default Menu;