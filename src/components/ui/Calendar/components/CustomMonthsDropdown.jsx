import { useState } from "react";
import dayjs from "dayjs";
import "./CustomMonthsDropdown.css";
import { motion as Motion, AnimatePresence } from "framer-motion"
const CustomMonthsDropdown = ({ options = [], onChange, value, ...selectProps }) => {
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value ?? options[0]?.value);

    const handeOpen = () => {
        setOpen((prev) => !prev);
    }

    const handleSelect = (value) => {
        console.log("cc", value);
        onChange?.(value);
        setSelectedValue(value);

        setOpen(false);
    };



    return (
        <div className="custom-months-dropdown">
            <select

                value={selectedValue}
                onChange={(e) => handleSelect(e.target.value)}
                className="custom-months-dropdown__select"
                {...selectProps}
            >
                {options.map((opt, idx) => (
                    <option disabled={opt.disabled} key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}


            </select>

            <div className="custom-months-dropdown__menu">
                <div className="xuy1" onClick={handeOpen}>
                    <span>{options[value].label}</span>
                </div>
                <AnimatePresence>
                    {open && (
                        <Motion.div
                            className="xuy2__dropdown-mot"
                            initial={{ y: "-100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-100%" }}
                            transition={{
                                type: "tween",
                                ease: "easeInOut",
                                duration: 0.300
                            }}
                        // className={classes}
                        // onClick={(e) => e.stopPropagation()}
                        // {...props}
                        >
                            <div className="xuy2__dropdown">
                                {options.map((opt) => (
                                    <div
                                        key={opt.value}
                                        className="custom-months-dropdown__item"
                                        onClick={() => handleSelect(opt.value)}
                                    >
                                        <span>{opt.label}</span>
                                    </div>
                                ))}
                            </div>
                        </Motion.div>
                    )}
                </AnimatePresence>

            </div>




        </div>
    );
};

export default CustomMonthsDropdown;
