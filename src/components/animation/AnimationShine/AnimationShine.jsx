
import "./AnimationShine.css";
import clsx from "clsx";

const AnimationShine = ({
    children,
    className
}) => {

    const classes = clsx(
        "animation-shine",
        className
    )
    return (
        <div className={classes}>
            <div className="animation-shine-panel">
                {children}
            </div>
        </div>

    )
}

export default AnimationShine;