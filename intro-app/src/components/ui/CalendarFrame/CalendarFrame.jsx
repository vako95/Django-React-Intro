import React, { useState, useMemo } from "react";
import dayjs from "dayjs";
import { Container, HoverLink, Calendar } from "@components/ui";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import CalendarDropdown from "./ui/CalendarDropdown/CalendarDropdown";


import "./CalendarFrame.css";

const CalendarFrame = () => {
    const [openLabel, setOpenLabel] = useState(false);
    const [checkIn, setCheckIn] = useState(dayjs());
    const [checkOut, setCheckOut] = useState(dayjs().add(1, "day"));
    const [passengers, setPassengers] = useState({
        rooms: { label: "rooms", count: 1, min: 0, max: 10 },
        adults: { label: "adults", count: 1, min: 1, max: 10 },
        children: { label: "children", count: 0, min: 0, max: 10 }
    });


    const handleCheckIn = (date) => {
        const isSameDay = date.isSame(checkIn);
        setCheckIn(date);
        setCheckOut(date.add(1, "day"));
        setOpenLabel(isSameDay ? false : "calendar");
    };

    const handleCheckOut = (date) => {
        setCheckOut(date);
        setOpenLabel(false);
    };

    const toggleLabel = (label) => {
        setOpenLabel(prev => (prev === label ? false : label));
    };

    const renderArrowIcon = (label) =>
        openLabel === label ? (
            <IoIosArrowUp className="calendar-frame__label-wrapper-icon" />
        ) : (
            <IoIosArrowDown className="calendar-frame__label-wrapper-icon" />
        );

    return (
        <Container>
            <section className="calendar-frame" >
                <div className="calendar-frame__wrapper"  >
                    <div className="calendar-frame__heading">
                        <h4 className="calendar-frame__heading-title">ROOMS & SUITES</h4>
                        <span className="calendar-frame__heading-subtitle">Hotel Booking</span>
                    </div>
                    <div className="calendar-frame__content">
                        <div className="calendar-frame__dates" onClick={() => toggleLabel("calendar")}>
                            {["Check In", "Check Out"].map((label, idx) => (
                                <div className="calendar-frame__label" key={label}>
                                    <div className="calendar-frame__label-heading">
                                        <span className="calendar-frame__label-title">{label}</span>
                                    </div>
                                    <div className="calendar-frame__label-wrapper">
                                        <input
                                            value={idx === 0 ? checkIn.format("DD.MM.YYYY") : checkOut.format("DD.MM.YYYY")}
                                            className="calendar-frame__label-wrapper-input"
                                            type="text"
                                            readOnly
                                        />
                                        {renderArrowIcon("calendar")}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="calendar-frame__label">
                            <div className="calendar-frame__label-heading">
                                <span
                                    className="calendar-frame__label-title"
                                    onClick={() => toggleLabel("rooms")}
                                >
                                    Rooms
                                </span>
                            </div>
                            <div className="calendar-frame__label-wrapper"
                                onClick={() => toggleLabel("rooms")}>
                                <input
                                    value={`${passengers.rooms.count} ${passengers.rooms.label}`}
                                    className="calendar-frame__label-wrapper-input"
                                    type="text"
                                    readOnly
                                />
                                {renderArrowIcon("rooms")}
                            </div>
                            <CalendarDropdown
                                wantedLabels={["rooms"]}
                                passengers={passengers}
                                setPassengers={setPassengers}
                                className={openLabel === "rooms" ? "open" : ""}
                            />
                        </div>
                        <div className="calendar-frame__label"
                            onClick={() => toggleLabel("guests")}>
                            <div className="calendar-frame__label-heading">
                                <span className="calendar-frame__label-title">
                                    Guests
                                </span>
                            </div>
                            <div className="calendar-frame__label-wrapper">
                                <input
                                    value="1 Adult, 0 Child"
                                    className="calendar-frame__label-wrapper-input"
                                    type="text"
                                    readOnly
                                />
                                {renderArrowIcon("guests")}
                            </div>
                            <CalendarDropdown
                                wantedLabels={["adults", "children"]}
                                passengers={passengers}
                                setPassengers={setPassengers}
                                className={openLabel === "guests" ? "open" : ""}
                            />
                        </div>
                    </div>
                    <HoverLink to="#" className="calendar-frame__submit">
                        Check Availability
                    </HoverLink>
                </div>
                {openLabel === "calendar" && (
                    <Calendar
                        variant="fullScreen"
                        closeButton={true}
                        checkIn={checkIn}
                        checkOut={checkOut}
                        onCheckInChange={handleCheckIn}
                        onCheckOutChange={handleCheckOut}
                        onClose={() => setOpenLabel(false)}
                    />
                )}
            </section>
        </Container>
    );
};

export default React.memo(CalendarFrame);
