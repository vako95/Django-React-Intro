import { Container } from "../../../../../../ui";
import "./SliderBooking.css";

const SliderBooking = () => {
    return (
        <div className="slider__booking">
            <Container>
                <div className="slider__booking-content">
                    <div className="slider__booking-check-in">
                        <div className="slider__booking-check-in-calendar">
                            <i className="slider__booking-check-in-icon">icon</i>
                        </div>
                        <div className="slider__booking-check-in-heading">
                            <h6 className="slider__booking-check-in-title">
                                Check In
                            </h6>
                            <time className="slider__booking-check-in-time" dateTime="25-25-25">
                                25-25-25
                            </time>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SliderBooking;