import { createSlice } from "@reduxjs/toolkit";
import BreadCrumbs from "../../components/module/BreadCrumbs/BreadCrumbs";

const initialState = {
    breadCrumpSlice: [
        { id: 1, name: "home", path: "/" },
        { id: 2, name: "about", path: "/about" },
        { id: 3, name: "team", path: "/about/team" },
    ],
}

const BreadCrumbsSlice = createSlice({
    name: "content",
    initialState,
    reducers: {
        setBreadCrumbs: (state, action) => {
            state.breadCrumpSlice = action.payload;
        },
    }
});

export const { setBreadCrumbs } = BreadCrumbsSlice.actions;
export default BreadCrumbsSlice.reducer