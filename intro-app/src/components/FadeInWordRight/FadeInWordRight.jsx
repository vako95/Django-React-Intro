import { motion } from "framer-motion";
import "./FadeInWordRight.css";

const FadeInWordRight = ({ children, custom }) => {
    const variants = {
        hidden: {
            opacity: 0,
            x: 128, // можно уменьшить "вылет", было 128
        },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.9,
                ease: "easeOut",
                delay: i * 0.1,
            },
        }),
    };


    return (
        <motion.div
            className="fade__in-word-right"
            custom={custom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={variants}
        >
            {children}
        </motion.div>
    );
};

export default FadeInWordRight;
