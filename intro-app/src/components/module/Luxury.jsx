import { useState } from "react";
import Calex from "../ui/Calendar/Calex";
import dayjs from "dayjs";
import "./Luxury.css";

const Luxury = () => {
    const [checkIn, setCheckIn] = useState(dayjs());
    const [checkOut, setCheckOut] = useState(null);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="luxury">
            <button className="btn-open" onClick={handleOpen}>
                Select Dates
            </button>

            {open && (
                <div className="modal-overlay" onClick={handleClose}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Select Check-in and Check-out</h2>
                        <Calex
                            checkIn={checkIn}
                            checkOut={checkOut}
                            onCheckInChange={setCheckIn}
                            onCheckOutChange={setCheckOut}
                            onClose={handleClose}
                        />
                        <div style={{ marginTop: "10px" }}>
                            <button className="btn-close" onClick={handleClose}>Close</button>
                        </div>
                    </div>
                </div>
            )}

            <div style={{ marginTop: "20px" }}>
                <p>Check-in: {checkIn.format("DD.MM.YYYY")}</p>
                <p>Check-out: {checkOut ? checkOut.format("DD.MM.YYYY") : "only check In"}</p>
            </div>
        </div>
    );
};

export default Luxury;
