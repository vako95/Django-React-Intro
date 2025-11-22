import { Container } from "@components/ui";
import clsx from "clsx"
import Logo from "./components/Logo/Logo";
import Menu from "./components/Menu/Menu";
import { memo } from "react";
import "./NavbarSticky.css";

import { FaPhoneAlt } from "react-icons/fa";


import { useScroll } from "../../../hooks/useScroll";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
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

                                    <Link className="navbar-sticky__controls-link" to="tel:+994506732059">
                                        <span className="navbar-sticky__controls-link-icon">
                                            <FaPhoneAlt />
                                        </span>
                                    </Link>
                                    <div className="navbar-sticky__controls-phone">
                                        <h2 className="navbar-sticky__controls-phone-title">
                                            Call Anytime
                                        </h2>
                                        <Link
                                            className="navbar-sticky__controls-phone-link" to="tel:+994506732059">
                                            <span className="navbar-sticky__controls-phone-link-number">
                                                + 994 ( 050 ) 6732059
                                            </span>
                                        </Link>
                                    </div>
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