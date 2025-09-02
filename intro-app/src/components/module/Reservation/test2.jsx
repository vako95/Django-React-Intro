import { Container } from "@components/ui";
import { useEffect, useRef, useState } from "react";
import Modal from "../../ui/ModalContainer/ModalContainer.jsx";
import Calendar from "../../ui/Calendar/Calendar.jsx";
import dayjs from "dayjs";
import "./Reservation.css";
import Booking from "./components/Date/Booking.jsx";
import useOutsideAndScrollClose from "../../../hooks/useOutsideAndScrollClose.jsx";

const Reservation = () => {
    const [checkIn, setCheckIn] = useState(dayjs());
    const [checkOut, setCheckOut] = useState(dayjs().add(1, "day"));

    const [calendarModal, setcalendarModal] = useState(false);


    const [bookingModal, setBookingModal] = useState(false);



    const [reservationHeight, setReservationHeight] = useState(0);
    const reservationRef = useRef(null);

    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    const counters = [
        {
            label: "Rooms",
            count: rooms,
            onIncrease: () => setRooms((prev) => prev + 1),
            onDecrease: () => setRooms((prev) => Math.max(0, prev - 1)),
        },
        {
            label: "Adults",
            count: adults,
            onIncrease: () => setAdults((prev) => prev + 1),
            onDecrease: () => setAdults((prev) => Math.max(0, prev - 1)),
        },
        {
            label: "Children",
            count: children,
            onIncrease: () => setChildren((prev) => prev + 1),
            onDecrease: () => setChildren((prev) => Math.max(0, prev - 1)),
        },
    ]
    const [wrapperOpen, setWrapperOpen] = useState(false);



    const wrapperClose = () => setWrapperOpen(false)

    const { ref, modalRef } = useOutsideAndScrollClose(wrapperClose)



    const handleToggleBooking = () => {
        setBookingModal(prev => !prev);
    };

    useEffect(() => {
        if (reservationRef.current) {
            setReservationHeight(reservationRef.current.clientHeight)
        }
    }, [])



    const handleChekIn = (date) => {
        setCheckIn(date);
        if (date.isSame(date.endOf("month"), "day")) {
            setCheckOut(date.add(1, "day"));
        } else {
            setCheckOut(date.add(1, "day"));
        }
    };

    const handleSelectCheckOut = (date) => {
        setCheckOut(date);
        if (checkIn) setcalendarModal(false);
    };

    const handleToggleCalendar = () => {
        setcalendarModal((prev) => !prev);
    };

    return (
        <div ref={reservationRef} className="reservation">
            <Container>
                <form className="reservation__form">
                    <div className="reservation__container">
                        <Booking
                            checkIn={checkIn}
                            checkOut={checkOut}
                            handleToggleCalendar={handleToggleCalendar}
                            reservationHeight={reservationHeight}
                            calendarModal={calendarModal}
                            bookingModal={bookingModal}
                            handleToggleBooking={handleToggleBooking}
                            counters={counters}
                            modalRef={ref}
                        />
                    </div>


                    {wrapperOpen && (
                        <div ref={dropdownRef} className="rr"></div>
                    )}
                    <Modal ref={modalRef} position="left" height={reservationHeight} open={calendarModal} onClose={handleToggleCalendar}>
                        <Calendar
                            checkIn={checkIn}
                            onCheckInChange={handleChekIn}
                            checkOut={checkOut}
                            onCheckOutChange={handleSelectCheckOut}
                            onClose={handleToggleCalendar}
                        />
                    </Modal>

                </form>
            </Container>
        </div>
    );
};

export default Reservation;
