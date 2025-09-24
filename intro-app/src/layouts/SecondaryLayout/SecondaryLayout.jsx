import { Outlet } from "react-router-dom";
import { FrostedGlass } from "@components/ui";
import Header from "../../components/layout/Header/Header.jsx";
import Footer from "../../components/layout/Footer/Footer.jsx"
import BreadCrumbs from "../../components/module/BreadCrumbs/BreadCrumbs.jsx";
import Topbar from "../../components/layout/Topbar/Topbar.jsx";
import Navbar from "../../components/layout/Navbar/Navbar.jsx";
import "./SecondaryLayout.css";


const SecondaryLayout = () => {
    return (
        <>
            <Header bgColor="black">
                <FrostedGlass>
                    <Topbar />
                    <Navbar bgColor="" cart={true} />
                </FrostedGlass>
                <BreadCrumbs />

            </Header>
            <div className="main">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default SecondaryLayout;