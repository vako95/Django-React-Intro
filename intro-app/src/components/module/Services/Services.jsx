import "./Services.css";
import { services } from "../../../constants/sections";
import { Container } from "@components/ui";
import VideoPlayer from "../../ui/HoverPlayer/VideoPlayer";
import { useState } from "react";




const Services = () => {
    const [openPlayer, setOpenPlayer] = useState(false);



    const handlePlayer = () => {
        setOpenPlayer((play) => !play);
    }

    return (

        <section className="services">
            <Container>
                <div className="services__linear"></div>
                <div className="services__container">
                    <div className="hero">
                        <div className="hero__backdrop" style={{ backgroundImage: `url(${services[0].cover})` }} >
                            <div className="hero__heading">
                                <i className="hero__heading-icon"></i>
                                <h5>Luxury Room</h5>
                                <span>
                                    Donec in quis the asd pellentesque velit Donec id velit arcu
                                </span>
                            </div>

                            <div className="hero__video" onClick={handlePlayer}>
                                playy
                                {openPlayer && (
                                    <VideoPlayer videoId="1GTGxWXLGF0?si=cSVebUGQ_CZ2rWpW">
                                        play
                                    </VideoPlayer>
                                )}

                            </div>

                            <div className="hero__card">
                                <img src={services[0].thumbnail} className="hero__card-cover" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>

    )
}

export default Services;