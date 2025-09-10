import "./BackdropContainer.css";
import clsx from "clsx";

const BackdropContainer = ({ className, children, backdrop, alt }) => {
    const classes = clsx(
        "backdrop-container",
        className
    );

    return (
        <div className={classes}>
            <img src={backdrop} alt={alt} className="backdrop-image" />
            {children}
        </div>
    );
};

export default BackdropContainer;