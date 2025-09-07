import "./HoverLink.css";
import clsx from "clsx";
import { Link } from "react-router-dom";

const HoverLink = ({ children, size = "medium", bgColor }) => {
    const classes = clsx(
        "hover__link", {
        "hover__link--sm": size === "small",
        "hover__link--md": size === "medium",
        "hover__link--lg": size === "large",
        "hover__link--lx": size === "lx",
        // "hover__link--transparent": color === "transparent",
    });

    const style = bgColor ? { "--hover-bg-color": bgColor } : undefined;

    return (
        <Link className={classes} style={style}>
            <span>{children}</span>
        </Link>
    );
};

export default HoverLink;
