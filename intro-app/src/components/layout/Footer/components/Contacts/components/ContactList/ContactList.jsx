import "./ContactList.css";

import { contactNav } from "../../../../../../../constants/navigations";
import ContactItem from "./components/ContactItem";

const ContactList = () => {

    return (
        <ul>
            {contactNav.map((item, idx) => (
                <ContactItem item={item} key={idx} />
            ))}
        </ul>
    )
}

export default ContactList;