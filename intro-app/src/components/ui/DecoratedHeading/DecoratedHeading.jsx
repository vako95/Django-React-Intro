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
    desc,
    position,
    fontFamily,
    showLeftIcon = true,
    showRightIcon = true,
    leftIcon = beforeIcon,
    rightIcon = beforeIcon,
}) => {
    const classes = clsx(
        "decorated-heading",
        className
    );
    const containerClasses = clsx(
        "decorated-heading__container",
        position && `decorated-heading__container-position--${position}`
    );
    const letters = title ? title.split("") : [];
    const style = fontFamily ? { fontFamily } : {};


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
                                <h5 style={style} className="decorated-heading__letter">{letter}</h5>
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
                    <FadeInLeft >
                        <h6 className="decorated-heading__subtitle">{subtitle}</h6>
                    </FadeInLeft>
                    <FadeInRight>
                        <p className="decorated-heading__desc">
                            {desc}
                        </p>
                    </FadeInRight>
                </div>
            </div>
        </div>
    );
};

export default DecoratedHeading;
