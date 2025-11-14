import { Link } from "react-router-dom";
import { HoverButton } from "@components/ui";
import { ICON_MAP } from "../../../../../constants/map.js";
import "./RoomCard.css"

const RoomCard = ({ cover, title, price, icons }) => (
    <div className="rooms__card" style={{ backgroundImage: `url(${cover})` }}>
        <div className="rooms__card-wrapper">
            <div className="rooms__content">
                <Link className="rooms__content-link" to="#">
                    {title}
                </Link>
                <span className="rooms__content-price">${price} / Night</span>
            </div>
            <div className="rooms__service">
                <div className="rooms__service-action">
                    <HoverButton
                        btnSize="sm"
                        variant="default"
                        border={true}
                    >
                        <span className="rooms__service-action-title">
                            Book Now
                        </span>
                    </HoverButton>
                </div>
                <ul className="rooms__service-list">
                    {icons.map((icon, idx) => {
                        const Icon = ICON_MAP[icon] ?? ICON_MAP["default"]
                        return (
                            <li className="rooms__service-item">
                                <span className="rooms__service-item-icon">
                                    <Icon key={idx} />
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </div>
);

export default RoomCard;
