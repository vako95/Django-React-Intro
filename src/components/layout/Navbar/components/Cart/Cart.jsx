
import "./Cart.css";
import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import ModalContainer from "../../../../ui/ModalContainer/ModalContainer";
import CartModal from "../../../../module/CartModal/CartModal";

const Cart = () => {
    const [open, setOpen] = useState(false);

    const handleToggleCart = () => setOpen((prev) => !prev);
    const handleCloseCart = () => setOpen(false);

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

            {open && (
                <ModalContainer isOpen={open} onClose={handleCloseCart}>
                    <CartModal />
                </ModalContainer>
            )}
        </div>
    );
};

export default Cart;
