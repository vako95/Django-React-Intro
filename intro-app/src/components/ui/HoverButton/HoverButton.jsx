import clsx from 'clsx';
import "./HoverButton.css";


const HoverButton = ({ className, children, variant, ...props }) => {
    const classes = clsx(
        "hover__button",
        variant && `hover__button--${variant}`,
        className

    );

    return (
        <button className={classes} type='submit'>
            {children}
        </button>
    )
}

export default HoverButton;