
import "./Overlay.css";
import { useState } from "react";
import overBackdrop from "./assets/img/1.jpg";
import { Container } from "@components/ui";
import OverlayContent from "./components/OverlayContent/OverlayContent";
import OverlayPlayer from "./components/OverlayPlayer/OverlayPlayer";

const Overlay = () => {



    return (

        <section className="overlay">
            <div className="overlay__backdrop" style={{ backgroundImage: `url(${overBackdrop})` }}>
                <Container>
                    <div className="overlay__container">
                        <OverlayContent />
                        <OverlayPlayer

                        />
                    </div>
                </Container>
            </div>
        </section>

    )
}

export default Overlay;