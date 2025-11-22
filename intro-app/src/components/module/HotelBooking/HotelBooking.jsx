import { Container, BackdropContainer, DecoratedHeading } from "@components/ui";
import { useState } from "react";
import bgBooking from "./assets/img/bg-booking.jpeg";
import bgShape from "./assets/img/bk-shape.png";

// import BookingForm from "./components/BookingForm/BookingForm";
// import BookingCalendar from "./components/BookingCalendar/BookingCalendar";
import BookingAside from "./components/BookingAside/BookingAside";
import "./HotelBooking.css";


import { HoverButton, BookingFrame, BookingFrameInput, BookingOrder, Calendar, Quantity } from "@components/ui";
import { TfiLineDashed } from "react-icons/tfi";
import dayjs from "dayjs"
import { useCalendarControl } from "@hooks";
const Availability = () => {
    const [range, setRange] = useState({ from: dayjs().toDate(), to: undefined });
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(1);
    const [childs, setChilds] = useState(0);

    const { ref,
        isOpen,
        toggleDropdown,
    } = useCalendarControl();

    const handleSelectRange = (newRange) => {
        if (!newRange) return;
        setRange(newRange);
    };

    return (

        <div className="hotel-booking">
            <BackdropContainer backdropHeight="100%" backdrop={bgBooking}>
                <BackdropContainer backdropWidth="50%" backdropHeight="100%" backdrop={bgShape}>
                    <Container>
                        <div className="hotel-booking__container">
                            <article className="hotel-booking__columns hotel-booking__columns--left">
                                <form className="hotel-booking__form">
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
                                    <div className="hotel-booking__form-container">
                                        <BookingFrame >
                                            <div className="hotel-booking__form-content" ref={ref} >
                                                <div className="hotel-booking__form-list">
                                                    <div className="hotel-booking__form-item" onClick={() => toggleDropdown("calendar")}>
                                                        <div className="hotel-booking__form-item-heading">
                                                            <h2 className="hotel-booking__form-item-heading-title">
                                                                Check In
                                                            </h2>
                                                        </div>
                                                        <div className="hotel-booking__form-item-field">
                                                            <BookingFrameInput
                                                                onChange={handleSelectRange}
                                                                value={range.from ? range.from.toISOString().slice(0, 10) :
                                                                    <span className="hotel-booking__form-item-field-icon">
                                                                        <TfiLineDashed />
                                                                    </span>
                                                                }
                                                                isOpen={isOpen === "calendar"}
                                                            />
                                                        </div>

                                                    </div>
                                                    <div className="hotel-booking__form-item" onClick={() => toggleDropdown("calendar")}>
                                                        <div className="hotel-booking__form-item-heading">
                                                            <h2 className="hotel-booking__form-item-heading-title">
                                                                Check Out
                                                            </h2>
                                                        </div>
                                                        <div className="hotel-booking__form-item-field">
                                                            <BookingFrameInput
                                                                onChange={handleSelectRange}
                                                                value={range.to ? range.to.toISOString().slice(0, 10) :
                                                                    <span className="hotel-booking__form-item-field-icon">
                                                                        <TfiLineDashed />
                                                                    </span>
                                                                }
                                                                isOpen={isOpen === "calendar"}
                                                            />
                                                            {isOpen === "calendar" && (
                                                                <div className="hotel-booking__form-dropdown-calendar">
                                                                    <Calendar months={1} range={range} setRange={handleSelectRange} />
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="hotel-booking__form-item">
                                                        <div className="hotel-booking__form-item-heading">
                                                            <h2 className="hotel-booking__form-item-heading-title">
                                                                Rooms
                                                            </h2>
                                                        </div>
                                                        <div className="hotel-booking__form-item-field" onClick={() => toggleDropdown("rooms")}>
                                                            <BookingFrameInput
                                                                // title="Rooms"
                                                                subtitle="Rooms"
                                                                value={rooms}
                                                                isOpen={isOpen === "rooms"}
                                                            />
                                                            {isOpen === "rooms" && (
                                                                <div className="hotel-booking__form-field-dropdown-quantity">
                                                                    <Quantity
                                                                        className="hotel-booking__form-field-dropdown-quantity-action"
                                                                        title="Rooms"
                                                                        initial={rooms}
                                                                        min={1}
                                                                        max={10}
                                                                        onChange={setRooms}
                                                                    />
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="hotel-booking__form-item">
                                                        <div className="hotel-booking__form-item-heading">
                                                            <h2 className="hotel-booking__form-item-heading-title">
                                                                Adults
                                                            </h2>
                                                        </div>
                                                        <div className="hotel-booking__form-item-field" onClick={() => toggleDropdown("adults")}>
                                                            <BookingFrameInput
                                                                subtitle="Adults"
                                                                value={adults}
                                                                isOpen={isOpen === "adults"}
                                                            />

                                                            {isOpen === "adults" && (
                                                                <div className="hotel-booking__form-field-dropdown-quantity">
                                                                    <Quantity
                                                                        className="hotel-booking__form-field-dropdown-quantity-action"
                                                                        title="Adults"
                                                                        variant="small"
                                                                        initial={adults}
                                                                        min={1}
                                                                        max={10}
                                                                        onChange={setAdults}
                                                                    />
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="hotel-booking__form-item">
                                                        <div className="hotel-booking__form-item-heading">
                                                            <h2 className="hotel-booking__form-item-heading-title">
                                                                Childs
                                                            </h2>
                                                        </div>
                                                        <div className="hotel-booking__form-item-field" onClick={() => toggleDropdown("childs")}>
                                                            <BookingFrameInput
                                                                subtitle="Child"
                                                                value={childs}
                                                                isOpen={isOpen === "childs"}
                                                            />
                                                            {isOpen === "childs" && (
                                                                <div className="hotel-booking__form-field-dropdown-quantity">
                                                                    <Quantity
                                                                        title="Childs"
                                                                        className="hotel-booking__form-field-dropdown-quantity-action"
                                                                        variant="small"
                                                                        initial={childs}
                                                                        min={1}
                                                                        max={10}
                                                                        onChange={setChilds}
                                                                    />
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="hotel-booking__form-action">
                                                    <HoverButton
                                                        btnSize="full"
                                                        variant="silver"
                                                        hoverBgOver="rgba(34, 34, 34)"
                                                    >
                                                        Book Your Stay
                                                    </HoverButton>
                                                </div>
                                            </div>
                                        </BookingFrame >

                                    </div>
                                </form>
                            </article>
                            <article className="hotel-booking__columns hotel-booking__columns--right">
                                <BookingAside />
                            </article>
                        </div>
                    </Container >
                    {/* <article className="hotel-booking__calendar-container" tabIndex={-1}
                        onBlur={(e) => {
                            if (!e.currentTarget.contains(e.relatedTarget)) {
                                setIsCalendarOpen(false);
                            }
                        }}
                    >

                    </article> */}
                </BackdropContainer >
            </BackdropContainer >
        </div >
    )
};

export default Availability;
