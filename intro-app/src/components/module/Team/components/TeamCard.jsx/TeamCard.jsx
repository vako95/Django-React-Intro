
import "./TeamCard.css";
import Socials from "./components/Socials/Socials.jsx";
import Content from "./components/Content/Content.jsx";


const TeamCard = ({ socials, image, role, name }) => {
    return (
        <article className="team__card-profile">
            <figure className="team__card-frame">
                <img className="team__card-frame-cover" src={image} alt="" />
                <Socials socials={socials} />
            </figure>
            <div className="team__card-content">
                <Content
                    role={role}
                    name={name}
                />
            </div>
        </article>
    )
}

export default TeamCard;