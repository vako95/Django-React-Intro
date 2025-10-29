import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { IoIosCloseCircleOutline } from "react-icons/io";

import dayjs from 'dayjs';
import clsx from 'clsx';
import "./Calendar.css";

const Calendar = ({ value, onChange, variant, closeButton = false, onClose, ...props }) => {
    const classes = clsx(
        "calendar",
        variant && `calendar--${variant}`,
    )
    return (

        <LocalizationProvider dateAdapter={AdapterDayjs} >
            <section className={classes}  {...props} onClick={(e) => e.stopPropagation()}>
                <div className="calendar__picker">
                    {closeButton &&
                        <button
                            type="button"
                            className="calendar__close-button"
                            onClick={onClose}
                        >
                            <IoIosCloseCircleOutline className='calendar__close-icon' />
                        </button>
                    }
                    <div className="calendar__entrance">
                        <div className="calendar__leave-container">
                            <div className="calendar__leave-wrapper">
                                <div className="calendar__item">
                                    <h6 className='calendar__title'>Check-in</h6>
                                </div>
                                <DateCalendar
                                    value={value}
                                    onChange={onChange}
                                    minDate={dayjs()}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </LocalizationProvider>

    );
};

export default Calendar;
