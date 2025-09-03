import { motion } from "framer-motion";
import "./ZoomInUp.css"
const ZoomInUp = ({ children, trigger }) => {
    const variants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.5,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 0.6,
            },
        },
    };

    return (
        <motion.div
            className="zoom-in__up"
            key={trigger}
            initial="hidden"
            animate="visible"
            variants={variants}
        >
            {children}
        </motion.div>
    );
};

export default ZoomInUp;
