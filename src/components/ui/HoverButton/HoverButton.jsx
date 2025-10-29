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
    width,
    disabled,
    type = 'submit',
    ...props
}) => {
    const classes = clsx(
        "hover__button",
        variant && `hover__button-variant--${variant}`,
        size && `hover__button--${size}`,
        color && `hover__button--${color}`,
        disabled && `hover__button--disabled`,
        className
    );

    const style = {
        ...(bgColor && { '--bg-color': bgColor }),
        ...(hoverBgColor && { '--hover-bg-color': hoverBgColor }),
        ...(textColor && { '--btn-text-color': textColor }),
        ...(textHoverColor && { '--btn-hover-text-color': textHoverColor }),
        ...(width && { '--btn-hover-width': width }),
    };

    return (
        <button className={classes} style={style} type={type} {...props} disabled={disabled}>
            {children}
        </button>
    );
};

export default HoverButton;
