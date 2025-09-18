import { Container, BackdropContainer, DecoratedHeading } from "@components/ui";
import { useMemo, useState } from "react";
import bgBooking from "./assets/img/bg-booking.jpeg";
import bgShape from "./assets/img/bk-shape.png";

import dayjs from "dayjs";
import BookingForm from "./components/BookingForm/BookingForm";
import BookingCalendar from "./components/BookingCalendar/BookingCalendar";
import "./HotelBooking.css";
import BookingAside from "./components/BookingAside/BookingAside";


const Availability = () => {
    const [checkIn, setChekIn] = useState(dayjs());
    const [checkOut, setChekOut] = useState(dayjs().add(1, "day"));
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [isRoomsOpen, setIsRoomsOpen] = useState(false);
    const [isGuestsOpen, setIsGuestsOpen] = useState(false);
    const [clickDate, setClickDate] = useState(false);
    const [rooms, setRooms] = useState({
        name: "Rooms",
        count: 1,
        min: 1,
        max: 10,
    });



    const onIncreaseRooms = () => {
        setRooms((prev) => ({
            ...prev,
            count: Math.min(prev.count + 1, prev.max)
        }))
    };

    const onDecreaseRooms = () => {
        setRooms((prev) => ({
            ...prev,
            count: Math.max(prev.count - 1, prev.min)
        }))
    };

    const [passengers, setPassengers] = useState([
        { label: "adults", count: 1, min: 1, max: 10 },
        { label: "children", count: 0, min: 0, max: 10 }
    ]);

    const onIncrease = (label) => {
        setPassengers((prev) =>
            prev.map((item) =>
                item.label === label
                    ? { ...item, count: Math.min(item.count + 1, item.max) }
                    : item
            ))
    };

    const onDecrease = (label) => {
        setPassengers((prev) =>
            prev.map((item) =>
                item.label === label
                    ? { ...item, count: Math.max(item.count - 1, item.min) }
                    : item
            ))
    };

    const toggleRoom = () => {
        setIsRoomsOpen((prev) => !prev)
        setIsGuestsOpen(false)
    }

    const toggleGuest = () => {
        setIsGuestsOpen((prev) => !prev);
        setIsRoomsOpen(false)
    }

    const toggleCalendar = () => {
        setIsCalendarOpen(true);
        setIsRoomsOpen(false);
        setIsGuestsOpen(false);
    };

    const handleChangeChekIn = (date) => {
        const isSameDay = date.isSame(checkIn, "day")
        setChekIn(date);
        setChekOut(date.add(1, 'day'));
        if (isSameDay && clickDate) {
            setClickDate(false);
            setIsCalendarOpen(false)
        } else {
            setClickDate(true);
        }
    };

    const handleChangeChekOut = (date) => {
        setChekOut(date);
        setIsCalendarOpen(false)
    };

    const controls = useMemo(() => ({
        controls: { onDecrease, onIncrease },
        passengersList: passengers,
    }), [passengers]);

    return (

        <div className="hotel-booking">
            <BackdropContainer backdropHeight="100%" backdrop={bgBooking}>
                <BackdropContainer backdropWidth="50%" backdropHeight="100%" backdrop={bgShape}>
                    <Container>
                        <div className="hotel-booking__container">
                            <article className="hotel-booking__columns hotel-booking__columns--left">
                                <div className="hotel-booking__form">
                                    <div className="hotel-booking__form-heading">
                                        <DecoratedHeading
                                            className="hotel-booking__form-decorate"
                                            position="start"
                                            showLeftIcon={false}
                                            showRightIcon={false}
                                            title="ROOMS & SUITES"
                                            subtitle="Hotel Booking"
                                        />
                                    </div>
                                    <BookingForm
                                        toggleCalendar={toggleCalendar}
                                        checkIn={checkIn}
                                        checkOut={checkOut}
                                        rooms={rooms}
                                        setIsRoomsOpen={setIsRoomsOpen}
                                        toggleRoom={toggleRoom}
                                        isRoomsOpen={isRoomsOpen}
                                        onDecreaseRooms={onDecreaseRooms}
                                        onIncreaseRooms={onIncreaseRooms}
                                        toggleGuest={toggleGuest}
                                        setIsGuestsOpen={setIsGuestsOpen}
                                        controls={controls}
                                        isGuestsOpen={isGuestsOpen}
                                        onIncrease={onIncrease}
                                        onDecrease={onDecrease}
                                        setIsCalendarOpen={setIsCalendarOpen}
                                    />
                                </div>
                            </article>
                            <article className="hotel-booking__columns hotel-booking__columns--right">
                                <BookingAside />
                            </article>
                        </div>
                    </Container >
                    <article className="hotel-booking__calendar-container" tabIndex={-1}
                        onBlur={(e) => {
                            if (!e.currentTarget.contains(e.relatedTarget)) {
                                setIsCalendarOpen(false);
                            }
                        }}>
                        <BookingCalendar
                            isCalendarOpen={isCalendarOpen}
                            checkIn={checkIn}
                            checkOut={checkOut}
                            handleChangeChekIn={handleChangeChekIn}
                            handleChangeChekOut={handleChangeChekOut}
                            setIsCalendarOpen={setIsCalendarOpen}
                        />
                    </article>
                </BackdropContainer >
            </BackdropContainer >
        </div >

    )
};

export default Availability;
