import { Container } from "@components/ui";
import { Link } from "react-router-dom"
import { DecoratedHeading } from "@components/ui";

import rooms1 from "./assets/img/room3.jpg";
import rooms2 from "./assets/img/room2.jpg";
import "./Rooms.css";
import ZoomInUp from "../../animation/ZoomInUp/ZoomInUp";
import FadeInLeft from "../../animation/FadeInLeft/FadeInLeft";
import SectionContainer from "../../ui/SectionWrapper/SectionWrapper";
import SectionWrapper from "../../ui/SectionWrapper/SectionWrapper";


const roomsCover = [
    {
        id: 1,
        cover: rooms1,
    },
    {
        id: 2,
        cover: rooms2,
    },
    {
        id: 3,
        cover: rooms2,
    },
    {
        id: 4,
        cover: rooms1,
    },


]
const Rooms = () => {

    return (
        <SectionWrapper>
            <Container>
                <DecoratedHeading
                    title="Hoexr Luxury Rooms"
                    subtitle="Luxury Rooms & Suites"
                />
                <div className="rooms__container">
                    {roomsCover.map((item) => (
                        <div key={item.id} className="rooms__card">
                            <img src={item.cover} alt="room" className="rooms__card-backdrop" />
                            <div className="rooms__content">
                                <Link className="rooms__content-link" to="#">
                                    Luxury Suite Room
                                </Link>
                                <span className="rooms__content-price">
                                    $90 / Night
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </SectionWrapper>

    )
}

export default Rooms;