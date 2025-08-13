import { Container } from "../../../../ui";
import HoverLink from "../../../../ui/HoverLink/HoverLink";
import Logo from "./components/Logo/Logo";
import Menu from "./components/Menu/Menu";

import "./Navbar.css";


const Navbar = () => {

    return (
        <div className="navbar">
            <Container>
                <div className="navbar__container">
                    <div className="navbar__nav">
                        <Logo />
                        <Menu />
                    </div>
                    <div className="navbar__nav">
                        <HoverLink>
                            Book Now
                        </HoverLink>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar;