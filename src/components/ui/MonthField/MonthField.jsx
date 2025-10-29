
import { IoChevronDownOutline } from "react-icons/io5";
import { clsx } from "clsx"
import { useState } from "react";
import "./MonthField.css";
const MonthField = ({
    icon = <IoChevronDownOutline />,
    className,
    selectProps
}) => {
    const [openOption, setOpenOption] = useState();
    const [selectedMonth, setSelectedMonth] = useState(0);

    const classes = clsx(
        "month-field",
        openOption && "month-field--open",
        className
    );

    const handleOption = () => {
        setOpenOption((prev) => !prev);
    }

    const handleClick = (id) => {
        if (id < 1) return;
        console.log(id)
        setSelectedMonth(id);
        setOpenOption(false)
    }

    const months = [
        { id: 0, label: "Month" },
        { id: 1, label: "January" },
        { id: 2, label: "February" },
        { id: 3, label: "March" },
        { id: 4, label: "April" },
        { id: 5, label: "May" },
        { id: 6, label: "June" },
        { id: 7, label: "July" },
        { id: 8, label: "August" },
        { id: 9, label: "September" },
        { id: 10, label: "October" },
        { id: 11, label: "November" },
        { id: 12, label: "December" }
    ];


    return (

        <div className={classes} tabIndex={-1}
            onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                    setOpenOption(false);
                }
            }}>
            {/* <select name="" id="">
                {months.map((item) => (
                    <option
                        selected={item.id === selectedMonth}
                        onChange={item.id}
                        key={item.id} value={item.id}>
                        {item.label}
                    </option>
                ))}
            </select> */}

            <input
                className="month-field__input"
                name="moon"
                type="hidden"
                value={selectedMonth}
            />



            <div className="month-field__content" onClick={handleOption}>

                <div className="month-field__heading">
                    <span className="month-field__heading-title">
                        {months[selectedMonth].label}
                    </span>
                    {icon && (
                        <span className="month-field__icon">{icon}</span>
                    )}
                </div>
                <div className="month-field__date">
                    <div className="month-field__select" {...selectProps} onClick={(e) => e.stopPropagation()}>
                        {months.map((item) => (
                            <span className={clsx(
                                "month-field__item",
                                item.id === 0 && "month-field__item--disabled"
                            )} key={item.id}
                                onClick={() => handleClick(item.id)}
                                value={item.id}
                            >
                                {item.label}
                            </span>
                        ))}
                    </div>
                </div>

            </div>

        </div>

    )
}

export default MonthField;