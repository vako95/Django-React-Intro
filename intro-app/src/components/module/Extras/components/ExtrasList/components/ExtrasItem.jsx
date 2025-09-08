import "./ExtrasItem.css";

const ExtrasItem = ({ title, icon, desc }) => {

    return (
        <div className="extras__item">
            <div className="extras__item-cover">
                <img className="anime-mirror extras__item-cover-icon" src={icon} alt={title} />
            </div>
            <div className="extras__item-content">
                <h5 className="extras__item-content-title">
                    {title}
                </h5>
                <span className="extras__item-content-desc">
                    {desc}
                </span>
            </div>

        </div>
    )
}

export default ExtrasItem;