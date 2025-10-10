
import { useId } from "react";
import "./Input.css";


const Input = (
    {
        icon,
        label,
        placeholder,

        ...props
    }
) => {

    const id = useId()

    return (
        <div className="input">
            {label && (
                <label className="input__label" htmlFor={`input-${id}`}>
                    {label}
                </label>
            )}
            <input
                id={`input-${id}`}
                placeholder={placeholder}
                className="input__field"
                {...props}
            />
            {icon && (
                <span className="input__icon">
                    {icon}
                </span>
            )}
        </div>
    )
}

export default Input;