
import Input from "../../../components/ui/Input/Input";
import "./DebugPages.css";
import { IoMailOutline } from "react-icons/io5";
import Select from "../../../components/ui/Select/Select";
import MonthField from "../../../components/ui/MonthField/MonthField";
import Pricing from "../../../components/module/Pricing/Pricing";
import Quote from "../../../components/module/Quote/Quote";
import Faq from "../../../components/module/Faq/Faq";
import Rooms from "../../../components/module/Rooms/Rooms";
import Slider from "../../../components/ui/GallerySlider/GallerySlider";
import RoomDetails from "../../../components/module/RoomDetails/RoomDetails";
import SliderCreative from "../../../components/ui/GallerySlider/GallerySlider";
import Quantity from "../../../components/ui/Quantity/Quantity";
import CartModal from "../../../components/module/CartModal/CartModal";

import { useScrollBar } from "../../../hooks/useScrollBar";
import ScrollBar from "../../../components/ui/UseScrollBar/ScrollBar";
import ModalContainer from "../../../components/ui/ModalContainer/ModalContainer";
import AdvantagesBar from "../../../components/module/AdvantagesBar/AdvantagesBar";
import Services from "../../../components/module/Services/Services";
import NewsFeed from "../../../components/module/NewsFeed/NewsFeed";
import Swap from "../../../components/module/Swap/Swap";
import Testimonial from "../../../components/module/Testimonial/Testimonial";
import Reservation from "../../../components/module/Reservation/Reservation";
import Gallery from "../../../components/module/Gallery/Gallery.jsx";
import Test from "../../../components/module/Test/Test.jsx";
import GallerySlider from "../../../components/ui/GallerySlider/GallerySlider";
import NavbarSticky from "../../../components/layout/NavbarSticky/NavbarSticky.jsx";

import { HoverLink, HoverButton } from "@components/ui"
import HotelRaiting from "../../../components/ui/HotelRating/HotelRating.jsx";

const items = [
    { id: 1, src: "https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/bg5.jpg" },
    { id: 2, src: "https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/bg5.jpg" },
    { id: 3, src: "https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/bg5.jpg" },
    { id: 4, src: "https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/bg5.jpg" },
];
import { useState } from "react";

import HotelRating from "../../../components/ui/HotelRating/HotelRating.jsx";
import Maintenance from "../../status/Maintenance/Maintenance.jsx";
import AnimationShine from "../../../components/animation/AnimationShine/AnimationShine.jsx";
import News from "../../../components/module/News/News.jsx";

const DebugPages = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 600);
    return (
        <div className="debug-pages">
            <News />

            {/* <AdvantagesBar /> */}
            {/* <Services /> */}
            {/* <Swap /> */}
            {/* <NewsFeed /> */}
            {/* <Pricing /> */}
            {/* <Testimonial /> */}
            {/* <Reservation /> */}


            {/* <Input /> */}
            {/* <Maintenance /> */}

            {/* <BookingFrameInput time="11-11-11" /> */}
            {/* <HotelRaiting
                rating={rating} onChange={setRating}
            /> */}
            {/* <RoomDetails /> */}
            {/* <HoverButton
                btnSize="sm"
                variant="default"
                border={true}
            >
                <span className="fd">
                    Book Now
                </span>
            </HoverButton> */}
            {/* <NavbarSticky /> */}


            {/* <Gallery /> */}
            {/* <Test /> */}

            {/* <BookingFrame
                variant="compact">
                <BookingFrameInput time="11-11-11" />
            </BookingFrame> */}











            {/* <Quantity
                initial={3}
                variant="midnightVelvet"

            /> */}
            {/* <Calendar /> */}
            {/* <Input
                    icon={<IoMailOutline />}
                    position="left"
                    placeholder="Email"
                />

                <Select
                    title="Gender"
                />
                <MonthField

                // selectProps={{
                //     name: "Hello"
                // }}

                />
                <br />

                <Input
                    icon={<IoMailOutline />}
                    position="left"
                    placeholder="Email"
                    type="text"
                    inputProps={{
                        pattern: "^[0-9]+$",
                        onInput: (e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, "");
                        }
                    }}
                /> */}

            {/* <Pricing /> */}
            {/* <Quote /> */}
            {/* <Faq columns={2} /> */}
            {/* <Rooms /> */}
            {/* <RoomDetails /> */}
            {/* <SliderCreative
                    items={items}
                /> */}

            {/* <div className="">
                <ModalContainer>
                    <CartModal />
                </ModalContainer>
            </div> */}


        </div>
    )
}

export default DebugPages;