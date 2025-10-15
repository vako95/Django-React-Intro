import "./MonthField.css";
import { clsx } from "clsx"
import { useState } from "react";
const MonthField = ({
    className,
    disabled,
    selectProps
}) => {
    const [openOption, setOpenOption] = useState();
    const [selectedMonth, setSelectedMonth] = useState(1);

    const classes = clsx(
        "month-field",
        className
    );

    const handleOption = () => {
        setOpenOption((prev) => !prev)
    }

    const handleClick = (id) => {
        if (id < 1) return;
        console.log(id)
        setSelectedMonth(id)
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
        <form action="" method="get">
            <div className={classes} onClick={handleOption}>
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
                    name="moon"
                    type="hidden"
                    value={selectedMonth}
                />
                <div className="field">

                    <div className="month-field__heading">
                        <span className="month-field__heading-title">
                            {months[selectedMonth].label}
                        </span>
                    </div>
                    {openOption && (
                        <div className="month-field__select" {...selectProps} >
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
                    )}

                    <button type="submit">click</button>
                </div>
            </div>
        </form>
    )
}

export default MonthField;