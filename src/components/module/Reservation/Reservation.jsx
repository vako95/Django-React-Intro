import { Container } from "@components/ui";
import dayjs from "dayjs";
import "./Reservation.css";
import Booking from "./components/Booking/Booking.jsx";

const Reservation = () => {

    return (
        <section className="reservation">
            <Container>
                <form className="reservation__form">
                    <div className="reservation__container">
                        <Booking />
                    </div>
                </form>
            </Container>
        </section>
    );
};

export default Reservation;
