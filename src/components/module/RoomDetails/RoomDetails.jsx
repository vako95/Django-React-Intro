import { Container, CalendarFrame, Calendar, GallerySlider } from "@components/ui";
import { IconMirror } from "@components/animation";
import "./RoomDetails.css";
import { useCalendarControl } from "../../../hooks/useCalendarControl";
import { ICON_MAP } from "../../../constants/map";
import { useEffect, useState } from "react";
import BookingFrame from "../../ui/BookingFrame/BookingFrame";
import BookingFrameInput from "../../ui/BookingFrameInput/BookingFrameInput";
// import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Quantity from "../../ui/Quantity/Quantity";
import { TfiLineDashed } from "react-icons/tfi";

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


const RoomDetails = () => {
    const [range, setRange] = useState({ from: undefined, to: undefined });
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(1);
    const [childs, setChilds] = useState(0);

    const [collapse, setCollapse] = useState("");

    const { ref,
        isOpen,
        setIsOpen,
        handleToggle,
        handleClose } = useCalendarControl();

    const handleSelectRange = (newRange) => {
        if (!newRange) return;
        setRange(newRange);
    };

    const toggleDropdown = (type) => {
        setCollapse((prev) => (prev === type ? "" : type))
    };
    return (
        <Container>
            <section className="room-details">
                <div className="rooms-details__columns">
                    <article className="rooms-details__column rooms-details__columns--left">
                        <div className="rooms-details__column-room">
                            <div className="rooms-details__column-room-heading">
                                <h1 className="rooms-details__column-room-heading-title">
                                    Luxury Suite Room
                                </h1>
                            </div>
                            <div className="rooms-details__column-room-subtitle">
                                <ul className="rooms-details__column-room-subtitle-list">
                                    <li className="rooms-details__column-room-subtitle-item">40-inch LED TV</li>
                                    <li className="rooms-details__column-room-subtitle-item">Mini bar</li>
                                    <li className="rooms-details__column-room-subtitle-item">Non-smoking</li>
                                    <li className="rooms-details__column-room-subtitle-item">USB charging</li>
                                </ul>
                            </div>
                            <div className="rooms-details__column-room-overview">
                                <ul className="rooms-details__column-room-overview-list">
                                    {roomDetailsItem.map((item) => {
                                        const Icon = ICON_MAP[item.icons] ?? ICON_MAP["default"];
                                        return (
                                            <li key={item.id} className="rooms-details__column-room-overview-item">
                                                <span className="rooms-details__column-room-overview-item-icon">
                                                    <Icon />
                                                </span>
                                                {item.count && (
                                                    <span className="rooms-details__column-room-overview-item-count">{item.count}</span>
                                                )}
                                                <span className="rooms-details__column-room-overview-item-title">{item.title}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className="rooms-details__column-room-slider">
                                <div className="rooms-details__column-room-slider-content">
                                    <GallerySlider maxHeight="412" items={items} />
                                </div>
                            </div>
                        </div>
                        <div className="rooms-details__column-about">
                            <div className="rooms-details__column-about-heading">
                                <h1 className="rooms-details__column-about-heading-title">
                                    Description of the Room
                                </h1>
                            </div>
                            <div className="rooms-details__column-about-body">
                                <p className="rooms-details__column-about-body-text">
                                    Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla.
                                    Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi.
                                    Quisque vitae odio nec lacus interdum tempus.
                                    Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc.
                                    Sed vitae leo vitae nisl pellentesque semper.
                                </p>
                            </div>

                            <ul className="rooms-details__column-about-list">
                                <li className="rooms-details__column-about-item">
                                    <span className="rooms-details__column-about-item-label">Room Size</span>
                                    <span className="rooms-details__column-about-item-value">600 Sq</span>
                                </li>
                                <li className="rooms-details__column-about-item">
                                    <span className="rooms-details__column-about-item-label">Room Size</span>
                                    <span className="rooms-details__column-about-item-value">600 Sq</span>
                                </li>
                                <li className="rooms-details__column-about-item">
                                    <span className="rooms-details__column-about-item-label">Room Size</span>
                                    <span className="rooms-details__column-about-item-value">600 Sq</span>
                                </li>
                                <li className="rooms-details__column-about-item">
                                    <span className="rooms-details__column-about-item-label">Room Size</span>
                                    <span className="rooms-details__column-about-item-value">600 Sq</span>
                                </li>
                            </ul>

                            <div className="rooms-details__column-about-body">
                                <p className="rooms-details__column-about-body-text">
                                    Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla.
                                    Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi.
                                    Quisque vitae odio nec lacus interdum tempus.
                                    Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc.
                                    Sed vitae leo vitae nisl pellentesque semper.
                                </p>
                            </div>
                        </div>

                        <div className="rooms-details__column-features">
                            <div className="rooms-details__column-features-heading">
                                <h1 className="ooms-details__column-features-heading-title">
                                    Facility of the Room
                                </h1>
                            </div>
                            <ul className="rooms-details__column-features-list">
                                {featuresItem.map((item) => {
                                    const Icon = ICON_MAP[item.icon] ?? ICON_MAP["default"]
                                    return (
                                        <IconMirror>
                                            <li className="rooms-details__column-features-item" key={item.id}>

                                                <span className="rooms-details__column-features-item-icon">
                                                    <Icon className="anime-mirror" />
                                                </span>
                                                <span className="rooms-details__column-features-item-title">
                                                    {item.title}
                                                </span>
                                            </li>
                                        </IconMirror>
                                    )
                                })}
                            </ul>
                        </div>
                    </article>

                    <article className="rooms-details__column rooms-details__columns--right">
                        <div className="rooms-details__booking">
                            <BookingFrame>
                                <div className="rooms-details__booking-content" onClick={handleToggle}>

                                    <div className="rooms-details__booking-field">
                                        <BookingFrameInput

                                            title="Check In"
                                            time={range.from ? range.from.toISOString().slice(0, 10) :
                                                <span className="rooms-details__booking-icon">
                                                    <TfiLineDashed />
                                                </span>
                                            }
                                            isOpen={isOpen}
                                        />
                                    </div>

                                    <div className="rooms-details__booking-field">
                                        <BookingFrameInput
                                            title="Check Out"
                                            time={range.to ? range.to.toISOString().slice(0, 10) :
                                                <span className="rooms-details__booking-icon">
                                                    <TfiLineDashed />
                                                </span>
                                            }
                                            isOpen={isOpen}
                                        />
                                    </div>
                                    {isOpen && (
                                        <div className="rooms-details__booking-calendar">
                                            <Calendar range={range} setRange={handleSelectRange} />
                                        </div>
                                    )}
                                </div>

                                <div className="rooms-details__booking-field">

                                    <BookingFrameInput
                                        onClick={() => toggleDropdown("rooms")}
                                        title="Rooms"

                                        value={rooms}
                                    />
                                    {collapse === "rooms" && (
                                        <div className="rooms-details__booking-dropdown">
                                            <Quantity
                                                title="rooms"
                                                initial={rooms}
                                                min={1}
                                                max={10}
                                                onChange={setRooms}
                                            />
                                        </div>

                                    )}
                                </div>
                                <div className="rooms-details__booking-field-group">
                                    <div className="rooms-details__booking-field">
                                        <BookingFrameInput
                                            onClick={() => toggleDropdown("adults")}
                                            title="Adults"
                                            value={adults}
                                        />

                                        {collapse === "adults" && (
                                            <div className="rooms-details__booking-dropdown">
                                                <Quantity
                                                    variant="small"
                                                    initial={adults}
                                                    min={1}
                                                    max={10}
                                                    onChange={setAdults}
                                                />
                                            </div>

                                        )}
                                    </div>
                                    <div className="rooms-details__booking-field">
                                        <BookingFrameInput
                                            onClick={() => toggleDropdown("childs")}
                                            title="Childs"
                                            value={childs}
                                        />

                                        {collapse === "childs" && (
                                            <div className="rooms-details__booking-dropdown">
                                                <Quantity
                                                    variant="small"
                                                    initial={childs}
                                                    min={1}
                                                    max={10}
                                                    onChange={setChilds}
                                                />
                                            </div>

                                        )}
                                    </div>

                                </div>

                            </BookingFrame >
                        </div>

                    </article>
                </div>
            </section>
        </Container >
    )
}

export default RoomDetails;