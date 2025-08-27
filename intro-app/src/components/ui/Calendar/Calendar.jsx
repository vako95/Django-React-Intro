<LocalizationProvider dateAdapter={AdapterDayjs}>
    <div className="calendar">
        <div className="calendar__container">
            <div className="calendar__item">
                <h6 className="calendar__label">Check-in</h6>
                <DateCalendar />
            </div>
            <div className="calendar__item">
                <h6 className="calendar__label">Check-out</h6>
                <DateCalendar />
            </div>
        </div>
    </div>
</LocalizationProvider>
