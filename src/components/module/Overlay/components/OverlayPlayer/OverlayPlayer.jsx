import "./OverlayPlayer.css";
import { useState, useEffect } from "react";
import { PlayerButton, ModalContainer, VideoPlayer } from "@components/ui";
import { FaPlay } from "react-icons/fa";

const OverlayPlayer = () => {
    const [openPlayer, setOpenPlayer] = useState(false);

    const handlePlayer = () => {
        setOpenPlayer((prev) => !prev);
    };

    useEffect(() => {
        if (openPlayer) document.body.classList.add("overflow-hidden");
        else document.body.classList.remove("overflow-hidden");
        return () => document.body.classList.remove("overflow-hidden");
    }, [openPlayer]);

    return (
        <article className="overlay__section overlay__section-right">
            <div className="overlay__player" onClick={handlePlayer}>
                <PlayerButton
                    variant="round"
                    size="lg"

                >
                    <span className="overlay__player-icon">
                        <FaPlay />
                    </span>

                </PlayerButton>

                <ModalContainer isOpen={openPlayer} >
                    <VideoPlayer size="lg" videoId="tJSjwiJbOkY?si=GllFDI1M7k6LltcL">
                    </VideoPlayer>
                </ModalContainer>


            </div>
        </article>
    )
}

export default OverlayPlayer;