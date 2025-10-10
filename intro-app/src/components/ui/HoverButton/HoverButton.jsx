import clsx from 'clsx';
import "./HoverButton.css";

const HoverButton = ({
    className,
    children,
    variant,
    color,
    bgColor,
    hoverBgColor,
    textHoverColor,
    textColor,
    size,
    type = 'submit',
    ...props
}) => {
    const classes = clsx(
        "hover__button",
        variant && `hover__button-variant--${variant}`,
        size && `hover__button--${size}`,
        color && `hover__button--${color}`,
        className
    );

    const style = {
        ...(bgColor && { '--bg-color': bgColor }),
        ...(hoverBgColor && { '--hover-bg-color': hoverBgColor }),
        ...(textColor && { '--btn-text-color': textColor }),
        ...(textHoverColor && { '--btn-hover-text-color': textHoverColor }),
    };

    return (
        <button className={classes} style={style} type={type} {...props}>
            {children}
        </button>
    );
};

export default HoverButton;
