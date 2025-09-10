
import Extras from "../../components/module/Extras/Extras";
import Overlay from "../../components/module/Overlay/Overlay";
import Reservation from "../../components/module/Reservation/Reservation";
import Rooms from "../../components/module/Rooms/Rooms";
import Services from "../../components/module/Services/Services";

import "./Home.css";


const Home = () => {

    return (
        <div className="home">

            {/* <Reservation /> */}
            {/* <Services /> */}
            <Rooms />
            <Extras />
            <Overlay />

        </div>
    )
}

export default Home;