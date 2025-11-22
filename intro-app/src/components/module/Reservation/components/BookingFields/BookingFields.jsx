import { useClickOutside } from "@reactuses/core";
import { useState, useRef } from "react";
import { BsCalendar4Event } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import dayjs from "dayjs";

import Calendar from "../../../../ui/Calendar/Calendar";
import Quantity from "../../../../ui/Quantity/Quantity";
import { HoverButton } from "@components/ui";
import "./BookingFields.css";

const BookingFields = () => {
    const [range, setRange] = useState({
        from: new Date(),
        to: dayjs().add(1, "day").toDate(),
    });

    const [isOpenCalendar, setIsOpenCalendar] = useState(false);
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [roomCount, setRoomCount] = useState(1);
    const [adultCount, setAdultCount] = useState(1);
    const [childCount, setChildCount] = useState(0);

    const modalRef = useRef(null);
    useClickOutside(modalRef, () => setIsOpenCalendar(false), ["pointerdown"]);

    const toggleCalendar = () => {
        setIsOpenCalendar((prev) => !prev);
        setIsBookingOpen(false);
    };

    const toggleBooking = () => {
        setIsBookingOpen((prev) => !prev);
        setIsOpenCalendar(false);
    };


    const handleSelectRange = (newRange) => {
        if (!newRange) return;
        setRange(newRange);
    };

    return (
        <div className="reservation__booking-fields">
            <ul className="reservation__booking-fields-list" ref={modalRef}>
                {/* Check In */}
                <li className="reservation__booking-fields-item" onClick={toggleCalendar}>
                    <div className="reservation__booking-fields-item-wrapper">
                        <span className="reservation__booking-fields-item-wrapper-icon">
                            <BsCalendar4Event />
                        </span>
                    </div>
                    <div className="reservation__booking-fields-item-content">
                        <h1 className="reservation__booking-fields-item-title">Check In</h1>
                        <span className="reservation__booking-fields-item-count">
                            {range.from ? range.from.toLocaleDateString() : ""}
                        </span>
                        <input
                            value="11-11-11"
                            className="reservation__booking-fields-item-value"
                            type="text"
                            readOnly
                            disabled
                        />
                    </div>
                    {isOpenCalendar && (
                        <div className="reservation__booking-fields-calendar">
                            <Calendar
                                range={range}
                                setRange={handleSelectRange}
                            />
                        </div>
                    )}
                </li>

                {/* Check Out */}
                <li className="reservation__booking-fields-item" onClick={toggleCalendar}>
                    <div className="reservation__booking-fields-item-wrapper">
                        <span className="reservation__booking-fields-item-wrapper-icon">
                            <BsCalendar4Event />
                        </span>
                    </div>
                    <div className="reservation__booking-fields-item-content">
                        <h1 className="reservation__booking-fields-item-title">Check Out</h1>
                        <span className="reservation__booking-fields-item-count">
                            {range.to ? range.to.toLocaleDateString() : <HiOutlineDotsHorizontal />}
                        </span>
                        <input
                            value="11-11-11"
                            className="reservation__booking-fields-item-value"
                            type="text"
                            readOnly
                            disabled
                        />
                    </div>
                </li>

                {/* Guests */}
                <li className="reservation__booking-fields-item" onClick={toggleBooking}>
                    <div className="reservation__booking-fields-item-wrapper">
                        <span className="reservation__booking-fields-item-wrapper-icon">
                            <BsCalendar4Event />
                        </span>
                    </div>
                    <div className="reservation__booking-fields-item-content">
                        <h1 className="reservation__booking-fields-item-title">Guests</h1>
                        <div className="reservation__booking-fields-item-control">
                            <span className="reservation__booking-fields-item-control-title">
                                <span className="reservation__booking-fields-item-control-value">{roomCount}</span>
                                Room
                            </span>
                            <span className="reservation__booking-fields-item-control-title">
                                <span className="reservation__booking-fields-item-control-value">{adultCount}</span>
                                Adult
                            </span>
                            <span className="reservation__booking-fields-item-control-title">
                                <span className="reservation__booking-fields-item-control-value">{childCount}</span>
                                Child
                            </span>

                            <input type="hidden" value={roomCount} readOnly disabled />
                            <input type="hidden" value={`${adultCount} Adult`} readOnly disabled />
                            <input type="hidden" value={`${childCount} Child`} readOnly disabled />
                        </div>
                    </div>
                    {isBookingOpen && (
                        <div className="reservation__booking-fields-quantity" onClick={(e) => e.stopPropagation()}>
                            <div className="reservation__booking-fields-quantity-item">
                                <Quantity title="Room" min={1} max={10} initial={roomCount} onChange={setRoomCount} />
                            </div>
                            <div className="reservation__booking-fields-quantity-item">
                                <Quantity title="Adult" min={1} max={10} initial={adultCount} onChange={setAdultCount} />
                            </div>
                            <div className="reservation__booking-fields-quantity-item">
                                <Quantity title="Child" min={0} max={10} initial={childCount} onChange={setChildCount} />
                            </div>
                        </div>
                    )}
                </li>
            </ul>

            <div className="reservation__booking-fields-actions">
                <HoverButton
                    btnSize="full"
                    bgColor="rgba(170, 132, 83, 1)"
                    border={false}
                >
                    <span className="reservation__booking-fields-action-title">
                        Check now
                    </span>
                </HoverButton>
            </div>
        </div>
    );
};

export default BookingFields;
