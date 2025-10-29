import "./HoverLink.css";
import clsx from "clsx";
import { Link } from "react-router-dom";

const HoverLink = ({
    className,
    children,
    size = "medium",
    hover,
    bgColor,
    hoverBgColor,
    hoverTextColor,
    textColor,
    variant,
    ...props
}) => {
    const classes = clsx(
        "hover__link", {
        "hover__link--sm": size === "sm",
        "hover__link--md": size === "md",
        "hover__link--lg": size === "lg",
        "hover__link--lx": size === "lx",
    },
        variant && `hover__link-variant--${variant}`,
        className
    );

    const style = {
        ...(bgColor && { "--link-bg-color": bgColor }),
        ...(bgColor && { "--link-bg-color": bgColor }),
        ...(hoverBgColor && { "--hover-bg-color": hoverBgColor }),
        ...(hoverTextColor && { "--hover-bg-color": hoverTextColor }),
        ...(textColor && { "--hover__link-text-color": textColor }),
    };

    return (
        <Link className={classes} style={style} {...props}>
            <span>{children}</span>
        </Link>
    );
};

export default HoverLink;
