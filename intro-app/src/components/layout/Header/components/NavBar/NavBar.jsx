import Container from "../../../../ui/Container/Container";
import Logo from "./components/Logo/Logo";
import Menu from "./components/Menu/Menu";
import HoverButton from "../../../../ui/HoverButton/HoverButton";
import "./Navbar.css";

const NavBar = () => {

    return (
        <nav className="navbar">
            <Container>
                <div className="navbar__container">
                    <div className="navbar__left">
                        <Logo />
                        <Menu />
                    </div>
                    <div className="navbar_right">
                        <HoverButton>
                            Book Now
                        </HoverButton>
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default NavBar;