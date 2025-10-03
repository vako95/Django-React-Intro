import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { IoIosCloseCircleOutline } from "react-icons/io";

import dayjs from 'dayjs';
import clsx from 'clsx';
import "./Calendar.css";

const Calendar = ({ checkIn, checkOut, onCheckInChange, onCheckOutChange, variant, closeButton = false, onClose, ...props }) => {
    const classes = clsx(
        "calendar",
        variant && `calenar--${variant}`

    )
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <section className={classes}  {...props} onClick={(e) => e.stopPropagation()}>
                <div className="calendar__picker" >
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
                                    value={checkIn}
                                    onChange={onCheckInChange}
                                    minDate={dayjs()}
                                    sx={{
                                        "& .MuiPickersDay-root": {
                                            color: "#aa8453",
                                            borderRadius: "0px"
                                        },
                                        "& .MuiPickersCalendarHeader-label": {
                                            color: "#aa8453",
                                        },
                                        "& .Mui-selected": {
                                            backgroundColor: "#aa8453",
                                            color: "#000",
                                        },
                                        "& .MuiDayCalendar-weekDayLabel": {
                                            color: "#5c5c5c !important",

                                        },
                                        "& .Mui-disabled": {
                                            color: "#5c5c5c !important",

                                        },
                                        "& .MuiPickersDay-root:hover": {
                                            color: "#000",
                                            border: "2px solid #aa8453",
                                            backgroundColor: "#aa8453",
                                        },
                                        "& .MuiPickersDay-root.Mui-selected": {
                                            backgroundColor: "#aa8453 !important",

                                        },
                                        "& .MuiPickersArrowSwitcher-button": {
                                            color: "#aa8453",
                                        },
                                        "& .MuiPickersArrowSwitcher-button:hover": {
                                            backgroundColor: "#aa845310",
                                            color: "#000",
                                        },
                                        "& .MuiPickersCalendarHeader-switchViewButton": {
                                            color: "#aa8453",
                                        },
                                        "& .MuiYearCalendar-root .MuiYearCalendar-button": {
                                            color: "#aa8453",
                                        },
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="calendar__leave">
                        <div className="calendar__leave-container">
                            <div className="calendar__leave-wrapper">
                                <DateCalendar
                                    value={checkOut}
                                    onChange={onCheckOutChange}
                                    minDate={checkIn ? checkIn.add(1, "day") : dayjs()}
                                    sx={{
                                        "& .MuiPickersDay-root": {
                                            color: "#aa8453",
                                            borderRadius: "0px"
                                        },
                                        "& .MuiPickersCalendarHeader-label": {
                                            color: "#aa8453",
                                        },
                                        "& .Mui-selected": {
                                            backgroundColor: "#aa8453",
                                            color: "#000",
                                        },
                                        "& .MuiDayCalendar-weekDayLabel": {
                                            color: "#5c5c5c !important",

                                        },
                                        "& .Mui-disabled": {
                                            color: "#5c5c5c !important",

                                        },
                                        "& .MuiPickersDay-root:hover": {
                                            color: "#000",
                                            border: "2px solid #aa8453 !import",
                                            backgroundColor: "#aa8453",
                                        },
                                        "& .MuiPickersDay-root.Mui-selected": {
                                            backgroundColor: "#aa8453 !important",

                                        },
                                        "& .MuiPickersArrowSwitcher-button": {
                                            color: "#aa8453",
                                        },
                                        "& .MuiPickersArrowSwitcher-button:hover": {
                                            backgroundColor: "#aa845310",
                                            color: "#000",
                                        },
                                        "& .MuiPickersCalendarHeader-switchViewButton": {
                                            color: "#aa8453",
                                        },
                                        "& .MuiYearCalendar-root .MuiYearCalendar-button": {
                                            color: "#aa8453 !important",
                                        },
                                    }}
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
