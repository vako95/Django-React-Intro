import { Container } from "@components/ui";
import { useRef, useEffect, useState } from "react";
import PersonalContent from "./components/PersonalContent/PersonalContent.jsx";
import SkillsSection from "./components/SkillsSection/SkillsSection.jsx";
import SkillsDescription from "./components/SkillsDescription/SkillsDescription.jsx";
import PerosnalWrapper from "./components/PerosnalWrapper/PerosnalWrapper.jsx";
import "./PersonalDetail.css";

const skills = [
    { name: "Executive Chef", value: 90 },
    { name: "Pastry Chef", value: 75 },
    { name: "Sous Chef", value: 60 },
];

const PersonalDetail = () => {
    const ref = useRef();
    const [visible, setVisible] = useState(false);
    const [progresses, setProgresses] = useState(skills.map(() => 0));

    const duration = 1500;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!visible) return;
        let start = 0;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;
            setProgresses(
                skills.map((skill) =>
                    Math.min(Math.floor((elapsed / duration) * skill.value), skill.value)
                )
            );
            if (elapsed < duration) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [visible]);

    return (
        <Container>
            <section className="personal__detail">
                <div className="personal__detail-area">
                    <PerosnalWrapper />
                    <PersonalContent />
                    <SkillsDescription />
                    <SkillsSection ref={ref} skills={skills} progresses={progresses} visible={visible} />
                </div>
            </section>
        </Container>
    );
};

export default PersonalDetail;
