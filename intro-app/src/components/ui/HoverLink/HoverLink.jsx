import "./HoverLink.css";
import clsx from "clsx";
import { Link } from "react-router-dom";
const HoverLink = ({ children, size = "medium", color }) => {
    return (
        <Link className={clsx("hover__link", {
            "hover__link--small": size === "small",
            "hover__link--medium": size === "medium",
            "hover__link--large": size === "large",
            "hover__link--transparent": color === "transparent"
        })}>
            <span> {children}</span>
        </Link>
    );
};

export default HoverLink;
