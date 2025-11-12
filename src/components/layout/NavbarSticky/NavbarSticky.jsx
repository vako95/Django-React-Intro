import { Container, HoverLink } from "@components/ui";
import clsx from "clsx"
import Logo from "./components/Logo/Logo";
import Menu from "./components/Menu/Menu";
import { memo } from "react";
import "./NavbarSticky.css";
import Cart from "./components/Cart/Cart";
import { useScroll } from "../../../hooks/useScroll";
import { AnimatePresence, motion } from "framer-motion";
const NavbarSticky = ({ className, bgColor }) => {
    const { visible } = useScroll(200)

    const classes = clsx(
        "navbar-sticky__container",
        bgColor && `navbar-sticky__container-bgColor--${bgColor}`,
        className
    )

    return (
        <AnimatePresence initial={false}>
            {visible && (
                <motion.div
                    className="navbar-sticky__motion"
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -60 }}
                    transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
                >
                    <div className="navbar-sticky">
                        <Container>
                            <div className={classes}>
                                <div className="navbar-sticky__nav">
                                    <Logo />
                                    <Menu />
                                </div>
                                <div className="navbar-sticky__controls">
                                    <HoverLink className="navbar-sticky__controls-link">
                                        Book Now
                                    </HoverLink>
                                    <Cart />
                                </div>
                            </div>
                        </Container>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

    )
}

export default memo(NavbarSticky);