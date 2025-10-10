import { Container } from "@components/ui"
import Input from "../../components/ui/Input/Input";
import "./DebugPages.css";
import { IoMailOutline } from "react-icons/io5";
const DebugPages = () => {

    return (
        <div className="debug-pages">
            <Container>
                <Input icon={IoMailOutline} />
            </Container>
        </div>
    )
}

export default DebugPages;