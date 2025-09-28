import { forwardRef } from "react";
import SkillBar from "./components/SkillBar/SkillBar.jsx";
import "./SkillsSection.css";

const SkillsSection = forwardRef(({ skills, progresses }, ref) => {
    return (
        <section className="personal__detail-skills">
            <div className="personal__detail-skills-heading">
                <h4 className="personal__detail-skills-title">Expertise & Skills</h4>
            </div>
            <ul className="personal__detail-skills-list" ref={ref}>
                {skills.map((skill, i) => (
                    <SkillBar
                        key={skill.name}
                        name={skill.name}
                        value={skill.value}
                        progress={progresses[i]}
                    />
                ))}
            </ul>
        </section>
    );
});

export default SkillsSection;
