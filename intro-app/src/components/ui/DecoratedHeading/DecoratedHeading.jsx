import clsx from "clsx";
import beforeIcon from "./assets/icon/before.png";
import "./DecoratedHeading.css";

import { FadeInWordRight } from "@components/animation";
import FadeInLeft from "../../animation/FadeInLeft/FadeInLeft";
import FadeInRight from "../../animation/FadeInRight/FadeInRight";

const DecoratedHeading = ({
    className,
    subtitle,
    title,
    position,
    showLeftIcon = true,
    showRightIcon = true,
    leftIcon = beforeIcon,
    rightIcon = beforeIcon,
}) => {
    const classes = clsx("decorated-heading",
        className
    );
    const containerClasses = clsx(
        "decorated-heading__container",
        position && `decorated-heading__container-position--${position}`
    );
    const letters = title.split("");
    const words = subtitle ? subtitle.split("") : [];

    return (
        <div className={classes}>
            <div className={containerClasses}>
                <div className="decorated-heading__content">
                    {showLeftIcon && (
                        <FadeInLeft>
                            <div className="decorated-heading-cover">
                                <img src={leftIcon} alt="" className="decorated-heading__icon" />
                            </div>
                        </FadeInLeft>
                    )}

                    {letters.map((letter, idx) => (
                        <FadeInWordRight key={idx} custom={idx} direction="up">
                            <div className="decorated-heading__letters" key={idx}>
                                <h5 className="decorated-heading__letter">{letter}</h5>
                            </div>
                        </FadeInWordRight>
                    ))}

                    {showRightIcon && (
                        <FadeInRight>
                            <div className="decorated-heading-cover">
                                <img src={rightIcon} alt="" className="decorated-heading__icon" />
                            </div>
                        </FadeInRight>
                    )}
                </div>

                <div className="decorated-heading-wrapper">

                    <FadeInRight direction="left">
                        <h6 className="decorated-heading__subtitle">{subtitle}</h6>
                    </FadeInRight>
                </div>
            </div>
        </div>
    );
};

export default DecoratedHeading;
