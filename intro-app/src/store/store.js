import { configureStore } from "@reduxjs/toolkit";
import BreadCrumpReducer from "./BreadCrumpReducer/BreadCrumpReducer";

const store = configureStore({
    reducer: {
        content: BreadCrumpReducer
    }

})
export default store;