import "./SubsciribeForm.css";
import { HoverButton } from "@components/ui";

const SubsciribeForm = () => {
    return (
        <form className="subscribe__form">
            <div className="subscribe__form-group">
                <div className="subscribe__form-email">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="subscribe__form-email"
                    />
                    <HoverButton type="submit">
                        <i class="ri-telegram-2-line"></i>
                    </HoverButton>
                </div>
            </div>
            <div className="subscribe__form-group">
                <div className="subscribe__form-checkbox">
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