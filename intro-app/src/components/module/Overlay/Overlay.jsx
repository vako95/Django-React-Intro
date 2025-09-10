
import "./Overlay.css";
import { useState } from "react";

import overBackdrop from "./assets/img/1.jpg";
import { Container } from "@components/ui";
import OverlayContent from "./components/OverlayContent/OverlayContent";
import OverlayPlayer from "./components/OverlayPlayer/OverlayPlayer";
const Overlay = () => {

    const [openPlayer, setOpenPlayer] = useState(false);

    const handlePlayer = () => {
        setOpenPlayer((prev) => !prev);
    };

    return (

        <section className="overlay">



            <div className="overlay__backdrop" style={{ backgroundImage: `url(${overBackdrop})` }}>
                <Container>
                    <div className="overlay__container">
                        <OverlayContent />
                        <OverlayPlayer
                            handlePlayer={handlePlayer}
                            openPlayer={openPlayer}
                        />
                    </div>
                </Container>
            </div>
        </section>

    )
}

export default Overlay;