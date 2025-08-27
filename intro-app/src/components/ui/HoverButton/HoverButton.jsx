import clsx from 'clsx';
import "./HoverButton.css";


const HoverButton = ({ className, children, variant, color, size, ...props }) => {
    const classes = clsx(
        "hover__button",
        variant && `hover__button--${variant}`,
        size && `hover__button--${size}`,
        color && `hover__button--${color}`,
        className

    );

    return (
        <button className={classes} type='submit' {...props}>
            {children}
        </button>
    )
}

export default HoverButton;