import "./BackdropContainer.css";
import clsx from "clsx";

const BackdropContainer = ({
    className,
    children,
    backdrop,
    alt,
    backdropHeight,
    backdropWidth,
    backdropFilter = false,
    position = "bottom",
    fullScreen = false,
}) => {
    const classes = clsx(
        "backdrop-container",
        className
    );
    const imageClasses = clsx(
        "backdrop-image",
        position === "top" && "backdrop-image-position--top",
        fullScreen && "backdrop-image-size--full-screen",
        backdropFilter && "backdrop-image-filter--frosted"
    );
    const styless = { height: backdropHeight, width: backdropWidth };
    return (
        <div className={classes}>
            {backdropFilter && <div className="backdrop-overlay" />}
            <img loading="lazy" src={backdrop} style={styless} alt={alt} className={imageClasses} />
            {children}
        </div>
    );
};

export default BackdropContainer;