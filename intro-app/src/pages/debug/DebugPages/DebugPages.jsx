import { Container } from "@components/ui"
import Input from "../../../components/ui/Input/Input";
import "./DebugPages.css";
import { IoMailOutline } from "react-icons/io5";
import Select from "../../../components/ui/Select/Select";
import MonthField from "../../../components/ui/MonthField/MonthField";
import Pricing from "../../../components/module/Pricing/Pricing";
import Quote from "../../../components/module/Quote/Quote";
import Faq from "../../../components/module/Faq/Faq";
import Rooms from "../../../components/module/Rooms/Rooms";
const DebugPages = () => {

    return (
        <div className="debug-pages">
            <Container>
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
                <Rooms />
            </Container>
        </div>
    )
}

export default DebugPages;