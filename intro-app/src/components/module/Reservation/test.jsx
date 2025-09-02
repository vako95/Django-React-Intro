import { Container } from "@components/ui";
import { useEffect, useRef, useState } from "react";
import Modal from "../../ui/ModalContainer/ModalContainer.jsx";
import HoverButton from "../../ui/HoverButton/HoverButton";
import Calendar from "../../ui/Calendar/Calendar.jsx";
import dayjs from "dayjs";
import "./Reservation.css";
import Booking from "./components/Date/Booking.jsx";
import { max, set } from "date-fns";


const Reservation = () => {
    const [checkIn, setCheckIn] = useState(dayjs());
    const [checkOut, setCheckOut] = useState(dayjs().add(1, "day"));
    const [openModal, setOpenModal] = useState(false);
    const reservationRef = useRef(null);
    const [reservationHeight, setReservationHeight] = useState(0)
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [guestCollapse, setGuestCollapse] = useState(false)
    const [bookingModal, setBookingModal] = useState(false);

    const handleToggleBooking = () => {
        setBookingModal(prev => !prev);
    };
    const handleToggleBookin = () => {
        setBookingModal(prev => !prev)
    }

    const increaseRooms = () => {
        setRooms((prev) => prev + 1);
    }

    const decreaseRooms = () => {
        setRooms(prev => Math.max(0, prev + 1))
    }

    useEffect(() => {
        if (reservationRef.current) {
            setReservationHeight(reservationRef.current.clientHeight)
        }
    }, [])

    // const updateGuests = (type, value) => {
    //     setGuests((prev) => ({
    //         ...prev,
    //         [type]: Math.max(0, prev[type] + value)
    //     }))
    // }
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
        if (checkIn) setOpenModal(false);
    };

    const handleToggle = () => {
        setOpenModal((prev) => !prev);
    };

    return (
        <div ref={reservationRef} className="reservation">
            <Container>
                <form className="reservation__form">
                    <div className="reservation__container">
                        <Booking
                            checkIn={checkIn}
                            checkOut={checkOut}
                            handleToggle={handleToggle} // для календаря
                            increaseRooms={increaseRooms}
                            rooms={rooms}
                            handleToggleBooking={handleToggleBookin} // для модалки гостей
                            guestCollapse={guestCollapse}
                            adults={adults}
                            setAdults={setAdults}
                            children={children}
                            setChildren={setChildren}
                            open={openModal}
                            bookingModal={bookingModal}
                            reservationHeight={reservationHeight}

                        />
                    </div>

                    <Modal position="left" height={reservationHeight} open={openModal} onClose={handleToggle}>
                        <Calendar
                            checkIn={checkIn}
                            onCheckInChange={handleChekIn}
                            checkOut={checkOut}
                            onCheckOutChange={handleSelectCheckOut}
                            onClose={handleToggle}
                        />
                    </Modal>
                </form>
            </Container>
        </div>
    );
};

export default Reservation;
