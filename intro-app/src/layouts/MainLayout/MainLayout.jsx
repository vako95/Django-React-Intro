import { Outlet } from "react-router-dom";
import "./MainLayout.css";
import Footer from "../../components/layout/Footer/Footer";
import Header from "../../components/layout/Header/Header.jsx";
import Slider from "../../components/module/Slider/Slider";
import Navbar from "../../components/layout/Navbar/Navbar.jsx";
// import SliderBooking from "../../components/module/SliderBooking/SliderBooking";


const MainLayout = () => {
    return (
        <>
            <Header >
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