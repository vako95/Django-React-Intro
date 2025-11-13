import { Container, BackdropContainer, DecoratedHeading } from "@components/ui";
import { useState } from "react";
import bgBooking from "./assets/img/bg-booking.jpeg";
import bgShape from "./assets/img/bk-shape.png";

import BookingForm from "./components/BookingForm/BookingForm";
import BookingCalendar from "./components/BookingCalendar/BookingCalendar";
import BookingAside from "./components/BookingAside/BookingAside";
import "./HotelBooking.css";


import { HoverButton, BookingFrame, BookingFrameInput, BookingOrder, Calendar, Quantity } from "@components/ui";
import { TfiLineDashed } from "react-icons/tfi";

import { useCalendarControl } from "@hooks";
const Availability = () => {
    const [range, setRange] = useState({ from: undefined, to: undefined });
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
                                        <BookingFrame>
                                            <div className="hotel-booking__form-content" ref={ref}>
                                                <div className="hotel-booking__form-list" onClick={() => toggleDropdown("calendar")}>
                                                    <div className="hotel-booking__form-item">
                                                        <div className="hotel-booking__form-item-field">
                                                            <BookingFrameInput
                                                                title="Check In"
                                                                onChange={handleSelectRange}
                                                                value={range.from ? range.from.toISOString().slice(0, 10) :
                                                                    <span className="hotel-booking__form-item-field-icon">
                                                                        <TfiLineDashed />
                                                                    </span>
                                                                }
                                                                isOpen={isOpen === "calendar"}
                                                            />
                                                        </div>
                                                        {isOpen === "calendar" && (
                                                            <div className="hotel-booking__form-dropdown-calendar">
                                                                <Calendar range={range} setRange={handleSelectRange} />
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="hotel-booking__form-item">
                                                        <div className="hotel-booking__form-item-field">
                                                            <BookingFrameInput
                                                                title="Check Out"
                                                                onChange={handleSelectRange}
                                                                value={range.to ? range.to.toISOString().slice(0, 10) :
                                                                    <span className="hotel-booking__form-item-field-icon">
                                                                        <TfiLineDashed />
                                                                    </span>
                                                                }
                                                                isOpen={isOpen === "calendar"}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="hotel-booking__form-item">
                                                    <div className="hotel-booking__form-item-field" onClick={() => toggleDropdown("rooms")}>
                                                        <BookingFrameInput
                                                            title="Rooms"
                                                            subtitle="Rooms"
                                                            value={rooms}
                                                            isOpen={isOpen === "rooms"}
                                                        />
                                                        {isOpen === "rooms" && (
                                                            <div className="hotel-booking__form-field-dropdown-quantity">
                                                                <Quantity
                                                                    className="hotel-booking__form-field-dropdown-quantity-action"
                                                                    title="rooms"
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
                                                    <div className="hotel-booking__form-item-field" onClick={() => toggleDropdown("adults")}>
                                                        <BookingFrameInput
                                                            title="Adults"
                                                            value={adults}
                                                            isOpen={isOpen === "adults"}
                                                        />

                                                        {isOpen === "adults" && (
                                                            <div className="hotel-booking__form-field-dropdown-quantity">
                                                                <Quantity
                                                                    variant="small"
                                                                    initial={adults}
                                                                    min={1}
                                                                    max={10}
                                                                    onChange={setAdults}
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                    {/* <div className="rooms-details__booking-field" onClick={() => toggleDropdown("childs")}>
                                                            <BookingFrameInput
                                                                title="Child"
                                                                value={childs}
                                                                isOpen={isOpen === "childs"}
                                                            />

                                                            {isOpen === "childs" && (
                                                                <div className="rooms-details__booking-dropdown">
                                                                    <Quantity
                                                                        variant="small"
                                                                        initial={childs}
                                                                        min={1}
                                                                        max={10}
                                                                        onChange={setChilds}
                                                                    />
                                                                </div>
                                                            )}
                                                        </div> */}

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
                    <article className="hotel-booking__calendar-container" tabIndex={-1}
                    // onBlur={(e) => {
                    //     if (!e.currentTarget.contains(e.relatedTarget)) {
                    //         setIsCalendarOpen(false);
                    //     }
                    // }}
                    >
                        <BookingCalendar
                        // isCalendarOpen={isCalendarOpen}
                        // checkIn={checkIn}
                        // checkOut={checkOut}
                        // handleChangeChekIn={handleChangeChekIn}
                        // handleChangeChekOut={handleChangeChekOut}
                        // setIsCalendarOpen={setIsCalendarOpen}
                        />
                    </article>
                </BackdropContainer >
            </BackdropContainer >
        </div >
    )
};

export default Availability;
