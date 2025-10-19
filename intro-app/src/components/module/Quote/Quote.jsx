import { Container } from "@components/ui"
import { testimonials } from "./../../../constants/sections.js";
import QuoteList from "./componnets/QuoteList/QuoteList.jsx";

import "./Quote.css";
const Quote = () => {

    return (
        <Container>
            <div className="quote">
                <QuoteList testimonials={testimonials} />
            </div>
        </Container>
    )
}

export default Quote;