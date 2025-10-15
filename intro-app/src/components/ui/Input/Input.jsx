import { memo, useId, useState } from "react";
import { clsx } from "clsx"
import "./Input.css";
import { FaEyeLowVision } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
const Input = (
    {
        icon,
        showPassword = false,
        position,
        label,
        placeholder,
        type,
        className,
        children,
        ...props
    }
) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    // const passwordType = isPasswordVisible ? "password" : "text";

    const handlePasswordToggle = () => {
        setIsPasswordVisible(prev => !prev);
    };

    const classes = clsx(
        "input",
        icon && "input--icon",
        showPassword && "input--show-eyes",
        isPasswordVisible && "input__icon-eyes--hidden",
        className
    )

    const id = useId();



    return (
        <div className={classes}>
            {label && (
                <label className="input__label" htmlFor={`input-${id}`}>
                    {label}
                </label>
            )}
            <input
                id={`input-${id}`}
                placeholder={placeholder}
                className="input__field"
                type={isPasswordVisible ? "text" : type}
                {...props}

            />
            {icon && (
                <span className={clsx("input__icon", position && `input__icon-postion--${position}`)}>
                    {icon}
                </span>
            )}
            {showPassword && (
                <span onClick={handlePasswordToggle} className="input__icon-eyes ">
                    {isPasswordVisible ? (
                        <FaEyeLowVision />
                    ) : (
                        <FaRegEye />
                    )}
                </span>
            )}
        </div>
    )
}

export default memo(Input);