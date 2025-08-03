import clsx from 'clsx';
import "./HoverButton.css";


const HoverButton = ({ className, children }) => {
    const classes = clsx("hover__button", className);

    return (
        <button className={classes}>
            {children}
        </button>
    )
}

export default HoverButton;