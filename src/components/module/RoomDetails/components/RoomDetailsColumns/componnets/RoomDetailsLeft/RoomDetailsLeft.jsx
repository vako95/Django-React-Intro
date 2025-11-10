
import { Swiper, SwiperSlide } from 'swiper/react';
import "./RoomDetailsLeft.css";
import { IconMirror } from "@components/animation";

import { ICON_MAP } from "@constants";



const RoomDetailsLeft = ({ details, showcaseItems, features }) => {

    return (
        <article className="rooms-details__column rooms-details__columns--left">
            <div className="rooms-details__column-showcase">
                <div className="rooms-details__column-showcase-heading">
                    <h1 className="rooms-details__column-showcase-heading-title">
                        Luxury Suite Room
                    </h1>
                </div>
                <div className="rooms-details__column-showcase-subtitle">
                    <ul className="rooms-details__column-showcase-subtitle-list">
                        <li className="rooms-details__column-showcase-subtitle-item">40-inch LED TV</li>
                        <li className="rooms-details__column-showcase-subtitle-item">Mini bar</li>
                        <li className="rooms-details__column-showcase-subtitle-item">Non-smoking</li>
                        <li className="rooms-details__column-showcase-subtitle-item">USB charging</li>
                    </ul>
                </div>
                <div className="rooms-details__column-showcase-overview">
                    <ul className="rooms-details__column-showcase-overview-list">
                        {details.map((item) => {
                            const Icon = ICON_MAP[item.icons] ?? ICON_MAP["default"];
                            return (
                                <li key={item.id} className="rooms-details__column-showcase-overview-item">
                                    <span className="rooms-details__column-showcase-overview-item-icon">
                                        <Icon />
                                    </span>
                                    {item.count && (
                                        <span className="rooms-details__column-showcase-overview-item-count">{item.count}</span>
                                    )}
                                    <span className="rooms-details__column-showcase-overview-item-title">{item.title}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="rooms-details__column-showcase-slider">
                    <Swiper
                        grabCursor={true}
                        effect={"creative"}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                translate: [0, 0, -400],
                            },
                            next: {
                                translate: ["100%", 0, 0],
                            },
                        }}

                        className="rooms-details__column-showcase-slider-swiper"
                    >
                        {showcaseItems.map((item) => (
                            <SwiperSlide key={item.id} className="rooms-details__column-showcase-slider-frame" >
                                <img className="slider-creative__swiper-frame-img"
                                    src={item.src}
                                    alt={item.id}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>


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
                    {features.map((item) => {
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
    )
}

export default RoomDetailsLeft;