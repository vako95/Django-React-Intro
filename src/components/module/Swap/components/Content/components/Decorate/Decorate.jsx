import { HoverLink, DecoratedHeading } from "@components/ui";
import "./Decorate.css";

const Decorate = ({ item }) => {

    return (
        <div className="swap__holder-decorate">
            <DecoratedHeading
                className="swap__holder-text"
                fontFamily="'Barlow Condensed', sans-serif"
                showLeftIcon={false}
                position="start"
                title={item.title}
                subtitle={item.subtitle}
                desc={item.desc} />
            <div className="swap__holder-btn">
                <HoverLink size="lg" variant="transparent">
                    Discover More
                </HoverLink>
            </div>
        </div>
    )
}

export default Decorate;