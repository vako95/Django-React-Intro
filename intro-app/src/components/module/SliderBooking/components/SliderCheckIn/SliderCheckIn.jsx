import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import "./SliderCheckIn.css";
import { useState } from 'react';

const SliderCheckIn = () => {
    const [checkInCollapse, setCheckInCollapse] = useState(false);
    const [checOutCollapse, setchecOutCollapse] = useState(false);
    const [selectedInDate, setSelectedInDate] = useState(dayjs());
    const [selectedOutDate, setSelectedOutDate] = useState(dayjs());

    const toggleCheckInCalendar = (e) => {
        const targetId = e.target.id;
        if (targetId === "collapse" || e.target.getAttribute('aria-selected') === "true") {
            setCheckInCollapse(false);
        } else if (e.currentTarget.id === "checkIn" || e.currentTarget.id === "checkOut") {
            setCheckInCollapse(true);
            setchecOutCollapse(true)
        }
    };

    const checkInDate = (newDate) => {
        setSelectedInDate(newDate);
    }
    const checkOutDate = (newDate) => {
        setSelectedOutDate(newDate);
    }

    return (
        <>
            <div className="slider__calendar-flex">
                <div id='checkIn' className="slider__booking-calendar" onClick={toggleCheckInCalendar}>
                    <div className="slider__booking-check-in">
                        <div className="slider__booking-check-in-calendar">
                            <i className="ri-calendar-line"></i>
                        </div>
                        <div className="slider__booking-check-in-heading">
                            <h6 className="slider__booking-check-in-title">Check In</h6>
                            <time className="slider__booking-check-in-time" dateTime={selectedInDate.format('YYYY-MM-DD')}>
                                {selectedInDate.format('DD.MM.YYYY')}
                            </time>
                        </div>
                    </div>
                    <div id='checkOut' className="slider__booking-check-out" onClick={toggleCheckInCalendar}>
                        <div className="slider__booking-check-out-calendar">
                            <i className="ri-calendar-line"></i>
                        </div>
                        <div className="slider__booking-check-out-heading">
                            <h6 className="slider__booking-check-out-title">
                                Check Out
                            </h6>
                            <time className="slider__booking-check-in-time" dateTime={selectedOutDate.format('YYYY-MM-DD')}>
                                {selectedOutDate.format('DD.MM.YYYY')}
                            </time>
                        </div>
                    </div>

                </div>
                {checkInCollapse && checOutCollapse && (
                    <div className="collapsed" id="collapse">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar
                                id="calendar"
                                className='collapsed__calendar'
                                value={selectedInDate}
                                onChange={checkInDate}
                            />
                            <DateCalendar
                                id="calendar2"
                                className='collapsed__calendar-out'
                                value={selectedOutDate}
                                onChange={checkOutDate}
                            />
                        </LocalizationProvider>
                    </div>
                )}
            </div>
        </>
    )
}

export default SliderCheckIn;
