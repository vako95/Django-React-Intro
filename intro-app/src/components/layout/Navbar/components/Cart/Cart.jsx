
import "./Cart.css";
import { useState } from "react";
import { useEffect } from "react";
import { CiShoppingCart } from "react-icons/ci";
import ModalContainer from "../../../../ui/ModalContainer/ModalContainer";
import CartModal from "../../../../module/CartModal/CartModal";
import { motion } from "framer-motion";
const Cart = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleCart = () => setIsOpen((prev) => !prev);
    const handleCloseCart = () => {
        setIsOpen((prev) => {
            console.log(prev)
            return !prev;
        })
    };

    useEffect(() => {
        if (isOpen) document.body.classList.add("overflow-hidden");
        else document.body.classList.remove("overflow-hidden");
        return () => document.body.classList.remove("overflow-hidden");
    }, [isOpen]);

    return (
        <div className="cart">
            <div className="cart__content" onClick={handleToggleCart}>
                <div className="cart__badge">
                    <span className="cart__badge-icon">
                        <CiShoppingCart />
                    </span>
                    <span className="cart__badge-count">(0)</span>
                </div>
            </div>


            <ModalContainer isOpen={isOpen} onClose={handleCloseCart}>
                <motion.div
                    className="cart__panel"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "tween", duration: 0.3 }}
                >
                    <CartModal />
                </motion.div>
            </ModalContainer>
        </div>
    );
};

export default Cart;
