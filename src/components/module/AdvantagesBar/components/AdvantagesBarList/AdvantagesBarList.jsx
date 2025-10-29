
import { IconMirror } from "@components/animation";

import AdvantagesBarItem from "./components/AdvantagesBarItem/AdvantagesBarItem";
import "./AdvantagesBarList.css";
const AdvantagesBarList = ({ advantagesBarData }) => {

    return (
        <div className="advantages-bar__list">
            {advantagesBarData && advantagesBarData.map((item, idx) => (
                <IconMirror key={item.id || idx}>
                    <AdvantagesBarItem
                        title={item.title}
                        icon={item.icon}
                        desc={item.desc}
                    />
                </IconMirror>
            ))}

        </div>
    )
}

export default AdvantagesBarList;