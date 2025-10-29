import { Container, CalendarFrame, Calendar, GallerySlider } from "@components/ui";
import { IconMirror } from "@components/animation";
import "./RoomDetails.css";

import { ICON_MAP } from "../../../constants/map";

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
                            <div className="rooms-details__booking-heading">
                                <h1 className="rooms-details__booking-heading-title">
                                    Reserve:
                                </h1>

                                <span className="rooms-details__booking-subtitle">
                                    From <span className="rooms-details__booking-subtitle-price">$150</span>/night
                                </span>
                            </div>
                            <div className="rooms-details__booking-content">
                                <CalendarFrame
                                    padding={false}
                                >
                                    {/* <Calendar
                                        variant="medium"
                                    /> */}
                                </CalendarFrame>
                            </div>
                        </div>

                    </article>
                </div>
            </section>
        </Container >
    )
}

export default RoomDetails;