import clsx from "clsx";
import "./IconMirror.css";

const IconMirror = ({ className, children, mt }) => {


    const classes = clsx(
        "icon-mirror",
        "icon-mirror__effect",
        mt && { marginBottom: `${mt}px` },
        className
    );
    const style = mt ? { marginBottom: `${mt}px` } : {};

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
};

export default IconMirror;
