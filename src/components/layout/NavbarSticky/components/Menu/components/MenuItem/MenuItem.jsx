import { NavLink } from "react-router-dom";
import "./MenuItem.css";

const MenuItem = ({ item }) => {
    const isDropdown = Array.isArray(item.dropdown) && item.dropdown.length > 0;
    return (
        <li className="navbar-sticky__item">
            <NavLink to={item.link} className="navbar-sticky__item-link">
                <span className="navbar-sticky__item-title">
                    {item.name}
                </span>
                {isDropdown && (
                    <span className="navbar-sticky__item-icon">
                        <i className="ri-arrow-down-s-line"></i>
                    </span>
                )}
            </NavLink>
            {isDropdown && (
                <ul className="navbar-sticky__sublist">
                    {item.dropdown.map((dropdownItem) => {
                        const hasDropdown = Array.isArray(dropdownItem.dropdown) && dropdownItem.dropdown.length > 0;
                        return (
                            <li key={dropdownItem.id} className="navbar-sticky__sublist-item">

                                <NavLink to={dropdownItem.link} className="navbar-sticky__sublist-item-link">
                                    <span className="navbar-sticky__sublist-item-text">
                                        {dropdownItem.name}
                                    </span>
                                    {hasDropdown && (
                                        <span className="navbar-sticky__sublist-item-icon">
                                            <i className="ri-arrow-right-s-fill"></i>
                                        </span>
                                    )}
                                </NavLink>
                                {hasDropdown && (
                                    <ul className="navbar-sticky__sublist--submenu">
                                        {dropdownItem.dropdown.map((item) => (
                                            <li className="navbar-sticky__sublist-item" key={item.id}>
                                                <NavLink to={item.name} className="navbar-sticky__sublist-item-link navbar-sticky__sublist-item--link">
                                                    <span className="navbar-sticky__sublist-item-text">
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