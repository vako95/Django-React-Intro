import "./About.css";
import Serives from "../../components/module/Services/Services.jsx";
import Rooms from "../../components/module/Rooms/Rooms.jsx";
import Overlay from "../../components/module/Overlay/Overlay.jsx";
import AdvantagesBar from "../../components/module/AdvantagesBar/AdvantagesBar.jsx";
const About = () => {

    return (
        <div className="about-page">
            <Serives />
            <Rooms />
            <Overlay />
            <AdvantagesBar />
        </div>
    )
}

export default About;