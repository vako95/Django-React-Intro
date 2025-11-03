import { Container, HoverLink } from "@components/ui";
import { Link } from "react-router-dom";
import clsx from "clsx"
import Logo from "./components/Logo/Logo";
import Menu from "./components/Menu/Menu";
import React from "react";
import "./Navbar.css";
import ModalContainer from "../../ui/ModalContainer/ModalContainer";
import CartModal from "../../module/CartModal/CartModal";
import Cart from "./components/Cart/Cart";


const Navbar = ({ className, bgColor, cart = false }) => {
    const classes = clsx(
        "navbar__container",
        bgColor && `navbar__container-bgColor--${bgColor}`,
        className
    )
    return (
        <div className="navbar">
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



                    {/* <div className="navbar-controller">
                        <HoverLink className={`navbar-controller__link ${cart ? "navbar-controller__link--spaced" : ""}`}>
                            {cart ? 'Book a Consultation' : 'Book Now'}
                        </HoverLink>
                         {cart && (
                            <ModalContainer>
                                <CartModal />
                            </ModalContainer>
                         )}
                        {cart && (
                            <div className="navbar__cart">
                                <div className="navbar__cart-holder">
                                    <div className="navbar__cart-holder-wrapper">
                                        <i className="navbar__cart-holder-icon  ri-shopping-cart-line"></i>
                                    </div>
                                    <div className="navbar__cart-holder-badge">
                                        <span className="navbar__cart-holder-count">0</span>
                                    </div>
                                    <div className="navbar__cart-dropdown">
                                        <ul className="navbar__cart-list">
                                            <li className="navbar__cart-item">
                                                <div className="navbar__cart-item-content">

                                                    <div className="navbar__cart-item-details">
                                                        <div className="navbar__cart-item-details-content">
                                                            <div className="navbar__cart-item-details-main">
                                                                <Link type="button" className="navbar__cart-item-details-remove">
                                                                    ×
                                                                </Link>
                                                                <Link className="navbar__cart-item-details-link">
                                                                    Luxury Suite Room
                                                                </Link>
                                                            </div>
                                                            <div className="navbar__cart-item-details-price">
                                                                <span className="navbar__cart-item-details-qty">1 ×</span>
                                                                <span className="navbar__cart-item-details-value">$90.00</span>
                                                            </div>
                                                        </div>
                                                        <div className="navbar__cart-details-wrapper">
                                                            <img className="navbar__cart-details-img" src="https://dev24.kodesolution.com/hoexr/wp-content/uploads/2024/05/room3-150x150.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="navbar__cart-subtotal">
                                                        <h4 className="navbar__cart-subtotal-title">Subtotal</h4>
                                                        <span className="navbar__cart-subtotal-value">$90.00</span>
                                                    </div>
                                                    <div className="navbar__cart-actions">
                                                        <HoverLink size="md">
                                                            View cart
                                                        </HoverLink>
                                                        <HoverLink size="md">
                                                            Checkout
                                                        </HoverLink>
                                                    </div>
                                                </div>

                                            </li>
                                            <li className="navbar__cart-item">
                                                <div className="navbar__cart-item-content">

                                                    <div className="navbar__cart-item-details">
                                                        <div className="navbar__cart-item-details-content">
                                                            <div className="navbar__cart-item-details-main">

                                                                <Link type="button" className="navbar__cart-item-details-remove">
                                                                    ×
                                                                </Link>
                                                                <Link className="navbar__cart-item-details-link">
                                                                    Luxury Suite Room
                                                                </Link>
                                                            </div>
                                                            <div className="navbar__cart-item-details-price">
                                                                <span className="navbar__cart-item-details-qty">1 ×</span>
                                                                <span className="navbar__cart-item-details-value">$90.00</span>
                                                            </div>
                                                        </div>
                                                        <div className="navbar__cart-details-wrapper">
                                                            <img className="navbar__cart-details-img" src="https://dev24.kodesolution.com/hoexr/wp-content/uploads/2024/05/room3-150x150.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="navbar__cart-subtotal">
                                                        <h4 className="navbar__cart-subtotal-title">Subtotal</h4>
                                                        <span className="navbar__cart-subtotal-value">$90.00</span>
                                                    </div>
                                                    <div className="navbar__cart-actions">
                                                        <HoverLink size="md">
                                                            View cart
                                                        </HoverLink>
                                                        <HoverLink size="md">
                                                            Checkout
                                                        </HoverLink>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        )
                        }

                    </div> */}
                </div>
            </Container>
        </div>
    )
}

export default React.memo(Navbar);