import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Button } from "@mui/material";
import dayjs from 'dayjs';
export default function Calex({ checkIn, checkOut, onCheckInChange, onCheckOutChange, onClose }) {

    const handleCheckInChange = (date) => {
        onCheckInChange(dayjs(date));
    };


    const handleCheckOutChange = (date) => {
        if (!date) return;


        if (dayjs(date).isSame(checkIn, "day") || dayjs(date).isBefore(checkIn, "day")) {
            return;
        }

        onCheckOutChange(dayjs(date), 1);
        onClose();
    };

    const handleNoCheckOut = () => {
        onCheckOutChange(null);
        onClose();
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
                <div>
                    <h4>Check-in</h4>
                    <DateCalendar
                        value={checkIn}
                        onChange={handleCheckInChange}
                        minDate={dayjs()}
                    />
                </div>
                <div>
                    <h4>Check-out (optional)</h4>
                    <DateCalendar
                        value={checkOut}
                        onChange={handleCheckOutChange}
                        minDate={checkIn}
                    />
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={handleNoCheckOut}
                        style={{ marginTop: "10px" }}
                    >
                        No check-out
                    </Button>
                </div>
            </div>
        </LocalizationProvider>
    );
}
