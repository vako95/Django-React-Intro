import "./AdvantagesBarItem.css";

const AdvantagesBarItem = ({ title, icon, desc }) => {

    return (
        <div className="advantages-bar__item">
            <div className="advantages-bar__item-cover">
                <img className="anime-mirror advantages-bar__item-cover-icon" src={icon} alt={title} />
            </div>
            <div className="advantages-bar__item-content">
                <h5 className="advantages-bar__item-content-title">
                    {title}
                </h5>
                <span className="advantages-bar__item-content-desc">
                    {desc}
                </span>
            </div>

        </div>
    )
}

export default AdvantagesBarItem;