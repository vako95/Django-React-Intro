import { Container } from "@components/ui"
import Input from "../../components/ui/Input/Input";
import "./DebugPages.css";
import { IoMailOutline } from "react-icons/io5";
import Select from "../../components/ui/Select/Select";
import MonthField from "../../components/ui/MonthField/MonthField";
const DebugPages = () => {

    return (
        <div className="debug-pages">
            <Container>
                <Input
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
            </Container>
        </div>
    )
}

export default DebugPages;