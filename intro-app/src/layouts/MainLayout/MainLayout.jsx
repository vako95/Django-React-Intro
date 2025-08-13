import { Outlet } from "react-router-dom";
import "./MainLayout.css";
import Header from "../../components/layout/Header/Header";


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