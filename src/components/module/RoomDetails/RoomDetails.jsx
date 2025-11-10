



import "./RoomDetails.css";
import { Container } from "@components/ui";
import RoomDetailsColumns from "./components/RoomDetailsColumns/RoomDetailsColumns.jsx";
import RoomDetailsGallery from "./components/RoomDetailsGallery/RoomDetailsGallery.jsx";
import RoomDetailsSlider from './components/RoomDetailsSlider/RoomDetailsSlider.jsx';

const RoomDetails = () => {

    return (
        <Container>
            <section className="room-details">
                <RoomDetailsColumns />
                <RoomDetailsGallery />
                <RoomDetailsSlider />
            </section>
        </Container >
    )
}

export default RoomDetails;