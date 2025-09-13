
import { Container } from "@components/ui";

import Figure from "./components/Figure/Figure.jsx";
import Content from "./components/Content/Content.jsx";

import "./Swap.css";
import { swap } from "../../../constants/sections.js";
const Swap = () => {


    return (

        <section className="swap">
            <Container>
                <article className="swap__container">
                    {swap.map((item, idx) => (
                        <div key={idx} className="swap__switcher">
                            <Figure item={item} />
                            <Content item={item} />
                        </div>
                    ))}
                </article>
            </Container>
        </section>


    )
}

export default Swap;