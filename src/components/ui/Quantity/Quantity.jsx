import { useState } from "react";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { AiOutlineMinusCircle } from "react-icons/ai";
import clsx from "clsx";
import "./Quantity.css";

const Quantity = ({ onChange, initial = 0, max = 10, min = 1, className, variant }) => {

    const [count, setCount] = useState(initial);

    const handleOnIncrease = () => {
        setCount((prev) => {
            const count = Math.min(prev + 1, max);
            onChange(count);
            return count;
        });
    };
    const handleOnDecrease = () => {
        setCount((prev) => {
            const count = Math.max(prev - 1, min);
            onChange(count);
            return count;
        });
    };
    const classes = clsx(
        "quantity",
        variant && `quantity-variant--${variant}`,
        className
    )

    return (
        <div className={classes} onClick={(e) => e.stopPropagation()}>
            <button
                className="quantity__minus"
                type="button"
                onClick={handleOnDecrease}
                disabled={count <= min}>
                <span className="quantity__icon">
                    <AiOutlineMinusCircle />
                </span>
            </button>

            <input
                className="quantity__input"
                value={count}
                type="text"
                disabled
            />
            <button
                className="quantity__plus"
                type="button"
                onClick={handleOnIncrease}
                disabled={count >= max}
            >
                <span className="quantity__icon">
                    <HiOutlinePlusCircle />
                </span>
            </button>
        </div>
    )
}

export default Quantity;