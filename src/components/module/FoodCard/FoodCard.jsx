import { SectionWrapper, Container, DecoratedHeading } from "@components/ui";
import { foodItems } from "../../../constants/sections";

import "./FoodCard.css";
import FoodList from "./components/FoodList/FoodList";

const FoodCard = () => {

    return (
        <SectionWrapper bgColor="midnightVelvet">
            <Container>
                <section className="food-card">
                    <div className="food-card-container">
                        <article className="food-card-heading">
                            <DecoratedHeading
                                title="Hoexr best menus"
                                subtitle="Luxury Rooms & Suites"
                            />
                        </article>
                        <FoodList foodItems={foodItems} />
                    </div>
                </section>
            </Container>
        </SectionWrapper>
    )
}

export default FoodCard;