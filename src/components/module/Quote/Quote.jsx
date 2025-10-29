import { Container } from "@components/ui"
import { testimonials } from "./../../../constants/sections.js";
import QuoteList from "./componnets/QuoteList/QuoteList.jsx";

import "./Quote.css";

const Quote = () => {

    return (
        <Container>
            <section className="quote">
                <QuoteList testimonials={testimonials} />
            </section>
        </Container>
    )
}

export default Quote;