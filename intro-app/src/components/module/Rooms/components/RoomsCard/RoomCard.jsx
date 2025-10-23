import { Link } from "react-router-dom";
import { HoverButton } from "@components/ui";

const RoomCard = ({ cover, title, price }) => (
    <div className="rooms__card" style={{ backgroundImage: `url(${cover})` }}>

        <div className="rooms__wrapper">
            <div className="rooms__content">
                <Link className="rooms__content-link" to="#">
                    {title}
                </Link>
                <span className="rooms__content-price">${price} / Night</span>

            </div>
            <div className="rooms__service">

                <div className="rooms__service-btn">
                    <HoverButton>
                        Book Now
                    </HoverButton>
                </div>
                <ul className="">
                    <li className="">

                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default RoomCard;
