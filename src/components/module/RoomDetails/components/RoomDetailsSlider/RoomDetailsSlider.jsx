import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import "./RoomDetailsSlider.css";
import { HotelCarousel } from "@components/ui";

const galleryImg = [
    { id: 1, src: "https://w0.peakpx.com/wallpaper/137/548/HD-wallpaper-korean-girl-sexy-girl-koran-women.jpg", badge: "Private Bedroom", title: "Standard Double Room", desc: "40-inch LED TV / Mini bar / Non-smoking / USB charging" },
    { id: 2, src: "https://w0.peakpx.com/wallpaper/137/548/HD-wallpaper-korean-girl-sexy-girl-koran-women.jpg", badge: "Private Bedroom", title: "Standard Double Room", desc: "40-inch LED TV / Mini bar / Non-smoking / USB charging" },
    { id: 3, src: "https://w0.peakpx.com/wallpaper/137/548/HD-wallpaper-korean-girl-sexy-girl-koran-women.jpg", badge: "Private Bedroom", title: "Standard Double Room", desc: "40-inch LED TV / Mini bar / Non-smoking / USB charging" },
    { id: 4, src: "https://w0.peakpx.com/wallpaper/137/548/HD-wallpaper-korean-girl-sexy-girl-koran-women.jpg", badge: "Private Bedroom", title: "Standard Double Room", desc: "40-inch LED TV / Mini bar / Non-smoking / USB charging" },
    { id: 5, src: "https://w0.peakpx.com/wallpaper/137/548/HD-wallpaper-korean-girl-sexy-girl-koran-women.jpg", badge: "Private Bedroom", title: "Standard Double Room", desc: "40-inch LED TV / Mini bar / Non-smoking / USB charging" },
    { id: 6, src: "https://w0.peakpx.com/wallpaper/137/548/HD-wallpaper-korean-girl-sexy-girl-koran-women.jpg", badge: "Private Bedroom", title: "Standard Double Room", desc: "40-inch LED TV / Mini bar / Non-smoking / USB charging" },

]
const RoomDetailsSlider = () => {

    return (
        <div className="room-details__slider">
            <div className="room-details__slider-heading">
                <h2 className="room-details__slider-heading-title">
                    Similar Rooms
                </h2>
            </div>
            <div className="room-details__slider-content">
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    slidesPerView={3}
                    centeredSlides={false}
                    spaceBetween={30}
                    grabCursor={true}
                    modules={[Autoplay]}
                    className="room-details__slider-container"
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
        </div>
    )
}

export default RoomDetailsSlider;