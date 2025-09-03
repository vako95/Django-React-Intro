
import Reservation from "../../components/module/Reservation/Reservation";
import Services from "../../components/module/Services/Services";

import "./Home.css";


const Home = () => {

    return (
        <div className="home">

            <Reservation />
            <Services />

            {/* <Luxury /> */}
        </div>
    )
}

export default Home;