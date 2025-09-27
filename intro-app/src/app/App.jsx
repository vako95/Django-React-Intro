// import MainLayout from "../layouts/MainLayout/MainLayout";
// import SecondaryLayout from "../layouts/SecondaryLayout/SecondaryLayout";
// import Home from "../pages/Home/Home";
// import About from "../pages/About/About";
import router from "./routers/routers";
import { RouterProvider } from "react-router-dom"
import "./App.css";

// import { Routes, Route } from "react-router-dom";
// import Team from "../pages/Team/Team";
const App = () => {



    return <RouterProvider router={router} />











    // return (
    //     <Routes>

    //         <Route path="/" element={<MainLayout />}>
    //             <Route index element={<Home />} />
    //         </Route>
    //         <Route path="/" element={<SecondaryLayout />}>
    //             <Route path="about" element={<About />} />
    //             <Route path="team" handle={{
    //                 breadcrumbs: () => {
    //                     return [
    //                         { path: "/", label: "Home" },
    //                         { path: "/team", label: "Team" }
    //                     ]
    //                 }
    //             }} element={<Team />} />
    //         </Route>
    //     </Routes>

    // )
}

export default App;