import { Container, HoverLink } from "@components/ui";
import clsx from "clsx"
import Logo from "./components/Logo/Logo";
import Menu from "./components/Menu/Menu";
import React, { useEffect } from "react";
import "./NavbarSticky.css";
import Cart from "./components/Cart/Cart";
import { useScroll } from "../../../hooks/useScroll";

const NavbarSticky = ({ className, bgColor }) => {
    const { visible } = useScroll(200)
    // const classes = clsx(
    //     "navbar__container",
    //     bgColor && `navbar__container-bgColor--${bgColor}`,
    //     className
    // )
    const classes = clsx(
        "navbar__container",
        bgColor && `navbar__container-bgColor--${bgColor}`,
        className
    )

    return (
        visible && (
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
        )

    )
}

export default React.memo(NavbarSticky);