import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";

import "./App.css";

import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}

export default App;