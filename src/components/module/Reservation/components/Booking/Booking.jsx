import HoverButton from "../../../../ui/HoverButton/HoverButton";
import "./Booking.css";
import BookingCounter from "./components/BookingCounter/BookingCounter";
import { Calendar } from "@components/ui"
import { useCalendarControl } from "../../../../../hooks/useCalendarControl";
import { useState, useMemo } from "react";

const Booking = () => {
    const {
        checkIn,
        checkOut,
        toggleCalendar,
        handleChangeCheckIn,
        handleChangeCheckOut,
        handleCollapseCalendar,
        handleToggleBooking,
        isBookingOpen
    } = useCalendarControl();

    const [passenger, setPassenger] = useState([
        { label: "rooms", count: 1, min: 1, max: 10 },
        { label: "adults", count: 1, min: 1, max: 10 },
        { label: "children", count: 0, min: 0, max: 10 },
    ]);

    const onIncrease = (label) => {
        setPassenger((prev) =>
            prev.map((item) =>
                item.label === label
                    ? {
                        ...item,
                        count: Math.min(item.count + 1, item.max),
                    }
                    : item
            )
        );
    };

    const onDecrease = (label) => {
        setPassenger((prev) =>
            prev.map((item) =>
                item.label === label
                    ? {
                        ...item,
                        count: Math.max(item.count - 1, item.min),
                    }
                    : item
            )
        );
    };

    const counters = useMemo(() => ({
        controls: {
            onIncrease,
            onDecrease,
        },
        passengerList: passenger,
    }), [passenger]);


    console.log("xuyna", checkIn)
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

                    {/* {!toggleCalendar && (  )} */}
                    <div className="zz">
                        <div className="rr-content">
                            <Calendar
                                value={checkIn}
                                onChange={handleChangeCheckIn}
                            />
                        </div>
                        {/* <div className="rr-content">
                            <Calendar
                                value={checkOut}
                                onChange={handleChangeCheckOut}
                            />
                        </div> */}
                    </div>



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
