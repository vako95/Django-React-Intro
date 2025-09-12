
import { Container } from "@components/ui";

import Figure from "./components/Figure/Figure.jsx";
import Content from "./components/Content/Content.jsx";

import "./Swap.css";

const Swap = () => {


    return (
        <section className="swap">
            <Container>
                <article className="swap__container">
                    <div className="swap__switcher">
                        <Figure />
                        <Content />
                    </div>
                </article>
            </Container>
        </section>
    )
}

export default Swap;