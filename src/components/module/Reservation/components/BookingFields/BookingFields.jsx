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
    // const [isBookingOpen, setIsBookingOpen] = useState(false);
    // const [roomCount, setRoomCount] = useState(0);
    // const [adultCount, setAdultCount] = useState(0);
    // const [childCount, setChildCount] = useState(0);


    // useEffect(() => {
    //     const swiperEl = document.querySelector('.swiper');
    //     if (!swiperEl) return;

    //     const handleSwiperClick = () => setIsOpenCalendar(false);
    //     swiperEl.addEventListener('pointerdown', handleSwiperClick);

    //     return () => swiperEl.removeEventListener('pointerdown', handleSwiperClick);
    // }, []);
    const modalRef = useRef(null);

    useClickAway(
        modalRef,
        () => setIsOpenCalendar(false),
        ['pointerdown']
    );

    const toggleCalendar = () => setIsOpenCalendar((prev) => !prev);
    const handleSelectRange = (newValue) => {
        setRange(newValue);
        if (newValue.from && newValue.to !== newValue.from && newValue.to) {
            setIsOpenCalendar(false);
        }
    }


    return (
        <div className="reservation__booking-fields">
            <ul className="reservation__booking-fields-list"


            >
                <div className="reservation__booking-fields-content" onClick={toggleCalendar}>
                    <li className="reservation__booking-fields-item">
                        <div className="reservation__booking-fields-item-wrapper">
                            <span className="reservation__booking-fields-item-wrapper-icon">
                                <BsCalendar4Event />
                            </span>
                        </div>
                        <div className="reservation__booking-fields-item-content">
                            <h1 className="reservation__booking-fields-item-title">
                                Check In
                            </h1>
                            <input
                                value="11-11-11"
                                className="reservation__booking-fields-item-value"
                                type="text"
                                readOnly
                                disabled
                            />
                        </div>
                    </li>
                    <li className="reservation__booking-fields-item">
                        <div className="reservation__booking-fields-item-wrapper">
                            <span className="reservation__booking-fields-item-wrapper-icon">
                                <BsCalendar4Event />
                            </span>
                        </div>
                        <div className="reservation__booking-fields-item-content">
                            <h1 className="reservation__booking-fields-item-title">
                                Check Out
                            </h1>
                            <input
                                value="11-11-11"
                                className="reservation__booking-fields-item-value"
                                type="text"
                                readOnly
                                disabled
                            />
                        </div>
                    </li>
                    {isOpenCalendar && (

                        <div className="reservation__booking-fields-calendar" ref={modalRef}>

                            <Calendar
                                range={range}
                                setRange={handleSelectRange}
                            />
                        </div>

                    )}

                </div>
                <div className="reservation__booking-fields-content">
                    <li className="reservation__booking-fields-item">
                        <div className="reservation__booking-fields-item-wrapper">
                            <span className="reservation__booking-fields-item-wrapper-icon">
                                <GoPeople />
                            </span>
                        </div>
                        <div className="reservation__booking-fields-item-content">
                            <h1 className="reservation__booking-fields-item-title">
                                Guests
                            </h1>
                            <span className="reservation__booking-fields-item-value">
                                12-12-12
                            </span>
                        </div>
                    </li>

                    <div className="reservation__booking-fields-booking">
                        <Quantity />
                    </div>

                </div>
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
