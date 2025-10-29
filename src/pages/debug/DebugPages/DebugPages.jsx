
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

const items = [
    { id: 1, src: "https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/bg5.jpg" },
    { id: 2, src: "https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/bg5.jpg" },
    { id: 3, src: "https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/bg5.jpg" },
    { id: 4, src: "https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/bg5.jpg" },
];




const DebugPages = () => {

    return (
        <div className="debug-pages">
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



        </div>
    )
}

export default DebugPages;