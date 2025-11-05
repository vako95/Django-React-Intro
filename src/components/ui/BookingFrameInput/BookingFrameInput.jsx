import clsx from "clsx";
import { IoChevronDown } from "react-icons/io5";

import "./BookingFrameInput.css";

const BookingFrameInput = ({ time, value, isOpen, title, subtitle, ...props }) => {

    return (
        <div className="frame-input" {...props}>

            {time && (
                <div className="frame-input__time">
                    <input
                        className="frame-input__field"
                        value={time}
                        type="text"
                        disabled
                        hidden
                    />

                    {title && (
                        <h4 className="frame-input__heading-title">
                            {title}
                        </h4>
                    )}

                    <span className="frame-input__date-value" >
                        {value}
                    </span>

                    <time className="frame-input__time-value" dateTime={time} >
                        {time}
                    </time>
                </div>
            )}
            {value && (
                <div className="frame-input__date">
                    <input
                        className="frame-input__field"
                        value={value}
                        type="text"
                        disabled
                        hidden
                    />
                    <div className="frame-input__heading">
                        <h4 className="frame-input__heading-title">
                            {title}
                        </h4>
                    </div>
                    <div className="frame-input__content">
                        {subtitle && (
                            <span className="frame-input__date-subtitle">
                                {subtitle}
                            </span>
                        )}

                        <span className="frame-input__date-value" >
                            {value}
                        </span>
                    </div>

                </div>
            )}
            <div className="frame-input__badge">
                <span className={clsx("frame-input__badge-icon", { "frame-input__badge-icon--open": isOpen })}>
                    <IoChevronDown />
                </span>
            </div>



        </div>
    )
}
export default BookingFrameInput;