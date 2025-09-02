import { Container } from "@components/ui";
import { useState, useMemo } from "react";

import dayjs from "dayjs";
import "./Reservation.css";
import Booking from "./components/Date/Booking.jsx";

const Reservation = () => {
    const [checkIn, setCheckIn] = useState(dayjs());
    const [checkOut, setCheckOut] = useState(dayjs().add(1, "day"));

    const [toogleCalendar, setToggleCalendar] = useState(false);

    const [isBookingOpen, setIsBookingOpen] = useState(false);


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






    const handleToggleBooking = () => {

        setIsBookingOpen((prev) => !prev);
        setToggleCalendar(false)

        // setIsBookingOpen((prev) => {
        //     if (!prev) setToggleCalendar(false);
        //     return !prev;
        // });
    };

    const handleCollapseCalendar = () => {
        setToggleCalendar((prev) => !prev)
        setIsBookingOpen(false);

    };



    const [checkInClicked, setCheckInClicked] = useState(false);
    const handleCheckIn = (date) => {
        const isSameDate = date.isSame(checkIn, 'day');

        setCheckIn(date);
        setCheckOut(date.add(1, 'day'));

        if (isSameDate && checkInClicked) {
            setToggleCalendar(false);
            setCheckInClicked(false);
        } else {
            setCheckInClicked(true);
        }
    };



    const handleSelectCheckOut = (date) => {
        setCheckOut(date);
        if (checkIn) setToggleCalendar(false);
    };

    return (
        <div className="reservation">
            <Container>
                <form className="reservation__form">
                    <div className="reservation__container" >
                        <Booking
                            checkIn={checkIn}
                            checkOut={checkOut}
                            counters={counters}
                            handleCollapseCalendar={handleCollapseCalendar}
                            handleToggleBooking={handleToggleBooking}
                            isBookingOpen={isBookingOpen}
                            toogleCalendar={toogleCalendar}
                            handleSelectCheckOut={handleSelectCheckOut}
                            handleCheckIn={handleCheckIn}



                        />
                    </div>


                </form>
            </Container>
        </div>
    );
};

export default Reservation;
