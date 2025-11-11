import { Container, HoverLink } from "@components/ui";
import clsx from "clsx"
import Logo from "./components/Logo/Logo";
import Menu from "./components/Menu/Menu";
import React from "react";
import "./NavbarSticky.css";
import Cart from "./components/Cart/Cart";


const NavbarSticky = ({ className, bgColor, cart = false }) => {
    const classes = clsx(
        "navbar__container",
        bgColor && `navbar__container-bgColor--${bgColor}`,
        className
    )
    return (
        <div className="navbar-sticky">
            <Container>
                <div className={classes}>
                    <div className="navbar__nav">
                        <Logo />
                        <Menu />
                    </div>
                    <div className="header__controls">
                        <HoverLink className="header__controls-link">Book Now</HoverLink>
                        <Cart />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default React.memo(NavbarSticky);