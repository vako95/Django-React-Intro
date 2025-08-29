
import HoverButton from "../../../../ui/HoverButton/HoverButton";
import Modal from "../../../../ui/ModalContainer/ModalContainer";

import "./Booking.css";
import BookingCounter from "./components/BookingCounter/BookingCounter";

const Booking = ({
    checkIn,
    checkOut,
    handleToggleCalendar,
    rooms,
    reservationHeight,
    bookingModal,
    handleToggleBooking,
    counters,
}) => {


    return (
        <div className="reservation__booking" >
            <div className="reservation__booking-picker">
                <div className="reservation__booking-entry" onClick={handleToggleCalendar}>
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

                <div className="reservation__booking-leave" onClick={handleToggleCalendar}>
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


                <div className="reservation__booking-guests" onClick={handleToggleBooking}>
                    <div className="reservation__booking-guests-wrapper">
                        <i className="reservation__booking-guests-icon ri-calendar-line"></i>
                    </div>
                    <div className="reservation__booking-guests-heading">
                        <div className="reservation__booking-guests-content">
                            <h6 className="reservation__booking-guests-title">Guest</h6>
                        </div>
                        <div className="reservation__booking-guests-summary">
                            <div className="div">
                                <span type="button" className="reservation__booking-guests-option">
                                    {rooms} rooms
                                </span>
                                <span className="reservation__booking-guests-option">1 Adult</span>
                                <span className="reservation__booking-guests-option">0 Child</span>
                            </div>
                        </div>
                    </div>
                </div>
                <HoverButton size="lg" color="gold" className="reservation__form-button">
                    Check
                </HoverButton>
            </div>

            <Modal position="right" height={reservationHeight} open={bookingModal} onClose={handleToggleBooking}>
                <BookingCounter
                    handleToggleBooking={handleToggleBooking}
                    counters={counters}

                />
            </Modal>


        </div>
    );
};

export default Booking;
