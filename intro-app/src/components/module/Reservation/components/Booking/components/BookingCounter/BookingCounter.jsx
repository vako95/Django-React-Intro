import "./BookingCounter.css";

const BookingCounter = ({ counters }) => {
    return (
        <div className="reservation__booking-counter" onClick={(e) => e.stopPropagation()}>
            {counters.passengerList.map(({ label, count }) => (
                <div key={label} className="reservation__booking-counter-content">
                    <div className="reservation__booking-counter-heading">
                        <h6 className="reservation__booking-counter-label">
                            {label}
                        </h6>
                    </div>
                    <div className="reservation__booking-counter-controls">
                        <button type="button" onClick={() => counters.controls.onDecrease(label)} className="reservation__booking-counter-decrease">
                            <i className="ri-subtract-line"></i>
                        </button>
                        <span className="reservation__booking-counter-value">{count}</span>
                        <button type="button" onClick={() => counters.controls.onIncrease(label)} className="reservation__booking-counter-increase">
                            <i className="ri-add-line"></i>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BookingCounter;