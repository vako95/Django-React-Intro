import "./SubscribeForm.css";

import { HoverButton } from "@components/ui";

const SubsciribeForm = () => {
    return (
        <form className="footer__subscribe-form">
            <div className="footer__subscribe-form-group">
                <div className="footer__subscribe-form-email">
                    <input
                        id="id"
                        type="email"
                        placeholder="Enter your email"
                        className="footer__subscribe-form-input"
                    />
                    <HoverButton variant="white" type="submit" className="footer__subscribe-form-button">
                        <i className="ri-telegram-2-line"></i>
                    </HoverButton>
                </div>
            </div>
            <div class="footer__subscribe-form-group">
                <div class="footer__subscribe-form-checkbox">
                    <input type="checkbox" id="test1" class="footer__subscribe-form-label-checkbox" />
                    <label for="test1" class="footer__subscribe-form-label">Red</label>
                </div>
            </div>

        </form>
    )
}

export default SubsciribeForm;