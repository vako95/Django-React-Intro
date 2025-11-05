import "./Calendar.css";
import dayjs from "dayjs";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import CustomMonthsDropdown from "./components/CustomMonthsDropdown/CustomMonthsDropdown.jsx";
import CustomYearsDropdown from "./components/CustomYearsDropdown/CustomYearsDropdown.jsx";

const Calendar = ({ range, setRange }) => {


    const footer = range?.from ? (
        range.to ? (
            <p className="calendar__footer">
                Entery: <span className="calendar__footer-date">{range.from.toLocaleDateString()}</span> &nbsp;
                Leave: <span className="calendar__footer-date">{range.to.toLocaleDateString()}</span>
            </p>
        ) : (
            <p className="calendar__footer">
                You chose start date:{" "}
                <span className="calendar__footer-date">{range.from.toLocaleDateString()}</span>
            </p>
        )
    ) : (
        <p className="calendar__footer calendar__footer--empty">
            Please choose full date.
        </p>
    );


    return (
        <div className="calendar" onClick={(e) => e.stopPropagation()}>
            <div className="calendar__content">
                <DayPicker
                    onPrevClick={true}
                    classNames={{ disabled: "my-disabled_style" }}
                    animate
                    navLayout="around"
                    mode="range"
                    selected={range}
                    min={1}
                    max={range.to}
                    onSelect={setRange}
                    numberOfMonths={2}
                    showOutsideDays={false}
                    fixedWeeks
                    captionLayout="dropdown"
                    startMonth={dayjs().toDate()}
                    endMonth={dayjs().add(2, "year").toDate()}
                    defaultMonth={new Date()}
                    today={new Date()}
                    footer={footer}

                    disabled={{ before: new Date() }}
                    components={{
                        MonthsDropdown: CustomMonthsDropdown,
                        YearsDropdown: CustomYearsDropdown,
                    }}
                />
            </div>
        </div>
    );
};

export default Calendar;
