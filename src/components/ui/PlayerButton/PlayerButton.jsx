import clsx from 'clsx';
import "./PlayerButton.css";


const PlayerButton = ({ onClick, className, children, variant, color, size, ...props }) => {
    const classes = clsx(
        "player__button",
        variant && `player__button--${variant}`,
        size && `player__button--${size}`,
        color && `player__button-${color}`,
        className
    );

    return (
        <button className={classes} type='button'{...props}>
            {children}
            {/* <i className="player__button-icon  ri-play-fill"></i> */}
        </button>
    )
}

export default PlayerButton;