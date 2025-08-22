import SubsciribeForm from "./components/SubscribeForm/SubscribeForm";
import "./Subscribe.css";

const Subscribe = () => {

    return (
        <div className="footer__subscribe">
            <div className="footer__subscribe-heading">
                <h5 className="footer__subscribe-title">Newsletter</h5>
                <p className="footer__subscribe-desc">Lorem ipsum dolor sit amet consectetur Augue id fermentum</p>
            </div>

            <div className="footer__subscribe-content">
                <SubsciribeForm />
            </div>
        </div>
    )
}

export default Subscribe;