
import Reservation from "../../components/module/Reservation/Reservation";
import Rooms from "../../components/module/Rooms/Rooms";
import Services from "../../components/module/Services/Services";

import "./Home.css";


const Home = () => {

    return (
        <div className="home">

            {/* <Reservation /> */}
            <Services />
            <Rooms />

            {/* <Luxury /> */}
        </div>
    )
}

export default Home;