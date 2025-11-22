import { Container, HoverLink } from "@components/ui";
import { Link } from "react-router-dom";
import clsx from "clsx"
import Logo from "./components/Logo/Logo";
import Menu from "./components/Menu/Menu";
import React from "react";
import "./Navbar.css";

import Cart from "./components/Cart/Cart";


const Navbar = ({ className, bgColor, cart = false }) => {
    const classes = clsx(
        "navbar__container",
        bgColor && `navbar__container-bgColor--${bgColor}`,
        className
    );

    return (
        <div className="navbar">
            <Container>
                <div className={classes}>
                    <div className="navbar__nav">
                        <Logo />
                        <Menu />
                    </div>
                    <div className="navbar__controls">
                        <div className="navbar__controls-item">
                            <HoverLink
                                className="navbar__controls-item-action"
                                size="sm"
                                variant="silver"
                                bgColor="rgba(170, 132, 83, 1)"
                            >
                                Book Now
                            </HoverLink>
                        </div>
                        <div className="navbar__controls-item">
                            <Cart />
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default React.memo(Navbar);