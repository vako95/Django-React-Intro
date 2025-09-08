import { Container } from "@components/ui";
import { Link } from "react-router-dom"
import { DecoratedHeading } from "@components/ui";

import rooms1 from "./assets/img/room3.jpg";
import rooms2 from "./assets/img/room2.jpg";
import "./Rooms.css";
import SectionWrapper from "../../ui/SectionWrapper/SectionWrapper";
import RoomCard from "./components/RoomsCard/RoomCard";

const roomsCover = [
    { id: 1, cover: rooms1, title: "Luxury Suite Room", price: 90 },
    { id: 2, cover: rooms2, title: "Luxury Suite Room", price: 90 },
    { id: 3, cover: rooms2, title: "Luxury Suite Room", price: 90 },
    { id: 4, cover: rooms1, title: "Luxury Suite Room", price: 90 },
];


const Rooms = () => {

    return (
        <SectionWrapper>
            <Container>
                <DecoratedHeading
                    title="Hoexr Luxury Rooms"
                    subtitle="Luxury Rooms & Suites"
                />
                <div className="rooms">
                    {roomsCover.map(({ id, cover, title, price }) => (
                        <RoomCard key={id} cover={cover} title={title} price={price} />
                    ))}
                </div>
            </Container>
        </SectionWrapper>

    )
}

export default Rooms;