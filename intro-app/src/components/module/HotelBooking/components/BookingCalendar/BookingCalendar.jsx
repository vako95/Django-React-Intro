import { Calendar, HoverButton } from "@components/ui"
import "./BookingCalendar.css";

const BookingCalendar = ({
    isCalendarOpen,
    setIsCalendarOpen,
    checkIn,
    checkOut,
    handleChangeChekIn,
    handleChangeChekOut,
}) => {
    return (
        <div className="hotel-booking__calendar">
            {isCalendarOpen && (
                <div className="hotel-booking__calendar-popup">
                    <Calendar
                        variant="fullScreen"
                        checkIn={checkIn}
                        checkOut={checkOut}
                        onCheckInChange={handleChangeChekIn}
                        onCheckOutChange={handleChangeChekOut}
                    />
                    <div className="hotel-booking__form-close-btn">
                        <HoverButton color="gold" onClick={() => setIsCalendarOpen(false)}>
                            <i className="hotel-booking__form-icon ri-close-line"></i>
                        </HoverButton>
                    </div>
                </div>
            )}
        </div>
    )
}

export default BookingCalendar;
