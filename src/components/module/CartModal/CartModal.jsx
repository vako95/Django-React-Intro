import { HoverButton } from "@components/ui";
import { useState } from "react";
import Quantity from "../../ui/Quantity/Quantity";
import "./CartModal.css";
import { CiTrash } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";

const CartModal = () => {
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(1);
    const [childs, setChilds] = useState(0);

    return (

        <div className="cart__modal" onClick={(e) => e.stopPropagation()}>
            <div className="cart__modal-heading">
                <h2 className="cart__modal-heading-title">
                    Booking Cart
                </h2>
            </div>
            <ul className="cart__modal-list">
                <li className="cart__modal-item">
                    <div className="cart__modal-item-wrapper">
                        <div className="cart__modal-item-container">
                            <div className="cart__modal-item-media">
                                <img className="cart__modal-item-media-img" src="https://dev24.kodesolution.com/hoexr/wp-content/uploads/2024/05/room3-1100x550.jpg" alt="" />
                            </div>
                            <div className="cart__modal-item-container">
                                <div className="cart__modal-item-content">
                                    <div className="cart__modal-item-heading">
                                        <h2 className="cart__modal-item-heading-title">
                                            Luxury Suite Room
                                        </h2>
                                    </div>
                                    <div className="cart__modal-item-meta">
                                        <div className="cart__modal-item-meta-price">
                                            <span className="cart__modal-item-meta-price-current">
                                                120$
                                            </span>
                                            <del className="cart__modal-item-meta-price-old">
                                                140$
                                            </del>
                                        </div>
                                        <div className="cart__modal-item-meta-date">
                                            <span className="cart__modal-item-meta-date-day">
                                                day
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart__modal-item-control">

                                    <div className="cart__modal-item-control-action">
                                        <Quantity
                                            variant="small"
                                            title="rooms"
                                            initial={rooms}
                                            min={0}
                                            max={10}
                                            onChange={setRooms}
                                        />
                                    </div>

                                    <div className="cart__modal-item-control-action">
                                        <Quantity
                                            variant="small"
                                            title="Adult"
                                            initial={adults}
                                            min={0}
                                            max={10}
                                            onChange={setAdults}
                                        />
                                    </div>
                                    <div className="cart__modal-item-control-action">
                                        <Quantity
                                            variant="small"
                                            title="child"
                                            initial={childs}
                                            min={1}
                                            max={10}
                                            onChange={setChilds}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cart__modal-actions">
                            <div className="cart__modal-action">
                                <HoverButton>
                                    <span className="cart__modal-action-icon">
                                        <CiSettings />
                                    </span>
                                </HoverButton>
                            </div>
                            <div className="cart__modal-action">
                                <HoverButton>
                                    <span className="cart__modal-action-icon">
                                        <CiTrash />
                                    </span>
                                </HoverButton>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="cart__modal-item">
                    <div className="cart__modal-item-wrapper">
                        <div className="cart__modal-item-container">
                            <div className="cart__modal-item-media">
                                <img className="cart__modal-item-media-img" src="https://dev24.kodesolution.com/hoexr/wp-content/uploads/2024/05/room3-1100x550.jpg" alt="" />
                            </div>
                            <div className="cart__modal-item-container">
                                <div className="cart__modal-item-content">
                                    <div className="cart__modal-item-heading">
                                        <h2 className="cart__modal-item-heading-title">
                                            Luxury Suite Room
                                        </h2>
                                    </div>
                                    <div className="cart__modal-item-meta">
                                        <div className="cart__modal-item-meta-price">
                                            <span className="cart__modal-item-meta-price-current">
                                                120$
                                            </span>
                                            <del className="cart__modal-item-meta-price-old">
                                                140$
                                            </del>
                                        </div>
                                        <div className="cart__modal-item-meta-date">
                                            <span className="cart__modal-item-meta-date-day">
                                                day
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart__modal-item-control">

                                    <div className="cart__modal-item-control-action">
                                        <Quantity
                                            variant="small"
                                            title="rooms"
                                            initial={rooms}
                                            min={0}
                                            max={10}
                                            onChange={setRooms}
                                        />
                                    </div>

                                    <div className="cart__modal-item-control-action">
                                        <Quantity
                                            variant="small"
                                            title="Adult"
                                            initial={adults}
                                            min={0}
                                            max={10}
                                            onChange={setAdults}
                                        />
                                    </div>
                                    <div className="cart__modal-item-control-action">
                                        <Quantity
                                            variant="small"
                                            title="child"
                                            initial={childs}
                                            min={1}
                                            max={10}
                                            onChange={setChilds}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cart__modal-actions">
                            <div className="cart__modal-action">
                                <HoverButton>
                                    <span className="cart__modal-action-icon">
                                        <CiSettings />
                                    </span>
                                </HoverButton>
                            </div>
                            <div className="cart__modal-action">
                                <HoverButton>
                                    <span className="cart__modal-action-icon">
                                        <CiTrash />
                                    </span>
                                </HoverButton>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="cart__modal-item">
                    <div className="cart__modal-item-wrapper">
                        <div className="cart__modal-item-container">
                            <div className="cart__modal-item-media">
                                <img className="cart__modal-item-media-img" src="https://dev24.kodesolution.com/hoexr/wp-content/uploads/2024/05/room3-1100x550.jpg" alt="" />
                            </div>
                            <div className="cart__modal-item-container">
                                <div className="cart__modal-item-content">
                                    <div className="cart__modal-item-heading">
                                        <h2 className="cart__modal-item-heading-title">
                                            Luxury Suite Room
                                        </h2>
                                    </div>
                                    <div className="cart__modal-item-meta">
                                        <div className="cart__modal-item-meta-price">
                                            <span className="cart__modal-item-meta-price-current">
                                                120$
                                            </span>
                                            <del className="cart__modal-item-meta-price-old">
                                                140$
                                            </del>
                                        </div>
                                        <div className="cart__modal-item-meta-date">
                                            <span className="cart__modal-item-meta-date-day">
                                                day
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart__modal-item-control">

                                    <div className="cart__modal-item-control-action">
                                        <Quantity
                                            variant="small"
                                            title="rooms"
                                            initial={rooms}
                                            min={0}
                                            max={10}
                                            onChange={setRooms}
                                        />
                                    </div>

                                    <div className="cart__modal-item-control-action">
                                        <Quantity
                                            variant="small"
                                            title="Adult"
                                            initial={adults}
                                            min={0}
                                            max={10}
                                            onChange={setAdults}
                                        />
                                    </div>
                                    <div className="cart__modal-item-control-action">
                                        <Quantity
                                            variant="small"
                                            title="child"
                                            initial={childs}
                                            min={1}
                                            max={10}
                                            onChange={setChilds}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cart__modal-actions">
                            <div className="cart__modal-action">
                                <HoverButton>
                                    <span className="cart__modal-action-icon">
                                        <CiSettings />
                                    </span>
                                </HoverButton>
                            </div>
                            <div className="cart__modal-action">
                                <HoverButton>
                                    <span className="cart__modal-action-icon">
                                        <CiTrash />
                                    </span>
                                </HoverButton>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="cart__modal-item">
                    <div className="cart__modal-item-wrapper">
                        <div className="cart__modal-item-container">
                            <div className="cart__modal-item-media">
                                <img className="cart__modal-item-media-img" src="https://dev24.kodesolution.com/hoexr/wp-content/uploads/2024/05/room3-1100x550.jpg" alt="" />
                            </div>
                            <div className="cart__modal-item-container">
                                <div className="cart__modal-item-content">
                                    <div className="cart__modal-item-heading">
                                        <h2 className="cart__modal-item-heading-title">
                                            Luxury Suite Room
                                        </h2>
                                    </div>
                                    <div className="cart__modal-item-meta">
                                        <div className="cart__modal-item-meta-price">
                                            <span className="cart__modal-item-meta-price-current">
                                                120$
                                            </span>
                                            <del className="cart__modal-item-meta-price-old">
                                                140$
                                            </del>
                                        </div>
                                        <div className="cart__modal-item-meta-date">
                                            <span className="cart__modal-item-meta-date-day">
                                                day
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart__modal-item-control">

                                    <div className="cart__modal-item-control-action">
                                        <Quantity
                                            variant="small"
                                            title="rooms"
                                            initial={rooms}
                                            min={0}
                                            max={10}
                                            onChange={setRooms}
                                        />
                                    </div>

                                    <div className="cart__modal-item-control-action">
                                        <Quantity
                                            variant="small"
                                            title="Adult"
                                            initial={adults}
                                            min={0}
                                            max={10}
                                            onChange={setAdults}
                                        />
                                    </div>
                                    <div className="cart__modal-item-control-action">
                                        <Quantity
                                            variant="small"
                                            title="child"
                                            initial={childs}
                                            min={1}
                                            max={10}
                                            onChange={setChilds}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cart__modal-actions">
                            <div className="cart__modal-action">
                                <HoverButton>
                                    <span className="cart__modal-action-icon">
                                        <CiSettings />
                                    </span>
                                </HoverButton>
                            </div>
                            <div className="cart__modal-action">
                                <HoverButton>
                                    <span className="cart__modal-action-icon">
                                        <CiTrash />
                                    </span>
                                </HoverButton>
                            </div>
                        </div>
                    </div>
                </li>






            </ul>
            <div className="cart__modal-control">
                <div className="cart__modal-control-action">
                    <HoverButton>
                        View Cart
                    </HoverButton>
                </div>
                <div className="cart__modal-control-action">
                    <HoverButton>
                        Chek Out
                    </HoverButton>
                </div>
            </div>

        </div>



    )
}

export default CartModal;


// <div className="cart__modal">
//     <div className="cart__modal-heading">
//         <h2 className="cart__modal-heading-title">
//             Booking Cart
//         </h2>
//     </div>
//     <ul className="cart__modal-list">
//         <li className="cart__modal-item">
//             <div className="cart__modal-item-media">
//                 <img className="cart__modal-item-media-img" src="https://dev24.kodesolution.com/hoexr/wp-content/uploads/2024/05/room3-1100x550.jpg" alt="" />
//             </div>
//             <div className="cart__modal-item-content">
//                 <div className="cart__modal-item-heading">
//                     <div className="cart__modal-item-heading-inner">
//                         <h2 className="cart__modal-item-heading-inner-title">
//                             Luxury Suite Room
//                         </h2>
//                     </div>
//                     <div className="cart__modal-item-heading-meta">
//                         <div className="cart__modal-item-heading-meta-price">
//                             <span className="cart__modal-item-heading-meta-price-current">
//                                 128
//                             </span>
//                             <del className="cart__modal-item-heading-meta-price-old">
//                                 128
//                             </del>
//                         </div>
//                         <div className="cart__modal-item-heading-meta-date">
//                             <span className="cart__modal-item-heading-meta-date-day">
//                                 /day
//                             </span>
//                         </div>
//                     </div>
//                 </div>



//                 <div className="cart__modal-item-control">
//                     <div className="cart__modal-item-control-panel">
//                         <span className="cart__modal-item-control-panel-title">
//                             Room
//                         </span>
//                     </div>
//                     <Quantity />
//                 </div>
//                 <div className="cart__modal-item-control">
//                     <div className="cart__modal-item-control-panel">
//                         <span className="cart__modal-item-control-panel-title">
//                             Room
//                         </span>
//                     </div>
//                     <Quantity />
//                 </div>
//                 <div className="cart__modal-item-control">
//                     <div className="cart__modal-item-control-panel">
//                         <span className="cart__modal-item-control-panel-title">
//                             Room
//                         </span>
//                     </div>
//                     <Quantity />
//                 </div>
//             </div>


//             <div className="cart__modal-item-actions">
//                 <div className="cart__modal-item-action">
//                     <span className="cart__modal-item-action-icon">
//                         <CiTrash />
//                     </span>
//                 </div>
//             </div>
//         </li>
//     </ul>
// </div>
