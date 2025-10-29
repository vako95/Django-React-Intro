import { forwardRef } from "react";
import SkillBar from "./components/SkillBar/SkillBar";

const SkillsSection = forwardRef(({ skills, progresses, visible }, ref) => {
    return (
        <section className="personal__detail-skills">
            <div className="personal__detail-skills-heading">
                <h4 className="personal__detail-skills-title">Expertise & Skills</h4>
            </div>
            <ul className="personal__detail-skills-list" ref={ref}>
                {skills.map((skill, idx) => (
                    <SkillBar
                        key={skill.name}
                        name={skill.name}
                        value={progresses[idx]}
                        targetValue={skill.value}
                        visible={visible}
                    />
                ))}
            </ul>
        </section>
    );
});

export default SkillsSection;
