import "./OverlayContent.css";
import { DecoratedHeading } from "@components/ui";
const OverlayContent = () => {

    return (
        <article className="overlay__section overlay__section--left">
            <div className="overlay__content">
                <div className="overlay__heading">
                    <DecoratedHeading
                        position="start"
                        showLeftIcon={false}
                        showRightIcon={true}
                        title="Promotional video"
                        subtitle="Book Hotal Roomset Deals & Book Flights Online."
                    />
                </div>
            </div>
        </article>
    )
}


export default OverlayContent;

