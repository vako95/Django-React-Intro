import { Container, DecoratedHeading } from "@components/ui"
import { teamMembers } from "../../../constants/sections";
import "./Personal.css";
import TeamCard from "./components/PersonalCard/PersonalCard.jsx";

const Personal = () => {

    return (
        <Container>
            <section className="personal">
                <div className="personal__container">
                    <div className="personal__heading">
                        <DecoratedHeading
                            title="Hoexr Hotel personal"
                            subtitle="Expert personal Persons"
                        />
                    </div>
                    <div className="personal__card">
                        <div className="personal__card-wrapper">
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

export default Personal;