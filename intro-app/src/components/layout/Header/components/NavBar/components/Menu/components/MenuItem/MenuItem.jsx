
import { NavLink } from "react-router-dom";
import "./MenuItem.css";

const MenuItem = ({ item }) => {
    const isDropdown = Array.isArray(item.dropdown) && item.dropdown.length > 0;
    return (
        <li className="menu__item">
            <NavLink to={item.link} className="menu__link">
                <span className="menu__link-title">
                    {item.name}
                </span>
                {isDropdown && (
                    <i class="ri-arrow-down-s-line"></i>
                )}
            </NavLink>
            {isDropdown && (
                <ul className="menu__sublist">
                    {item.dropdown.map((dropdownItem) => {
                        const hasDropdown = Array.isArray(dropdownItem.dropdown) && dropdownItem.dropdown.length > 0;
                        return (
                            <li key={dropdownItem.id} className="menu__sublist-item">
                                <NavLink to={dropdownItem.link} className="menu__sublist-link">
                                    <span className="menu__sublist-text">
                                        {dropdownItem.name}
                                    </span>
                                    {hasDropdown && (
                                        <i className="ri-arrow-right-s-fill"></i>
                                    )}

                                </NavLink>
                                {hasDropdown && (
                                    <ul className="menu__sublist--submenu">
                                        {dropdownItem.dropdown.map((item) => (
                                            <li className="menu__sublist-item" key={item.id}>
                                                <NavLink className="menu__sublist-link menu__sublist-item--link">
                                                    <span className="menu__sublist-text">
                                                        {item.name}
                                                    </span>
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )
                                }

                            </li>
                        );
                    })}
                </ul>
            )
            }
        </li >
    )
}

export default MenuItem;