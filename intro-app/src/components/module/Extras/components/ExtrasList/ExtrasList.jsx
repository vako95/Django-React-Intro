import ExtrasItem from "./components/ExtrasItem";
import "./ExtrasList.css";
import { IconMirror } from "@components/animation";

const ExtrasList = ({ extrasData }) => {

    return (
        <div className="extras__list">
            {extrasData && extrasData.map((item, idx) => (
                <IconMirror key={item.id || idx}>
                    <ExtrasItem
                        title={item.title}
                        icon={item.icon}
                        desc={item.desc}

                    />
                </IconMirror>
            ))}

        </div>
    )
}

export default ExtrasList;