import clsx from 'clsx';
import "./HoverButton.css";


const HoverButton = ({ className, children, ...props }) => {
    const classes = clsx("hover__button", className);

    return (
        <button className={classes} type='submit'>
            {children}
        </button>
    )
}

export default HoverButton;