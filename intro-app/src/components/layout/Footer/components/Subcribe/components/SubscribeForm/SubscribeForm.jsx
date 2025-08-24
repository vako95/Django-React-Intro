import "./SubscribeForm.css";

import { HoverButton } from "@components/ui";
import SubsCribeCheckBox from "../../../../../../ui/SubscribeCheckbox/SubscribeCheckbox";
const SubsciribeForm = () => {
    return (
        <form className="footer__subscribe-form">
            <div className="footer__subscribe-form-group">
                <div className="footer__subscribe-email">
                    <input
                        id="id"
                        type="email"
                        placeholder="Enter your email"
                        className="footer__subscribe-email-field"
                    />
                    <HoverButton variant="white" type="submit" className="footer__subscribe-email-button">
                        <i className="ri-telegram-2-line"></i>
                    </HoverButton>
                </div>
            </div>
            <div className="footer__subscribe-form-group">
                <div className="footer__subscribe-checkbox">
                    <SubsCribeCheckBox color="gold">
                        I agree to all terms and policies
                    </SubsCribeCheckBox>
                </div>
            </div>
        </form>
    )
}

export default SubsciribeForm;