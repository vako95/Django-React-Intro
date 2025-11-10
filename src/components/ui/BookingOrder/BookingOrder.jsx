import "./BookingOrder.css";
import { IoInformationCircleOutline } from "react-icons/io5";
import { Formik, Form } from "formik";
import Input from "../Input/Input";
import { SiAuthelia } from "react-icons/si";

const BookingOrder = ({ value }) => {

    return (
        <div className="booking-order">
            <div className="booking-order-table"></div>
            <div className="booking-order-container">
                <div className="booking-order-heading">
                    <h2 className="booking-order-heading-title">
                        Total Cost
                    </h2>
                    <span className="booking-order-heading-price">
                        ${value}
                    </span>
                </div>
                <div className="booking-order-base">
                    <div className="booking-order-base-heading">
                        <h2 className="booking-order-base-heading-title">
                            Total Base Price
                        </h2>
                        <span className="booking-order-base-heading-icon">
                            <IoInformationCircleOutline />
                        </span>
                    </div>
                    <span className="booking-order-base-price">
                        ${value}
                    </span>
                </div>

                <div className="booking-order-coupon">
                    <label htmlFor="coupon" className="booking-order-coupon-label">
                        Have  Promo Code ? hərflər
                    </label>
                    <div className="booking-order-coupon-input-wrapper">
                        <Input
                            inputProps={{
                                name: "promo_code",
                            }}
                            icon={<SiAuthelia />}
                            position="left"
                            placeholder="Promo"
                        />
                    </div>
                </div>
                <div className="booking-order-total">
                    <div className="booking-order-total-title">
                        Total Cost
                    </div>
                    <span className="booking-order-total-price">
                        ${value}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BookingOrder;