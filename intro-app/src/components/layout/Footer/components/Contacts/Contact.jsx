import ContactList from "./components/ContactList/ContactList";
import "./Contact.css";

const Contact = () => {

    return (
        <div className="contacts">
            <div className="contacts__heading">
                <h5>Contact</h5>
            </div>
            <div className="contacts__content">
                <ContactList />
            </div>
        </div>
    )
}

export default Contact;