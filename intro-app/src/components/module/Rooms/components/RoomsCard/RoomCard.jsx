import { Link } from "react-router-dom";

const RoomCard = ({ cover, title, price }) => (
    <div className="rooms__card">
        <img src={cover} alt={title} className="rooms__card-backdrop" />
        <div className="rooms__content">
            <Link className="rooms__content-link" to="#">
                {title}
            </Link>
            <span className="rooms__content-price">${price} / Night</span>
        </div>
    </div>
);

export default RoomCard;
