// Calendar.jsx
import { DateRangePicker } from 'react-date-range';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function Calendar({ checkIn, checkOut, setCheckIn, setCheckOut, setIsOpen }) {
    const handleChange = (ranges) => {
        const { startDate, endDate } = ranges.selection;

        setCheckIn(startDate);
        setCheckOut(endDate);

        // Закрываем ТОЛЬКО когда обе даты выбраны
        if (startDate && endDate && startDate.getTime() !== endDate.getTime()) {
            setIsOpen(true);
        }
    };

    return (
        <DateRangePicker
            ranges={[{ startDate: checkIn, endDate: checkOut, key: "selection" }]}
            onChange={handleChange}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            direction="horizontal"
            showDateDisplay={true}



        />
    );
}
