import "./HoverLink.css";
import clsx from "clsx";
import { Link } from "react-router-dom";

const HoverLink = ({ className, children, size = "medium", bgColor, variant }) => {
    const classes = clsx(
        "hover__link", {
        "hover__link--sm": size === "sm",
        "hover__link--md": size === "md",
        "hover__link--lg": size === "lg",
        "hover__link--lx": size === "lx",
    },
        variant && `hover__link-variant--${variant}`,
        className
        // "hover__link--transparent": color === "transparent",
    );

    const style = bgColor ? { "--hover-bg-color": bgColor } : undefined;

    return (
        <Link className={classes} style={style}>
            <span>{children}</span>
        </Link>
    );
};

export default HoverLink;
