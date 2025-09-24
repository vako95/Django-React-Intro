import { Outlet } from "react-router-dom";
import "./About.css";
import Serives from "../../components/module/Services/Services.jsx";
import Rooms from "../../components/module/Rooms/Rooms.jsx";
import Overlay from "../../components/module/Overlay/Overlay.jsx";
import Exstras from "../../components/module/Extras/Extras.jsx";
const About = () => {

    return (
        <div className="about-page">
            <Serives />
            <Rooms />
            <Overlay />
            <Exstras />
        </div>
    )
}

export default About;