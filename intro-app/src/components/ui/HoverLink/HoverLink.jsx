import "./HoverLink.css";
import clsx from "clsx";

const HoverLink = ({ children, size = "medium", color }) => {
    return (
        <button className={clsx("hover__link", {
            "hover__link--small": size === "small",
            "hover__link--medium": size === "medium",
            "hover__link--large": size === "large",
            "hover__link--transparent": color === "transparent"
        })}>
            <span> {children}</span>
        </button>
    );
};

export default HoverLink;
