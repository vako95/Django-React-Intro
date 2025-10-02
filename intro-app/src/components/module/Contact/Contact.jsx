import "./Contact.css";
import { Calendar } from "@components/ui";
import { CalendarFrame } from "@components/ui";

const Contact = () => {

    return (
        <section className="contact">
            <div className="contact__wrapper">
                <div className="contact__columns">
                    <div className="contact__column contact__column--left">
                        <div className="contact__column-calendar">
                            {/* <Calendar /> */}
                            <CalendarFrame />
                        </div>
                    </div>
                    <div className="contact__column contact__column--right">

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;