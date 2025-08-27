import { Container } from "@components/ui";
import { useEffect, useState } from "react";
import HoverButton from "../../ui/HoverButton/HoverButton";
import "./Reservation.css";
import Calendar from "../../ui/Calendar/Calendar";
import Booking from "./components/Date/Booking";

const Reservation = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [checkIn, setCheckIn] = useState(new Date());
    const [checkOut, setCheckOut] = useState(new Date());



    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [isOpen]);


    return (
        <div className="reservation" >
            <Container>
                <form className="reservation__form" action="">
                    <div className="reservation__container">
                        <Booking checkIn={checkIn}
                            checkOut={checkOut}
                            setIsOpen={setIsOpen} />


                        <HoverButton size="lg" color="gold" className="reservation__form-button">
                            Check
                        </HoverButton>
                    </div>
                    <div className="reservation__container">
                        {isOpen && (
                            <div className="cc">
                                <div className="xuyezz">
                                    {isOpen && (
                                        <Calendar
                                            checkIn={checkIn}
                                            checkOut={checkOut}
                                            setCheckIn={setCheckIn}
                                            setCheckOut={setCheckOut}
                                            setIsOpen={setIsOpen}
                                        />
                                    )}

                                    <button onClick={() => setIsOpen(false)}>Close</button>
                                </div>
                            </div>
                        )}
                    </div>


                </form>
            </Container>
        </div>
    )
}

export default Reservation;