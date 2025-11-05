import "./BookingFrame.css";


const BookingFrame = ({ children }) => {

    return (
        <div className="booking-frame">
            <div className="booking-frame__heading">
                <h2 className="booking-frame__heading-title">
                    Reserve:
                </h2>
                <span className="booking-frame__heading-subtitle">
                    From <span className="booking-frame__heading-subtitle-price">$90</span>night
                </span>
            </div>
            <div className="booking-frame__form">
                <div className="booking-frame__form-field">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BookingFrame;