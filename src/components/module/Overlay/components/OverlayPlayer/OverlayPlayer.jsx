import "./OverlayPlayer.css";

import { PlayerButton, ModalContainer, VideoPlayer } from "@components/ui";

const OverlayPlayer = ({ handlePlayer, openPlayer }) => {

    return (
        <article className="overlay__section overlay__section-right">
            <div className="overlay__player" onClick={handlePlayer}>
                <PlayerButton
                    variant="round"
                    size="lg" />
                {openPlayer && (
                    <ModalContainer>
                        <VideoPlayer size="lg" videoId="tJSjwiJbOkY?si=GllFDI1M7k6LltcL">
                        </VideoPlayer>
                    </ModalContainer>
                )}

            </div>
        </article>
    )
}

export default OverlayPlayer;