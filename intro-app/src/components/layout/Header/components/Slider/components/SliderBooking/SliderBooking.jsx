import "./SliderBooking.css";
import Container from '../../../../../../ui/Container/Container';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HoverButton from "../../../../../../ui/HoverButton/HoverButton";

import { useState } from "react"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from "dayjs";

const SliderBooking = () => {

    const [calendarPosition, setCalendarPosition] = useState("bottom");

    const [checkinDate, setCheckinDate] = useState(dayjs());
    const [checkoutDate, setCheckoutDate] = useState(dayjs().add(1, "day"));



    const handleCheckinChange = (newDate) => {
        setCheckinDate(newDate);
        setActiveCalendar(null);
    };

    const handleCheckoutChange = (newDate) => {
        setCheckoutDate(newDate);
        setActiveCalendar(null);
    };

    return (
        <div className="slider__booking">
            <Container>
                <div className="slider__booking-grid">
                    <div className="slider__booking-grid-container">

                        <div className="slider__booking-check" onClick={() => toggleCalendar("checkin")}>
                            <div className="slider__booking-calendar">
                                <span className='slider__booking-calendar-icon'>
                                    <CalendarTodayOutlinedIcon sx={{ fontSize: 24 }} />
                                </span>
                            </div>
                            <div className="slider__booking-header">
                                <span className="slider__booking-header-title">Check-in</span>
                                <time
                                    className="slider__booking-header-date"
                                    dateTime={checkinDate.format("YYYY-MM-DD")}
                                >
                                    {checkinDate.format("YYYY-MM-DD")}
                                </time>
                            </div>

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateCalendar
                                    value={checkinDate}

                                />
                            </LocalizationProvider>
                        </div>

                    </div>


                    <div className="slider__booking-check" onClick={() => toggleCalendar("checkout")}>
                        <div className="slider__booking-calendar">
                            <span className='slider__booking-calendar-icon'>
                                <CalendarTodayOutlinedIcon sx={{ fontSize: 24 }} />
                            </span>
                        </div>
                        <div className="slider__booking-header">
                            <span className="slider__booking-header-title">Check Out</span>
                            <time
                                className="slider__booking-header-date"
                                dateTime={checkoutDate.format("YYYY-MM-DD")}
                            >
                                {checkoutDate.format("YYYY-MM-DD")}
                            </time>
                        </div>
                        {activeCalendar === "checkout" && (
                            <div className={`slider__booking-collapse slider__booking-collapse-${calendarPosition}`}
                                onClick={(e) => e.stopPropagation()}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateCalendar
                                        value={checkoutDate}

                                    />
                                </LocalizationProvider>
                            </div>
                        )}
                    </div>





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
                            <HoverButton>
                                Check Now
                            </HoverButton>
                        </div>
                    </div>
                </div>

        </div>
            </Container >
        </div >
    )
}

export default SliderBooking;
