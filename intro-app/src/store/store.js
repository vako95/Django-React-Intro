import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "./CalendarReducer/CalendarReducer.js";

export const store = configureStore({
    reducer: {
        calendar: calendarReducer,
    },
});
