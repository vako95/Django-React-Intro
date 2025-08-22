import ContactList from "./components/ContactList/ContactList";
import "./Contact.css";

const Contact = () => {

    return (
        <div className="footer__contacts">
            <div className="footer__contacts-heading">
                <h5 className="footer__contacts-heading-title">
                    Information
                </h5>
            </div>
            <div className="footer__contacts-content">
                <ContactList />
            </div>
        </div>
    )
}

export default Contact;