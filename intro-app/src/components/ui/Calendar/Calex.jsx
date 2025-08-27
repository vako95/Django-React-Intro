import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Button } from "@mui/material";

export default function Calex({ checkIn, checkOut, onCheckInChange, onCheckOutChange, onClose }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
                <div>
                    <h4>Check-in</h4>
                    <DateCalendar
                        value={checkIn}
                        onChange={onCheckInChange}
                    />
                </div>
                <div>
                    <h4>Check-out (optional)</h4>
                    <DateCalendar
                        value={checkOut}
                        onChange={(date) => {
                            onCheckOutChange(date); // сохраняем check-out
                            if (date && date.isAfter(checkIn)) {
                                onClose(); // закрываем модалку
                            }
                        }}
                        minDate={checkIn} // нельзя выбрать раньше check-in
                    />
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => {
                            onCheckOutChange(null); // сбрасываем check-out
                            onClose(); // закрываем модалку
                        }}
                        style={{ marginTop: "10px" }}
                    >
                        No check-out
                    </Button>
                </div>
            </div>
        </LocalizationProvider>
    );
}
