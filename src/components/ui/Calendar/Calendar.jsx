import "./Calendar.css";
import dayjs from "dayjs";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import MonthField from "../MonthField/MonthField";
import CustomMonthsDropdown from "./components/CustomMonthsDropdown";


const Calendar = () => {
    const [range, setRange] = useState({ from: undefined, to: undefined });

    const footer = range?.from
        ? range.to
            ? `Entery ${range.from.toLocaleDateString()} Leave ${range.to.toLocaleDateString()}.`
            : `You chose date start: ${range.from.toLocaleDateString()}.`
        : "Please choose full date.";

    return (
        <div className="calendar">
            <div className="calendar__content">


                <DayPicker
                    animate
                    navLayout="around"
                    mode="range"
                    selected={range}
                    onSelect={setRange}
                    numberOfMonths={2}
                    showOutsideDays={false}
                    fixedWeeks
                    captionLayout="dropdown"
                    startMonth={dayjs().toDate()}
                    endMonth={dayjs().add(2, "year").toDate()}
                    defaultMonth={new Date()}     // 👈 текущий месяц
                    today={new Date()}             // 👈 подсвечивает сегодняшний день
                    footer={footer}
                    components={{
                        // Замена стандартного dropdown для месяца
                        MonthsDropdown: CustomMonthsDropdown,
                    }}                // 👈 наш текст внизу
                />

                <pre>{JSON.stringify(range, null, 2)}</pre>
            </div>
        </div>
    );
};

export default Calendar;
