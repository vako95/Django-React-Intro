import "./MenuItem.css";
import { NavLink } from "react-router-dom";
const MenuItem = ({ item }) => {
    const isDropdown = item.dropdown.length > 0;

    return (
        <li className="menu__item">
            <NavLink to={item.link} className="menu__link">
                <span className="menu__link-text">
                    {item.name}
                </span>
                {isDropdown && (
                    <i className="ri-arrow-down-s-line menu__link-icon"></i>
                )}
            </NavLink>
            {isDropdown && (
                <ul className="submenu">
                    {item.dropdown.length && item.dropdown.map(dropdownItem => (
                        <li className="submenu__item">
                            <NavLink to={dropdownItem.link} className="submenu__link">
                                <span className="submenu__link-text">
                                    {dropdownItem.name}
                                </span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}

        </li>
    )
}

export default MenuItem;