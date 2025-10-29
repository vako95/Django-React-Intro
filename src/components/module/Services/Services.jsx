import "./Services.css";
import { useState } from "react";
import { services } from "../../../constants/sections";
import { Container } from "@components/ui";
import Hero from "./components/Hero/Hero.jsx";
import Feauture from "./components/Feauture/Feauture.jsx";

const Services = () => {
    const [openPlayer, setOpenPlayer] = useState(false);

    const handlePlayer = () => {
        setOpenPlayer((prev) => !prev);
    };

    const mainService = services[0];
    return (
        <section className="services">
            <Container>
                <div className="services__container">
                    <div className="services__section">
                        <Hero
                            service={mainService}
                            openPlayer={openPlayer}
                            onTogglePlayer={handlePlayer}
                        />
                    </div>
                    <div className="services__section">
                        <Feauture />
                    </div>
                </div>

            </Container>
        </section >

    )
}

export default Services;