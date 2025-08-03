import NavBar from "./components/NavBar/NavBar";
import Slider from "./components/Slider/Slider";
import "./Header.css";


const Header = () => {

    return (
        <header className="header">
            <NavBar />
            <Slider />

        </header>
    )
}

export default Header;