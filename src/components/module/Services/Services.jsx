import "./Services.css";
import { useState } from "react";
import { services } from "../../../constants/sections";
import { Container } from "@components/ui";
import Hero from "./components/Hero/Hero.jsx";
import Feature from "./components/Feauture/Feature.jsx";


const Services = () => {

    const mainService = services[0];
    return (
        <section className="services">
            <Container>
                <div className="services__container">
                    <div className="services__section services__section--hero">
                        <Hero
                            service={mainService}
                        />
                    </div>
                    <div className="services__section services__section--future">
                        <Feature />
                    </div>
                </div>

            </Container>
        </section >

    )
}

export default Services;