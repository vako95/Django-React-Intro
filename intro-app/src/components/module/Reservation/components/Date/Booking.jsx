const Booking = ({ checkIn, checkOut, setIsOpen }) => {
    const handleToggleCalendar = () => setIsOpen((prev) => !prev);

    return (
        <div className="reservation__booking">
            <div className="reservation__booking-picker">
                <div className="reservation__booking-entry" onClick={() => setIsOpen(true)}>
                    <div className="reservation__booking-entry-wrapper">
                        <i className="reservation__booking-entry-icon ri-calendar-line"></i>
                    </div>
                    <div className="reservation__booking-entry-heading">
                        <h6 className="reservation__booking-entry-title">Check In</h6>
                        <time className="reservation__booking-entry-booking">
                            {checkIn.toLocaleDateString()}
                        </time>
                    </div>
                </div>

                <div className="reservation__booking-leave" onClick={() => setIsOpen(true)}>
                    <div className="reservation__booking-leave-wrapper">
                        <i className="reservation__booking-leave-icon ri-calendar-line"></i>
                    </div>
                    <div className="reservation__booking-leave-heading">
                        <h6 className="reservation__booking-leave-title">Check Out</h6>
                        <time className="reservation__booking-leave-booking">
                            {checkOut.toLocaleDateString()}
                        </time>
                    </div>
                </div>

                <div className="reservation__booking-guests">
                    <div className="reservation__booking-guests-wrapper">
                        <i className="reservation__booking-guests-icon ri-calendar-line"></i>
                    </div>
                    <div className="reservation__booking-guests-heading">
                        <div className="reservation__booking-guests-content">
                            <h6 className="reservation__booking-guests-title">Guest</h6>
                        </div>
                        <div className="reservation__booking-guests-summary">
                            <span className="reservation__booking-guests-option">1 room</span>
                            <span className="reservation__booking-guests-option">1 Adult</span>
                            <span className="reservation__booking-guests-option">0 Child</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
