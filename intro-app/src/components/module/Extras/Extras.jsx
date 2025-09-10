import { Container, SectionWrapper, DecoratedHeading } from "@components/ui";

import homeCover from "./assets/img/home.png";
import bedIcon from "./assets/icon/bed.png";
import travelIcon from "./assets/icon/international-tour.png";
import wifiIcon from "./assets/icon/wifi.png";
import breakfastIcon from "./assets/icon/breakfast.png";
import pollIcon from "./assets/icon/pool.png";
import carIcon from "./assets/icon/car.png";
import ExtrasList from "./components/ExtrasList/ExtrasList";
import "./Extras.css";
import BackdropContainer from "../../ui/BackdropContainer/BackdropContainer";

const Extras = () => {
    const extrasList = [
        {
            id: 1,
            icon: bedIcon,
            title: "Room Service",
            desc: "Orci varius natoque penatibus magnis ders disney parturient ridiculus"
        },
        {
            id: 2,
            icon: travelIcon,
            title: "Pick Up & Drop",
            desc: "Orci varius natoque penatibus magnis ders disney parturient ridiculus"
        },
        {
            id: 3,
            icon: wifiIcon,
            title: "Wifi Internet",
            desc: "Orci varius natoque penatibus magnis ders disney parturient ridiculus"
        },
        {
            id: 4,
            icon: breakfastIcon,
            title: "Breakfast",
            desc: "Orci varius natoque penatibus magnis ders disney parturient ridiculus"
        },
        {
            id: 5,
            icon: pollIcon,
            title: "Pick Up & Drop",
            desc: "Orci varius natoque penatibus magnis ders disney parturient ridiculus"
        },
        {
            id: 6,
            icon: carIcon,
            title: "Pick Up & Drop",
            desc: "Orci varius natoque penatibus magnis ders disney parturient ridiculus"
        },

    ];
    return (
        <BackdropContainer backdrop={homeCover} alt="Luxury room background">
            <Container>
                <SectionWrapper>
                    <div className="extras">

                        <div className="extras__heading">
                            <DecoratedHeading
                                title="Hoexr Luxury Rooms"
                                subtitle="Luxury Rooms & Suites"
                            />
                        </div>
                        <div className="extras__card">
                            <ExtrasList extrasData={extrasList} />
                        </div>
                    </div>

                </SectionWrapper>
            </Container>
        </BackdropContainer>
    )
}

export default Extras