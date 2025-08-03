import "./Menu.css";
import { menuItem } from "../../../../../../../constants/menuItem.js";
import MenuItem from "./components/MenuItem/MenuItem.jsx";

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