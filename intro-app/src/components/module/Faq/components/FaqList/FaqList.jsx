import { useState } from "react";
import FaqItem from "./components/FaqItem/FaqItem.jsx";

import "./FaqList.css";


const FaqList = ({ items }) => {
    const [openIdx, setOpenIdx] = useState(0);
    const handleCollapse = (id) => {
        setOpenIdx((prev) => {
            if (prev === id) return 0;
            return id;
        })
    }

    return (
        <ul className="faq__list">

            {items.map((item) => (
                <FaqItem
                    key={item.id}
                    collapsed={openIdx === item.id}
                    handleCollapse={handleCollapse}
                    item={item}
                />
            ))}
        </ul>
    )
}

export default FaqList;