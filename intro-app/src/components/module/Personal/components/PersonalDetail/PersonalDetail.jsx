import { Container } from "@components/ui"

import "./PersonalDetail.css";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import PersonalContent from "./components/PersonalContent/PersonalContent";
import SkillsSection from "./components/SkillsSection/SkillsSection";
const skills = [
    { name: "Executive Chef", value: 90 },
    { name: "Pastry Chef", value: 75 },
    { name: "Sous Chef", value: 60 },
];
const PersonalDetail = () => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const [progresses, setProgresses] = useState(skills.map(() => 0));

    const duration = 1500;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);


    useEffect(() => {
        if (isVisible) {
            let startTime = null;

            const animate = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const elapsed = timestamp - startTime;

                setProgresses((prev) =>
                    prev.map((p, i) =>
                        Math.min(Math.floor((elapsed / duration) * skills[i].value), skills[i].value)
                    )
                );

                if (progresses.some((p, i) => p < skills[i].value)) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        }
    }, [isVisible]);


    return (
        <Container>
            <section className="personal__detail">
                <div className="personal__detail-area">
                    <figure className="personal__detail-wrapper">
                        <img
                            className="personal__detail-wrapper-img"
                            src="https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/team1.jpg"
                            alt="Portrait of Frank Bruton"
                        />
                    </figure>

                    <PersonalContent />


                    <article className="personal__detail-skills">
                        <div className="personal__detail-skills-heading">
                            <h4 className="personal__detail-skills-title">Expertise & Skills</h4>
                        </div>

                        <div className="personal__detail-skills-content">
                            <span className="personal__detail-skills-desc">
                                Bring to the table win-win at survival strategies win to ensure with proactiv other domination going with forward,
                                a new normal that has evolved from generation
                                X is on the streamled solution
                            </span>
                            <span className="personal__detail-skills-desc">
                                Bring to the table win-win at survival strategies win to ensure with proactiv other domination going with forward,
                                a new normal that has evolved from generation
                                X is on the streamled solution
                            </span>
                        </div>


                    </article>


                    <SkillsSection ref={ref} skills={skills} progresses={progresses} />


                </div>
            </section>

        </Container>
    )
}

export default PersonalDetail;