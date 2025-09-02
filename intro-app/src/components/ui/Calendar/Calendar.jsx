import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import "./Calendar.css";

const Calendar = ({ checkIn, checkOut, onCheckInChange, onCheckOutChange, ...props }) => {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="calendar"  {...props}>
                <div className="calendar__picker" onClick={(e) => e.stopPropagation()}>
                    <div className="calendar__entrance">
                        <h6 className='calendar__title'>Check-in</h6>
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
                    <div className="calendar__leave">
                        <div className="calendar__item">
                            <h6 className='calendar__title'>Chek Out</h6>
                        </div>
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
        </LocalizationProvider>
    );
};

export default Calendar;
