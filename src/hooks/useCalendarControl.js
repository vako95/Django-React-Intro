import { useState } from "react";
import dayjs from "dayjs";

export const useCalendarControl = () => {
    const [checkIn, setCheckIn] = useState(dayjs());
    const [checkOut, setCheckOut] = useState(dayjs().add(1, "day"));

    const [checkInClicked, setCheckInClicked] = useState(false);
    const [toggleCalendar, setToggleCalendar] = useState(false);
    const [isBookingOpen, setIsBookingOpen] = useState(false);


    const handleChangeCheckIn = (date) => {
        const isSameDate = checkIn && date.isSame(checkIn, "day");
        setCheckIn(date);
        setCheckOut(date.add(1, "day"));

        if (isSameDate && checkInClicked) {
            setToggleCalendar(false);
            setCheckInClicked(false);
        } else {
            setCheckInClicked(true);
        }
    };

    const handleChangeCheckOut = (date) => {
        setCheckOut(date);
        if (checkIn) setToggleCalendar(false);
    };

    const handleToggleBooking = () => {
        setIsBookingOpen((prev) => !prev);
        setToggleCalendar(false);
    };


    const handleCollapseCalendar = () => {
        setToggleCalendar((prev) => !prev);
        setIsBookingOpen(false);
    };

    return {
        checkIn,
        checkOut,
        toggleCalendar,
        isBookingOpen,
        handleChangeCheckIn,
        handleChangeCheckOut,
        handleToggleBooking,
        handleCollapseCalendar,
    };
};

