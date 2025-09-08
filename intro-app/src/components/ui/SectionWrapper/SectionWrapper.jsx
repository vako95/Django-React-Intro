import clsx from "clsx";

import "./SectionWrapper.css";

const SectionWrapper = ({ className, children }) => {

    const classes = clsx(
        "section-wrapper",
        className
    )
    return (
        <section className={classes}>
            {children}
        </section>
    )
}

export default SectionWrapper