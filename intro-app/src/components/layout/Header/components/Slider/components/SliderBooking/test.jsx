import "./SliderBooking.css";
import Container from '../../../../../../ui/Container/Container';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HoverButton from "../../../../../../ui/HoverButton/HoverButton";
import { useState, useRef } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from "dayjs";

const SliderBooking = () => {

    const [selectedDates, setSelectedDates] = useState({
        checkIn: dayjs(),
        checkOut: dayjs().add(1, 'day'),
    });
    const [visibleCalendar, setVisibleCalendar] = useState(false);
    const [calendarPosition, setCalendarPosition] = useState("bottom");

    const refs = {
        checkIn: useRef(null),
        checkOut: useRef(null),
    };


    const calcPosition = (ref) => {
        if (!ref.current) return "bottom";
        const rect = ref.current.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;
        return spaceBelow < 300 && spaceAbove > spaceBelow ? "top" : "bottom";
    };


    const toggleCalendar = (key) => {
        if (visibleCalendar === key) {
            setVisibleCalendar(false);
        } else {
            setCalendarPosition(calcPosition(refs[key]));
            setVisibleCalendar(key);
        }
    };


    const renderDatePicker = (key, label) => (
        <div
            ref={refs[key]}
            onClick={() => toggleCalendar(key)}
            className="slider__booking-check"
            style={{ cursor: "pointer", position: "relative" }}
        >
            <div className="slider__booking-calendar">
                <span className='slider__booking-calendar-icon'>
                    <CalendarTodayOutlinedIcon sx={{ fontSize: 24 }} />
                </span>
            </div>
            <div className="slider__booking-header">
                <span className="slider__booking-header-title">{label}</span>
                <time
                    className="slider__booking-header-date"
                    dateTime={selectedDates[key].format("YYYY-MM-DD")}
                >
                    {selectedDates[key].format("YYYY-MM-DD")}
                </time>
            </div>

            {visibleCalendar === key && (
                <div
                    className={`slider__booking-collapse slider__booking-collapse-top${calendarPosition}`}

                >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar
                            value={selectedDates[key]}
                            onChange={(newValue) => {
                                setSelectedDates(prev => ({ ...prev, [key]: newValue }));
                                setVisibleCalendar(null);
                            }}
                        />
                    </LocalizationProvider>
                </div>
            )}
        </div>
    );

    return (
        <div className="slider__booking">
            <Container>
                <div className="slider__booking-grid">
                    <div className="slider__booking-grid-container">
                        {renderDatePicker("checkIn", "Check-in")}
                        {renderDatePicker("checkOut", "Check Out")}

                        <div className="slider__booking-check">
                            <div className="slider__booking-calendar">
                                <span className='slider__booking-calendar-icon'>
                                    <PeopleAltIcon sx={{ fontSize: 26 }} />
                                </span>
                            </div>
                            <div className="slider__booking-header">
                                <span className="slider__booking-header-title">Guests</span>
                                <time className="slider__booking-header-date" dateTime="2025-08-08">2025-08-08</time>
                            </div>
                        </div>
                    </div>

                    <div className="slider__booking-check-button">
                        <div className="murad">
                            <div className="slider__booking-check-now">
                                <HoverButton>Check Now</HoverButton>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SliderBooking;
