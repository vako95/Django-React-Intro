import { Container, CalendarFrame, Calendar, GallerySlider } from "@components/ui";
import { IconMirror } from "@components/animation";
import "./RoomDetails.css";
import { useCalendarControl } from "../../../hooks/useCalendarControl";
import { ICON_MAP } from "../../../constants/map";

import BookingFrame from "../../ui/BookingFrame/BookingFrame";
import { BookingFrameInput, HoverButton } from "@components/ui";
// import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Quantity from "../../ui/Quantity/Quantity";
import { TfiLineDashed } from "react-icons/tfi";
import { IoInformationCircleOutline } from "react-icons/io5";
import { useState } from "react";


//LightBox
import Lightbox from "yet-another-react-lightbox";


import "yet-another-react-lightbox/styles.css";


import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Download from "yet-another-react-lightbox/plugins/download";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";


import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
//LightBox


//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import { EffectCreative, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

// import required modules

import HotelCarousel from "../../ui/HotelCarousel/HotelCarousel";
//Swiper
import { slicetext } from "@/utils/slicetext.js"
const galleryImg = [
    { id: 1, src: "https://w0.peakpx.com/wallpaper/137/548/HD-wallpaper-korean-girl-sexy-girl-koran-women.jpg", badge: "Private Bedroom", title: "Standard Double Room", desc: "40-inch LED TV / Mini bar / Non-smoking / USB charging" },
    { id: 2, src: "https://w0.peakpx.com/wallpaper/137/548/HD-wallpaper-korean-girl-sexy-girl-koran-women.jpg", badge: "Private Bedroom", title: "Standard Double Room", desc: "40-inch LED TV / Mini bar / Non-smoking / USB charging" },
    { id: 3, src: "https://w0.peakpx.com/wallpaper/137/548/HD-wallpaper-korean-girl-sexy-girl-koran-women.jpg", badge: "Private Bedroom", title: "Standard Double Room", desc: "40-inch LED TV / Mini bar / Non-smoking / USB charging" },
    { id: 4, src: "https://w0.peakpx.com/wallpaper/137/548/HD-wallpaper-korean-girl-sexy-girl-koran-women.jpg", badge: "Private Bedroom", title: "Standard Double Room", desc: "40-inch LED TV / Mini bar / Non-smoking / USB charging" },
    { id: 5, src: "https://w0.peakpx.com/wallpaper/137/548/HD-wallpaper-korean-girl-sexy-girl-koran-women.jpg", badge: "Private Bedroom", title: "Standard Double Room", desc: "40-inch LED TV / Mini bar / Non-smoking / USB charging" },
    { id: 6, src: "https://w0.peakpx.com/wallpaper/137/548/HD-wallpaper-korean-girl-sexy-girl-koran-women.jpg", badge: "Private Bedroom", title: "Standard Double Room", desc: "40-inch LED TV / Mini bar / Non-smoking / USB charging" },

]


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

    // const [collapse, setCollapse] = useState("");

    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleClick = (index) => {
        setCurrentIndex(index);
        setOpen(true);
    };
    const { ref,
        isOpen,
        setIsOpen,
        toggleDropdown,
        handleClose
    } = useCalendarControl();

    const handleSelectRange = (newRange) => {
        if (!newRange) return;
        setRange(newRange);
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
                                    modules={[EffectCreative]}
                                    className="rooms-details__column-room-slider-swiper"
                                >
                                    {items.map((item) => (
                                        <SwiperSlide key={item.id} className="rooms-details__column-room-slider-frame" >
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
                                <div className="rooms-details__booking-container">
                                    <div className="rooms-details__booking-content" onClick={() => toggleDropdown("calendar")}>
                                        <div className="rooms-details__booking-wrapper">
                                            <div className="rooms-details__booking-field">
                                                <BookingFrameInput
                                                    title="Check In"
                                                    onChange={handleSelectRange}
                                                    value={range.from ? range.from.toISOString().slice(0, 10) :
                                                        <span className="rooms-details__booking-icon">
                                                            <TfiLineDashed />
                                                        </span>
                                                    }
                                                    isOpen={isOpen === "calendar"}
                                                />
                                            </div>
                                            {isOpen === "calendar" && (
                                                <div className="rooms-details__booking-calendar">
                                                    <Calendar range={range} setRange={handleSelectRange} />
                                                </div>
                                            )}
                                        </div>
                                        <div className="rooms-details__booking-wrapper">
                                            <div className="rooms-details__booking-field">
                                                <BookingFrameInput
                                                    title="Check Out"
                                                    onChange={handleSelectRange}
                                                    value={range.to ? range.to.toISOString().slice(0, 10) :
                                                        <span className="rooms-details__booking-icon">
                                                            <TfiLineDashed />
                                                        </span>
                                                    }
                                                    isOpen={isOpen === "calendar"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rooms-details__booking-wrapper">
                                        <div className="rooms-details__booking-field" onClick={() => toggleDropdown("rooms")}>
                                            <BookingFrameInput
                                                title="Rooms"
                                                subtitle="Rooms"
                                                value={rooms}
                                                isOpen={isOpen === "rooms"}
                                            />
                                            {isOpen === "rooms" && (
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
                                    </div>
                                    <div className="rooms-details__booking-wrapper">
                                        <div className="rooms-details__booking-field-group">
                                            <div className="rooms-details__booking-field" onClick={() => toggleDropdown("adults")}>
                                                <BookingFrameInput
                                                    title="Adults"
                                                    value={adults}
                                                    isOpen={isOpen === "adults"}
                                                />

                                                {isOpen === "adults" && (
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
                                            <div className="rooms-details__booking-field" onClick={() => toggleDropdown("childs")}>
                                                <BookingFrameInput
                                                    title="Child"
                                                    value={childs}
                                                    isOpen={isOpen === "childs"}
                                                />

                                                {isOpen === "childs" && (
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
                                    </div>
                                </div>
                            </BookingFrame >
                            <div className="rooms-details__booking-order">
                                <div className="rooms-details__booking-order-table"></div>
                                <div className="rooms-details__booking-order-container">
                                    <div className="rooms-details__booking-order-heading">
                                        <h2 className="rooms-details__booking-order-heading-title">
                                            Total Cost
                                        </h2>
                                        <span className="rooms-details__booking-order-heading-price">
                                            $450
                                        </span>
                                    </div>
                                    <div className="rooms-details__booking-order-base">
                                        <div className="rooms-details__booking-order-base-heading">
                                            <h2 className="rooms-details__booking-order-base-heading-title">
                                                Total Base Price
                                            </h2>
                                            <span className="rooms-details__booking-order-base-heading-icon">
                                                <IoInformationCircleOutline />
                                            </span>
                                        </div>
                                        <span className="rooms-details__booking-order-base-price">
                                            $450
                                        </span>
                                    </div>
                                    <div className="rooms-details__booking-order-total">
                                        <div className="rooms-details__booking-order-total-title">
                                            Total Cost
                                        </div>
                                        <span className="rooms-details__booking-order-total-price">
                                            $450
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="rooms-details__booking-action">
                                <HoverButton>
                                    Book Your Stay Now
                                </HoverButton>
                            </div>
                        </div>

                    </article>
                </div>
                <div className="room-details__gallery">
                    <div className="room-details__gallery-card">
                        {galleryImg.map((item, index) => (
                            <div className="room-details__gallery-card-content">
                                <div className="room-details__gallery-card-wrapper" onClick={() => handleClick(index)}>
                                    <img className="room-details__gallery-card-wrapper-img" src={item.src} alt="" />
                                </div>
                                <div className="room-details__gallery-card-preview">
                                    <h2
                                        className="room-details__gallery-card-preview-title"
                                        data-tooltip-id="my-tooltip"
                                        data-tooltip-content={item.title}

                                    >

                                        {slicetext(item.title, 24)}


                                    </h2>
                                </div>
                            </div>
                        ))}


                        <Lightbox

                            counter={{ container: { style: { top: "unset", bottom: 0 } } }}
                            open={open}
                            index={currentIndex}
                            close={() => setOpen(false)}
                            slides={galleryImg.map((item) => ({
                                src: item.src,
                                alt: `image ${item.id}`,
                            }))}
                            plugins={[Download, Slideshow, Counter, Captions, Thumbnails, Video, Zoom]}
                        />
                    </div>
                </div>
                <div className="room-details__slider">
                    <Swiper
                        slidesPerView={3}
                        centeredSlides={false}
                        spaceBetween={30}
                        grabCursor={true}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        // modules={[Pagination]}
                        className="room-details__slider-content"
                    >
                        {galleryImg.map((item) => (
                            <SwiperSlide className="room-details__slider-slide">
                                <div className="room-details__slider-slide-wrapper">
                                    <HotelCarousel
                                        badge={item.badge}
                                        title={item.title}
                                        desc={item.desc}
                                        src={item.src}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>

            </section>
        </Container >
    )
}

export default RoomDetails;