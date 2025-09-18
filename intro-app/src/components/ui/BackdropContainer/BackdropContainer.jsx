import "./BackdropContainer.css";
import clsx from "clsx";

const BackdropContainer = ({ className, children, backdrop, alt, backdropHeight, backdropWidth }) => {
    const classes = clsx(
        "backdrop-container",

        className
    );
    const styless = { height: backdropHeight, width: backdropWidth };
    return (
        <div className={classes}  >
            <img src={backdrop} style={styless} alt={alt} className="backdrop-image" />
            {children}
        </div>
    );
};

export default BackdropContainer;