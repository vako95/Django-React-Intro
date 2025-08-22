import "./SubscribeForm.css";

import { HoverButton } from "@components/ui";

const SubsciribeForm = () => {
    return (
        <form className="footer__subscribe-form">
            <div className="footer__subscribe-form-group">
                <div className="footer__subscribe-form-email">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="footer__subscribe-form-email"
                    />
                    <HoverButton type="submit">
                        <i className="ri-telegram-2-line"></i>
                    </HoverButton>
                </div>
            </div>
            <div className="footer__subscribe-form-group">
                <div className="footer__subscribe-form-checkbox">
                    <label htmlFor="">
                        <i></i>
                    </label>
                    <input type="checkbox" />
                </div>
            </div>
        </form>
    )
}

export default SubsciribeForm;