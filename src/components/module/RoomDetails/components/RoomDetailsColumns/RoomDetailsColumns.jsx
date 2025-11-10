
import { useState } from "react";
import "./RoomDetailsColumns.css";

import RoomDetailsLeft from "./componnets/RoomDetailsLeft/RoomDetailsLeft";
import RoomDetailsRight from "./componnets/RoomDetailsRight/RoomDetailsRight";

const items = [
    { id: 1, src: "https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/bg5.jpg" },
    { id: 2, src: "https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/bg5.jpg" },
    { id: 3, src: "https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/bg5.jpg" },
    { id: 4, src: "https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/bg5.jpg" },
];

const roomDetailsItem = [
    {
        id: 1,
        count: 3,
        title: "Guests",
        icons: ["people"]
    },
    {
        id: 2,
        count: 2,
        title: "Bathroom",
        icons: ["sofa"]
    },
    {
        id: 3,
        count: 2,
        title: "Wifi Available",
        icons: ["wifi"]
    },
    {
        id: 4,

        title: "Air Conditioning",
        icons: ["conditioner"]
    },
    {
        id: 5,
        count: null,
        title: "600 m2",
        icons: ["bed"]
    },
];

const featuresItem = [
    {
        id: 1,
        title: "Parking",
        icon: ["parking"]
    },
    {
        id: 2,
        title: "Pool",
        icon: ["pool"]
    },
    {
        id: 3,
        title: "Gymnasium",
        icon: ["gym"]
    },
    {
        id: 4,
        title: "Security",
        icon: ["security"]
    },
    {
        id: 5,
        title: "Swiming",
        icon: ["swiming"]
    },
    {
        id: 6,
        title: "Lighting",
        icon: ["light"]
    },
];

const RoomDetailsColumns = () => {
    const [range, setRange] = useState({ from: undefined, to: undefined });
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(1);
    const [childs, setChilds] = useState(0);


    const handleSelectRange = (newRange) => {
        if (!newRange) return;
        setRange(newRange);

    };
    return (
        <div className="rooms-details__columns">
            <RoomDetailsLeft
                showcaseItems={items}
                details={roomDetailsItem}
                features={featuresItem}
            />
            <RoomDetailsRight
                range={range}
                setRange={setRange}
                rooms={rooms}
                adults={adults}
                setAdults={setAdults}
                childs={childs}
                setChilds={setChilds}
                handleSelectRange={handleSelectRange}
            />
        </div>
    )
}

export default RoomDetailsColumns;