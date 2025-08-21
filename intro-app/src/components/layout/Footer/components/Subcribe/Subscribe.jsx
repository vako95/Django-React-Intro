
import SubsciribeForm from "./components/SubsciribeForm/SubsciribeForm";
import "./Subscribe.css";

const Subscribe = () => {

    return (
        <div className="subscribe">
            <div className="subscribe__heading">
                <h5 className="subscribe__title">Newsletter</h5>
                <span className="subscribe__desc">Lorem ipsum dolor sit amet consectetur Augue id fermentum</span>
            </div>

            <div className="subscribe__content">
                <SubsciribeForm />
            </div>
        </div>
    )
}

export default Subscribe;