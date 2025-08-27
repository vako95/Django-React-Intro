import { useState } from "react";
import Calex from "../ui/Calendar/Calex";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import dayjs from "dayjs";

const Luxury = () => {
    const [checkIn, setCheckIn] = useState(dayjs());
    const [checkOut, setCheckOut] = useState(null);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="luxury">
            <Button variant="contained" onClick={handleOpen}>
                Select Dates
            </Button>

            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>Select Check-in and Check-out</DialogTitle>
                <DialogContent>
                    <Calex
                        checkIn={checkIn}
                        checkOut={checkOut}
                        onCheckInChange={setCheckIn}
                        onCheckOutChange={setCheckOut}
                        onClose={handleClose} // передаем функцию закрытия
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>

            <div style={{ marginTop: "20px" }}>
                <p>Check-in: {checkIn.format("DD.MM.YYYY")}</p>
                <p>Check-out: {checkOut ? checkOut.format("DD.MM.YYYY") : "—"}</p>
            </div>
        </div>
    );
};

export default Luxury;
