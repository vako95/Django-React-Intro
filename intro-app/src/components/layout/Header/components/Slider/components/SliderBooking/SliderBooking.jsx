import { Container } from "../../../../../../ui";
import "./SliderBooking.css";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import HoverLink from "../../../../../../ui/HoverLink/HoverLink";
import SliderCheckIn from "./components/SliderCheckIn/SliderCheckIn";

const SliderBooking = () => {
    return (
        <div className="slider__booking">
            <Container>
                <div className="slider__booking-content">
                    <div className="slider__booking-content-left">
                        <SliderCheckIn />

                        <div className="slider__booking-guest">
                            <div className="slider__booking-guest-quantity">
                                <i class="ri-group-line"></i>
                            </div>
                            <div className="slider__booking-guest-heading">
                                <div className="slider__booking-guest-content">
                                    <h6 className="slider__booking-guest-title">
                                        Guests
                                    </h6>
                                </div>
                                <div className="slider__booking-guest-summary">
                                    <span className="slider__booking-guest-option">1 room,</span>
                                    <span className="slider__booking-guest-option">1 Adult,</span>
                                    <span className="slider__booking-guest-option">0 Child</span>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="slider__booking-content-right">
                        <div className="slider__booking-link">
                            <HoverLink
                                size="middle"
                            >
                                Check Now
                            </HoverLink>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}
{/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateCalendar />
                            </LocalizationProvider> */}
export default SliderBooking;