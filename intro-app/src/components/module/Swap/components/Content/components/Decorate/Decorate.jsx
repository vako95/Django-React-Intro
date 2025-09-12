import { HoverLink, DecoratedHeading } from "@components/ui";
import "./Decorate.css";

const Decorate = () => {

    return (
        <div className="swap__holder-decorate">
            <DecoratedHeading
                className="swap__holder-text"
                fontFamily="'Barlow Condensed', sans-serif"
                showLeftIcon={false}
                position="start"
                title="Modern"
                subtitle="Fitness Center"
                desc="Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea
                      seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen
                      nivami acsestion augue artine.
                " />
            <div className="swap__holder-btn">
                <HoverLink size="lg" variant="transparent">
                    Discover More
                </HoverLink>
            </div>
        </div>
    )
}

export default Decorate;