import Quantity from "../../ui/Quantity/Quantity";
import "./CartModal.css";
import { CiTrash } from "react-icons/ci";

const CartModal = () => {

    return (

        <div className="cart__modal">
            <div className="cart__modal-heading">
                <h2 className="cart__modal-heading-title">
                    My Cart
                </h2>
            </div>
            <ul className="cart__modal-list">
                <li className="cart__modal-item">
                    <div className="cart__modal-item-media">
                        <img className="cart__modal-item-media-img" src="https://dev24.kodesolution.com/hoexr/wp-content/uploads/2024/05/room3-1100x550.jpg" alt="" />
                    </div>
                    <div className="cart__modal-item-content">
                        <div className="cart__modal-item-heading">
                            <h1 className="cart__modal-item-heading-title">
                                Shirts Men's Clothing
                            </h1>
                            <span className="cart__modal-item-heading-icon">
                                i
                            </span>
                        </div>
                        <div className="cart__modal-item-price">
                            <span className="cart__modal-item-price-new">128</span>
                            <del className="cart__modal-item-price-old">128</del>
                        </div>
                        <div className="cart__modal-item-control">
                            <div className="cart__modal-item-control-panel">
                                <span className="cart__modal-item-control-panel-title">
                                    <span className="cart__modal-item-control-panel-count">10</span>
                                    Room
                                </span>
                            </div>
                            <Quantity />
                        </div>
                    </div>
                    <div className="cart__modal-item-actions">
                        <div className="cart__modal-item-action">
                            <span className="cart__modal-item-action-icon">
                                <CiTrash />
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>


    )
}

export default CartModal;