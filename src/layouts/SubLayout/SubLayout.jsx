import { Outlet } from "react-router-dom";
import Header from "../../components/layout/Header/Header.jsx";
import Footer from "../../components/layout/Footer/Footer.jsx"
import BreadCrumbs from "../../components/module/BreadCrumbs/BreadCrumbs.jsx";
import Topbar from "../../components/layout/Topbar/Topbar.jsx";
import Navbar from "../../components/layout/Navbar/Navbar.jsx";
import NavbarSticky from "../../components/layout/NavbarSticky/NavbarSticky.jsx";
import "./SubLayout.css";


const SubLayout = () => {
    return (
        <>
            <Header bgColor="black">
                <Topbar />
                <NavbarSticky />
                <Navbar bgColor="" cart={true} />
                <BreadCrumbs />
            </Header>
            <div className="main">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default SubLayout;