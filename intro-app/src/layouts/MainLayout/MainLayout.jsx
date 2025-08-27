import { Outlet } from "react-router-dom";
import "./MainLayout.css";
// import Footer from "../../components/layout/Footer/Footer";
// import Header from "../../components/layout/Header/Header";
// import SliderBooking from "../../components/module/SliderBooking/SliderBooking";


const MainLayout = () => {
    return (
        <>
            {/* <Header /> */}

            <div className="main">

                <Outlet />

            </div>
            {/* <Footer /> */}
        </>
    )
}

export default MainLayout;