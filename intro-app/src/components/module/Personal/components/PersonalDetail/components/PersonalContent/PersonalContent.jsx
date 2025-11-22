import { Link } from "react-router-dom";

import "./PersonalContent.css";
import Info from "./components/Info/Info";
import Heading from "./components/Heading/Heading";
import Socials from "./components/Socials/Socials";
const PersonalContent = () => {

    return (
        <article className="personal__detail-content">
            <Heading />
            <Info />
            <Socials />

        </article>
    )
}

export default PersonalContent;