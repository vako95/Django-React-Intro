
import "./PersonalCard.css";
import Socials from "./components/Socials/Socials.jsx";
import Content from "./components/Content/Content.jsx";


const PersonalCard = ({ socials, image, role, name, link, id }) => {
    return (
        <article className="personal__card-profile">
            <figure className="personal__card-frame">
                <img className="personal__card-frame-cover" src={image} alt="" />
                <Socials socials={socials} />
            </figure>
            <div className="personal__card-content">
                <Content
                    role={role}
                    name={name}
                    link={link}
                    id={id}
                />
            </div>
        </article>
    )
}

export default PersonalCard;