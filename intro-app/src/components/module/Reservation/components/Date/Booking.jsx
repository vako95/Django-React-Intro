import HoverButton from "../../../../ui/HoverButton/HoverButton";
import "./Booking.css";
import BookingCounter from "./components/BookingCounter/BookingCounter";
import Calendar from "../../../../ui/Calendar/Calendar";

const Booking = ({
    checkIn,
    checkOut,
    rooms,
    adults,
    children,



    counters,
    handleCollapseCalendar,
    handleToggleBooking,
    isBookingOpen,
    toogleCalendar,
    handleSelectCheckOut,
    calendarRef,
    handleCheckIn
}) => {



    return (
        <div className="reservation__booking">
            <div className="reservation__booking-picker">
                <div
                    onBlur={(e) => {
                        console.log(e);
                        if (!e.currentTarget.contains(e.relatedTarget)) {
                            handleCollapseCalendar(false);
                        }
                    }} className="reservation__booking-wrapper" tabIndex={0} onClick={handleCollapseCalendar}>
                    <div className="reservation__booking-entry">
                        <div className="reservation__booking-entry-wrapper">
                            <i className="reservation__booking-entry-icon ri-group-line"></i>
                        </div>
                        <div className="reservation__booking-entry-heading">
                            <h6 className="reservation__booking-entry-title">Check In</h6>
                            <time className="reservation__booking-entry-booking">
                                {checkIn?.format("DD.MM.YYYY") || "-"}
                            </time>
                        </div>
                    </div>

                    <div className="reservation__booking-leave">
                        <div className="reservation__booking-leave-wrapper">
                            <i className="reservation__booking-leave-icon ri-calendar-line"></i>
                        </div>
                        <div className="reservation__booking-leave-heading">
                            <h6 className="reservation__booking-leave-title">Check Out</h6>
                            <time className="reservation__booking-leave-booking">
                                {checkOut?.format("DD.MM.YYYY") || "-"}
                            </time>
                        </div>
                    </div>

                    {toogleCalendar && (
                        <Calendar
                            checkIn={checkIn}
                            onCheckInChange={handleCheckIn}
                            checkOut={checkOut}
                            onCheckOutChange={handleSelectCheckOut}
                        />
                    )}
                </div>


                <div className="reservation__booking-guests" onClick={handleToggleBooking}>
                    <div className="reservation__booking-guests-wrapper">
                        <i className="reservation__booking-guests-icon ri-user-line"></i>
                    </div>
                    <div className="reservation__booking-guests-heading">
                        <div className="reservation__booking-guests-content">
                            <h6 className="reservation__booking-guests-title">Guests</h6>
                        </div>
                        <div className="reservation__booking-guests-summary">
                            <div className="reservation__booking-guests-summary">
                                {counters.passengerList.map((item) => (
                                    <span key={item.label} className="reservation__booking-guests-option">
                                        {item.count} {item.label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    {isBookingOpen && (
                        <BookingCounter
                            counters={counters}
                        />
                    )}
                </div>




                <div className="reservation__booking-btn">
                    <HoverButton size="lg" color="gold" className="reservation__form-button">
                        Check
                    </HoverButton>
                </div>
            </div>

        </div>
    );
};

export default Booking;


// Murad Gazymagomedov
// 03:24
// tabIndex={0} // нужно, чтобы контейнер был фокусируемым
//                 onBlur={(e) => {
//                     if (!e.currentTarget.contains(e.relatedTarget)) {
//                         setOpen(false); // закрыть только если клик вне контейнера
//                     }
//                 }}