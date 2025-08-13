import Navbar from "./components/Navbar/Navbar";
import SliderBooking from "./components/Slider/scomponents/SliderBooking/SliderBooking";
import Slider from "./components/Slider/Slider";
import "./Header.css";

const Header = () => {

    return (
        <header className="header">
            <Navbar />
            <Slider />
            <SliderBooking />
        </header>
    )
}

export default Header;