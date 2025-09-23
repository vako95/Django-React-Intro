import { Outlet } from "react-router-dom";
import "./SecondaryLayout.css";
import Header from "../../components/layout/Header/Header";
import BreadCrumbs from "../../components/module/BreadCrumbs/BreadCrumbs";
import Topbar from "../../components/layout/Topbar/Topbar";
import Navbar from "../../components/layout/Navbar/Navbar";



const SecondaryLayout = () => {
    return (
        <>
            <Header bgColor="black">

                <Topbar />
                <Navbar bgColor="" cart={true} />
                <BreadCrumbs />

            </Header>
            <div className="main">
                <Outlet />
            </div>

        </>
    )
}

export default SecondaryLayout;