import clsx from "clsx";
import beforeIcon from "./assets/icon/before.png";
import "./DecoratedHeading.css";

import { FadeInWordRight } from "@components/animation";
import FadeInLeft from "../../animation/FadeInLeft/FadeInLeft";
import FadeInRight from "../../animation/FadeInRight/FadeInRight";

const DecoratedHeading = ({ className, subtitle, title }) => {
    const classes = clsx("decorated-heading", className);
    const letters = title.split("");
    const words = subtitle ? subtitle.split("") : [];

    return (
        <div className={classes}>
            <div className="decorated-heading__container">
                <div className="decorated-heading__content">
                    <FadeInLeft>
                        <div className="decorated-heading-cover">
                            <img src={beforeIcon} alt="" className="decorated-heading__icon" />
                        </div>
                    </FadeInLeft>

                    {letters.map((letter, idx) => (
                        <div className="decorated-heading__letters" key={idx}>
                            <h5 className="decorated-heading__letter">{letter}</h5>
                        </div>

                    ))}
                    <FadeInRight>
                        <div className="decorated-heading-cover">
                            <img src={beforeIcon} alt="" className="decorated-heading__icon" />
                        </div>
                    </FadeInRight>

                </div>
                <div className="decorated-heading-wrapper">
                    {words.map((word, idx) => (
                        <FadeInWordRight key={idx} custom={idx} direction="left">
                            <h6 className="decorated-heading__subtitle">{word}</h6>
                        </FadeInWordRight>
                    ))}
                </div>


            </div>

        </div>
    );
};

export default DecoratedHeading;
