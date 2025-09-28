import "./SkillBar.css";

const SkillBar = ({ name, value, progress }) => {
    return (
        <li className="personal__detail-skills-item">
            <div className="personal__detail-skills-content">
                <span className="personal__detail-skills-name">{name}</span>
            </div>
            <div className="personal__detail-skills-bar">
                <div
                    className="personal__detail-skills-progress"
                    style={{ width: `${progress}%` }}
                >
                    <span className="personal__detail-skills-value">{progress}%</span>
                </div>
            </div>
        </li>
    );
};

export default SkillBar;
