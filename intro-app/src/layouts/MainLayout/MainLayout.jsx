import Header from "../../components/layout/Header/Header";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";

const MainLayout = () => {

    return (
        <>
            <Header />
            <div className="main">
                <Outlet />
            </div>
        </>
    )
}

export default MainLayout;