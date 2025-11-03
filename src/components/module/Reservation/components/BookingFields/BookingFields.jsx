import { useClickAway, useClickOutside } from "@reactuses/core"
import { useState, useRef, useEffect } from "react";
import { BsCalendar4Event } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import "./BookingFields.css";
import { HoverButton } from "@components/ui";
import Calendar from "../../../../ui/Calendar/Calendar";
import Quantity from "../../../../ui/Quantity/Quantity";

const BookingFields = () => {
    const [range, setRange] = useState({ from: undefined, to: undefined });
    const [isOpenCalendar, setIsOpenCalendar] = useState(false);
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [roomCount, setRoomCount] = useState(1);
    const [adultCount, setAdultCount] = useState(1);
    const [childCount, setChildCount] = useState(0);

    const modalRef = useRef(null);
    useClickOutside(
        modalRef,
        () => setIsOpenCalendar(false),
        ['pointerdown']
    );

    const toggleCalendar = (e) => {
        setIsOpenCalendar((prev) => !prev);
        setIsBookingOpen(false)

    };
    const toggleBooking = (e) => {
        setIsBookingOpen((prev) => !prev);
        setIsOpenCalendar(false)
    };

    const handleSelectRange = (newValue) => {
        setRange(newValue);
        if (newValue.from && newValue.to !== newValue.from && newValue.to) {
            setIsOpenCalendar(false);
        }
    }


    return (
        <div className="reservation__booking-fields">
            <ul className="reservation__booking-fields-list" ref={modalRef}>
                <li className="reservation__booking-fields-item" onClick={toggleCalendar}>
                    <div className="reservation__booking-fields-item-wrapper">
                        <span className="reservation__booking-fields-item-wrapper-icon">
                            <BsCalendar4Event />
                        </span>
                    </div>
                    <div className="reservation__booking-fields-item-content">
                        <h1 className="reservation__booking-fields-item-title">
                            Check In
                        </h1>
                        <span className="reservation__booking-fields-item-count">
                            11-11-11
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
                <li className="reservation__booking-fields-item" onClick={toggleCalendar}>
                    <div className="reservation__booking-fields-item-wrapper">
                        <span className="reservation__booking-fields-item-wrapper-icon">
                            <BsCalendar4Event />
                        </span>
                    </div>
                    <div className="reservation__booking-fields-item-content">
                        <h1 className="reservation__booking-fields-item-title">
                            Check In
                        </h1>
                        <span className="reservation__booking-fields-item-count">
                            11-11-11
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



                <li className="reservation__booking-fields-item" onClick={toggleBooking}>
                    <div className="reservation__booking-fields-item-wrapper">
                        <span className="reservation__booking-fields-item-wrapper-icon">
                            <BsCalendar4Event />
                        </span>
                    </div>
                    <div className="reservation__booking-fields-item-content">
                        <h1 className="reservation__booking-fields-item-title">
                            Guests
                        </h1>
                        <div className="reservation__booking-fields-item-control">
                            <span className="reservation__booking-fields-item-control-title">
                                <span className="reservation__booking-fields-item-control-value">
                                    {roomCount}
                                </span>
                                Room
                            </span>
                            <span className="reservation__booking-fields-item-control-title">
                                <span className="reservation__booking-fields-item-control-value">
                                    {adultCount}
                                </span>
                                Adult
                            </span>
                            <span className="reservation__booking-fields-item-control-title">
                                <span className="reservation__booking-fields-item-control-value">
                                    {childCount}
                                </span>
                                Adult
                            </span>

                            <input
                                className="reservation__booking-fields-item-value"
                                value={roomCount}
                                type="hidden"
                                readOnly
                                disabled
                            />
                            <input
                                className="reservation__booking-fields-item-value"
                                value={`${adultCount} Adult`}
                                type="hidden"
                                readOnly
                                disabled
                            />
                            <input
                                className="reservation__booking-fields-item-value"
                                value={`${childCount} Child`}
                                type="hidden"
                                readOnly
                                disabled
                            />
                        </div>

                    </div>
                    {isBookingOpen && (
                        <div className="reservation__booking-fields-quantity">
                            <div className="reservation__booking-fields-quantity-item">
                                <div className="reservation__booking-fields-quantity-inner">
                                    <span className="reservation__booking-fields-quantity-label">
                                        Room
                                    </span>
                                </div>
                                <Quantity
                                    min={1}
                                    max={10}
                                    initial={roomCount}
                                    onChange={(e) => setRoomCount(e)}
                                />
                            </div>
                            <div className="reservation__booking-fields-quantity-item">
                                <div className="reservation__booking-fields-quantity-inner">
                                    <span className="reservation__booking-fields-quantity-label">
                                        Adult
                                    </span>
                                </div>

                                <Quantity
                                    min={1}
                                    max={10}
                                    initial={adultCount}
                                    onChange={(e) => setAdultCount(e)}
                                />
                            </div>
                            <div className="reservation__booking-fields-quantity-item">
                                <div className="reservation__booking-fields-quantity-inner">
                                    <span className="reservation__booking-fields-quantity-label">
                                        child
                                    </span>
                                </div>
                                <Quantity
                                    min={0}
                                    max={10}
                                    initial={childCount}
                                    onChange={(e) => setChildCount(e)}
                                />
                            </div>
                        </div>
                    )}

                </li>
            </ul>
            <div className="reservation__booking-fields-actions">
                <HoverButton
                    size="md"
                    width="100%"
                >
                    Check Now
                </HoverButton>
            </div>
        </div>
    )
}

export default BookingFields;




























// import { useState } from "react";
// import { Calendar } from "@components/ui"
// import { SurfacingAnimation } from "@components/animation";
// import { AnimatePresence } from "framer-motion";
// import "./Booking.css";
// import BookingCounter from "./components/BookingCounter/BookingCounter";
// import HoverButton from "../../../../ui/HoverButton/HoverButton";
// import dayjs from "dayjs";
// import Quantity from "../../../../ui/Quantity/Quantity";


// const Booking = () => {
//     const [range, setRange] = useState({ from: undefined, to: undefined });
//     const [isOpenCalendar, setIsOpenCalendar] = useState(false);
//     const [isBookingOpen, setIsBookingOpen] = useState(false);
//     const [roomCount, setRoomCount] = useState(0);
//     const [adultCount, setAdultCount] = useState(0);
//     const [childCount, setChildCount] = useState(0);
//     console.log(range);

//     return (
//         <div className="booking" onClick={(e) => e.stopPropagation()}>
//             <div className="booking__picker">
//                 <div
//                     className="booking__content" tabIndex={0} onClick={() => setIsOpenCalendar((prev) => !prev)}
//                     onBlur={(e) => {
//                         if (!e.currentTarget.contains(e.relatedTarget)) {
//                             toggleCalendar(false);
//                         }
//                     }}
//                 >
//                     <div className="booking__entry">
//                         <div className="booking__entry-wrapper">
//                             <i className="booking__entry-icon ri-group-line"></i>
//                         </div>
//                         <div className="booking__entry-heading">
//                             <h6 className="booking__entry-title">Check In</h6>
//                             <time className="booking__entry-booking">
//                                 {dayjs(range.from).format("DD.MM.YYYY") || "-"}
//                             </time>
//                         </div>
//                     </div>

//                     <div className="booking__leave">
//                         <div className="booking__leave-wrapper">
//                             <i className="booking__leave-icon ri-calendar-line"></i>
//                         </div>
//                         <div className="booking__leave-heading">
//                             <h6 className="booking__leave-title">Check Out</h6>
//                             <time className="booking__leave-booking">
//                                 {dayjs(range.to).format("DD.MM.YYYY") || "-"}
//                             </time>
//                         </div>
//                     </div>
//                     <AnimatePresence>
//                         {!isOpenCalendar && (
//                             <div className="zz">
//                                 <SurfacingAnimation key="dropdown">
//                                     <div className="rr-content"
//                                         onBlur={(e) => {
//                                             if (!e.currentTarget.contains(e.relatedTarget)) {
//                                                 toggleCalendar(false);
//                                             }
//                                         }}>
//                                         <Calendar
//                                             range={range}
//                                             setRange={setRange}
//                                         />
//                                     </div>
//                                 </SurfacingAnimation>
//                             </div>)}
//                     </AnimatePresence>
//                 </div>
//                 <div
//                     className="booking__guests-container"
//                     tabIndex={0}
//                     onBlur={(e) => {
//                         if (!e.currentTarget.contains(e.relatedTarget)) {
//                             handleCollapseCalendar(false);
//                         }
//                     }}
//                 >
//                     <div className="booking__guests" tabIndex={1}
//                         onBlur={(e) => {
//                             if (!e.currentTarget.contains(e.relatedTarget)) {
//                                 handleCollapseCalendar(false);
//                             }
//                         }}
//                         onClick={() => setIsBookingOpen((prev) => !prev)}>
//                         <div className="booking__guests-wrapper">
//                             <i className="booking__guests-icon ri-user-line"></i>
//                         </div>
//                         <div className="booking__guests-heading">
//                             <div className="booking__guests-content">
//                                 <h6 className="booking__guests-title">Guests</h6>
//                             </div>
//                             <div className="booking__guests-summary">
//                                 <div className="booking__guests-summary">
//                                     <span className="booking__guests-option">
//                                         {roomCount} Room
//                                     </span>
//                                     <span className="booking__guests-option">
//                                         {adultCount} Room
//                                     </span>
//                                     <span className="booking__guests-option">
//                                         {childCount} Room
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                         {!isBookingOpen && (
//                             <div className="booking__counter">
//                                 <Quantity
//                                     initial={roomCount}
//                                     onChange={(e) => setRoomCount(e)}
//                                 />
//                                 <Quantity
//                                     initial={roomCount}
//                                     onChange={(e) => setAdultCount(e)}
//                                 />
//                                 <Quantity
//                                     initial={roomCount}
//                                     onChange={(e) => setChildCount(e)}
//                                 />
//                             </div>
//                         )}
//                     </div>
//                 </div>
//                 <div className="booking__btn">
//                     <HoverButton size="lg" color="gold" className="booking__form-button">
//                         Check
//                     </HoverButton>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Booking;
