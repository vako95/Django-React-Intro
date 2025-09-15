
import Extras from "../../components/module/Extras/Extras";
import FoodCard from "../../components/module/FoodCard/FoodCard";
import Overlay from "../../components/module/Overlay/Overlay";
import Reservation from "../../components/module/Reservation/Reservation";
import Rooms from "../../components/module/Rooms/Rooms";
import Services from "../../components/module/Services/Services";
import Swap from "../../components/module/Swap/Swap";
import Team from "../../components/module/Team/Team";
import Testimonial from "../../components/module/Testimonial/Testimonial";

import "./Home.css";


const Home = () => {

    return (
        <div className="home">

            <Reservation />
            {/* <Services />*/}
            {/* <Rooms /> */}
            {/* <Extras />*/}
            {/* <Overlay /> */}
            {/* <Swap /> */}
            {/* <Testimonial /> */}
            {/* <FoodCard /> */}
            <Team />
        </div>
    )
}

export default Home;