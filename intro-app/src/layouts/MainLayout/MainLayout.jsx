import { Outlet } from "react-router-dom";
import Footer from "../../components/layout/Footer/Footer";
import Header from "../../components/layout/Header/Header.jsx";
import Slider from "../../components/module/Slider/Slider";
import Navbar from "../../components/layout/Navbar/Navbar.jsx";
import "./MainLayout.css";
import NavbarSticky from "../../components/layout/NavbarSticky/NavbarSticky.jsx";

const MainLayout = () => {
    return (
        <>
            <Header >
                <NavbarSticky />
                <Navbar cart={false} />
                <Slider />
            </Header>

            <div className="main">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default MainLayout;