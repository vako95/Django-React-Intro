import "./ContactList.css";

import ContactItem from "./components/ContactItem";

const ContactList = () => {

    return (
        <ul className="footer__contacts-list">
            <ContactItem icon="ri-phone-line" name="1800-121-3637" />
            <ContactItem icon="ri-mail-send-fill" name="needhelp@company.com" />
            <ContactItem icon="ri-map-pin-line" name="1247/Plot No. 39, 15th Phase, United States of America" />
        </ul>
    )
}

export default ContactList;