import HoverButton from "../../../../ui/HoverButton/HoverButton";
import "./Booking.css";
import BookingCounter from "./components/BookingCounter/BookingCounter";
import Calendar from "../../../../ui/Calendar/Calendar";

const Booking = ({
    checkIn,
    checkOut,

    counters,
    handleCollapseCalendar,
    handleToggleBooking,
    isBookingOpen,
    toogleCalendar,
    handleSelectCheckOut,
    handleCheckIn
}) => {



    return (
        <div className="booking">
            <div className="booking-picker">
                <div
                    onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget)) {
                            handleCollapseCalendar(false);
                        }
                    }} className="booking-wrapper" tabIndex={0} onClick={handleCollapseCalendar}>
                    <div className="booking-entry">
                        <div className="booking-entry-wrapper">
                            <i className="booking-entry-icon ri-group-line"></i>
                        </div>
                        <div className="booking-entry-heading">
                            <h6 className="booking-entry-title">Check In</h6>
                            <time className="booking-entry-booking">
                                {checkIn?.format("DD.MM.YYYY") || "-"}
                            </time>
                        </div>
                    </div>

                    <div className="booking-leave">
                        <div className="booking-leave-wrapper">
                            <i className="booking-leave-icon ri-calendar-line"></i>
                        </div>
                        <div className="booking-leave-heading">
                            <h6 className="booking-leave-title">Check Out</h6>
                            <time className="booking-leave-booking">
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

                <div
                    className="booking-guests-container"
                    tabIndex={0}
                    onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget)) {
                            handleCollapseCalendar(false);
                        }
                    }}
                >
                    <div className="booking-guests" tabIndex={1}
                        onBlur={(e) => {
                            if (!e.currentTarget.contains(e.relatedTarget)) {
                                handleCollapseCalendar(false);
                            }
                        }}
                        onClick={handleToggleBooking}>
                        <div className="booking-guests-wrapper">
                            <i className="booking-guests-icon ri-user-line"></i>
                        </div>
                        <div className="booking-guests-heading">
                            <div className="booking-guests-content">
                                <h6 className="booking-guests-title">Guests</h6>
                            </div>
                            <div className="booking-guests-summary">
                                <div className="booking-guests-summary">
                                    {counters.passengerList.map((item) => (
                                        <span key={item.label} className="booking-guests-option">
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
                </div>




                <div className="booking-btn">
                    <HoverButton size="lg" color="gold" className="booking__form-button">
                        Check
                    </HoverButton>
                </div>
            </div>

        </div>
    );
};

export default Booking;
