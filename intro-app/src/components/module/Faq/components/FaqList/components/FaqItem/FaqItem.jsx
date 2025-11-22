import useCurrentHeight from "../../../../../../../hooks/useCurrentHeight";
import clsx from "clsx";
import { FaAngleDown } from "react-icons/fa6";
import "./FaqItem.css";


const FaqItem = ({
    item,
    collapsed,
    handleCollapse
}) => {
    const [ref, height] = useCurrentHeight([item]);
    return (
        <li
            key={item.id}
            className={clsx("faq__item", collapsed ? "faq__item--collapsed" : undefined)}
        >
            <button className="faq__item-toggle" onClick={() => handleCollapse(item.id)} type="button" >
                <h1 className="faq__item-toggle-question">
                    {item.q}
                </h1>
                <span className="faq__item-toggle-icon">
                    <FaAngleDown />
                </span>
            </button>
            <div className="faq__item-content">
                <p className="faq__item-answer" style={{ height: collapsed ? height : 0 }} ref={ref}>
                    {item.a}
                </p>
            </div>
        </li>
    )
}

export default FaqItem;