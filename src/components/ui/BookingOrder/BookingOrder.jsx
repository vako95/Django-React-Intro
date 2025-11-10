import "./BookingOrder.css";
import { IoInformationCircleOutline } from "react-icons/io5";
import { Formik, Form } from "formik";
import Input from "../Input/Input";
import { SiAuthelia } from "react-icons/si";

const BookingOrder = ({ value }) => {

    return (
        <div className="booking-order">
            <div className="booking-order__table"></div>
            <div className="booking-order__container">
                <div className="booking-order__heading">
                    <h2 className="booking-order__heading-title">
                        Total Cost
                    </h2>
                    <span className="booking-order__heading-price">
                        ${value}
                    </span>
                </div>
                <div className="booking-order__base">
                    <div className="booking-order__base-heading">
                        <h2 className="booking-order__base-heading-title">
                            Total Base Price
                        </h2>
                        <span className="booking-order__base-heading-icon">
                            <IoInformationCircleOutline />
                        </span>
                    </div>
                    <span className="booking-order__base-price">
                        ${value}
                    </span>
                </div>
                <div className="booking-order__coupon">
                    <div className="booking-order__coupon-input-wrapper">
                        <Input
                            label="Coupon"
                            id="coupon"
                            inputProps={{
                                name: "promo_code",
                            }}
                            icon={<SiAuthelia />}
                            position="left"
                            placeholder="Promo"
                        />
                    </div>
                </div>
                <div className="booking-order__total">
                    <div className="booking-order__total-title">
                        Total Cost
                    </div>
                    <span className="booking-order__total-price">
                        ${value}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BookingOrder;