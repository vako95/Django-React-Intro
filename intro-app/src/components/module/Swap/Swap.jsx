
import { Container, BackdropContainer, HoverLink } from "@componnets/ui"
import "./Swap.css";

const Swap = () => {

    return (

        <Container>
            <section className="swap">
                <div className="swap__container">
                    <div className="swap__wrapper">
                        <img src="" alt="" />
                    </div>
                    <BackdropContainer backdrop="">
                        <div className="swap__content">
                            <div className="swap__desc">

                            </div>
                            <HoverLink>
                                Discover More
                            </HoverLink>
                        </div>
                    </BackdropContainer>
                </div>
            </section>
        </Container>
    )
}

export default Swap;