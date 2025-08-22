import { Container } from "../../ui";
import About from "./components/About/About";
import Contact from "./components/Contacts/Contact";
import Navigation from "./components/Navigation/Navigation";
import Subscribe from "./components/Subcribe/Subscribe";


import "./Footer.css";

const Footer = () => {

    return (
        <footer className="footer">
            <Container>
                <div className="footer__container">
                    <About />
                    <Navigation />
                    <Contact />
                    <Subscribe />

                </div>
            </Container>
        </footer>
    )
}

export default Footer;