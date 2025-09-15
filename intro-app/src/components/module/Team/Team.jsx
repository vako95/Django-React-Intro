import { Link } from "react-router-dom";
import { Container, DecoratedHeading } from "@components/ui"
import { teamMembers } from "../../../constants/sections";
import "./Team.css";
import TeamCard from "./components/TeamCard.jsx/TeamCard";
const Team = () => {

    return (
        <Container>
            <section className="team">
                <div className="team__container">
                    <div className="team__heading">
                        <DecoratedHeading
                            title="Hoexr Hotel team"
                            subtitle="Expert Team Persons"
                        />
                    </div>
                    <div className="team__card">
                        <div className="team__card-wrapper">
                            {teamMembers.map((item, idx) => (
                                <TeamCard {...item} key={idx} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default Team;