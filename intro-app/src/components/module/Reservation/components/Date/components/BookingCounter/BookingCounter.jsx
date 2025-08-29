import "./BookingCounter.css";

const BookingCounter = ({ counters }) => {
    return (
        <div className="reservation__booking-counter">
            {counters.map(({ label, count, onIncrease, onDecrease }) => (
                <div key={label} className="reservation__booking-counter-content">
                    <div className="reservation__booking-counter-heading">
                        <h6 className="reservation__booking-counter-label">
                            {label}
                        </h6>
                    </div>
                    <div className="reservation__booking-counter-controls">
                        <button onClick={onDecrease} className="reservation__booking-counter-decrease">
                            <i className="ri-subtract-line"></i>
                        </button>
                        <span className="reservation__booking-counter-value">{count}</span>
                        <button onClick={onIncrease} className="reservation__booking-counter-increase">
                            <i className="ri-add-line"></i>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BookingCounter;