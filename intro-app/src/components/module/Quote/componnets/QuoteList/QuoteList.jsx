import QuoteItem from "./components/QuoteItem/QuoteItem";
import "./QuoteList.css";
const QuoteList = ({
    testimonials
}) => {

    return (
        <ul className="quote__list">
            {testimonials.map((item, idx) => (
                <QuoteItem item={item} key={idx} />
            ))}
        </ul>
    )
}

export default QuoteList;