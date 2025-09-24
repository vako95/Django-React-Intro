import MainLayout from "../layouts/MainLayout/MainLayout";
import SecondaryLayout from "../layouts/SecondaryLayout/SecondaryLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

import "./App.css";

import { Routes, Route } from "react-router-dom";
import Team from "../pages/Team/Team";
import BreadCrumbs from "../components/module/BreadCrumbs/BreadCrumbs";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
            </Route>
            <Route path="/" element={<SecondaryLayout />}>
                <Route path="about" element={<About />} />
                <Route path="team" element={<Team />} />
            </Route>
        </Routes>

    )
}

export default App;