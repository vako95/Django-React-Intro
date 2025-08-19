import { motion } from "framer-motion";

import "./FadeInLeft.css";

const FadeInLeft = ({ children, trigger }) => {
    const variants = {
        hidden: {
            opacity: 0,
            x: -128,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div
            className="fade__in-left"
            key={trigger} // чтобы перезапускалась анимация при смене слайда
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={variants}
        >
            {children}
        </motion.div>
    );
};

export default FadeInLeft;
