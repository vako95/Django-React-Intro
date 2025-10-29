import clsx from "clsx";
import "./SubsCribeCheckBox.css";

const SubsCribeCheckBox = ({ color = "green", className, children }) => {

    const classes = clsx(
        "footer__subscribe-form-input-checkbox",
        className,
        color === "gold" && "subscribe__checkbox-gold",
        color === "green" && "subscribe__checkbox-green"
    );

    return (
        <div className={classes}>
            <input type="checkbox" id="test1" className="subscribe__checkbox-input" />
            <label htmlFor="test1" className="footer__subscribe-form-label">
                <p className="subscribe__checkbox-title">{children}</p>
            </label>
        </div>

    );
};

export default SubsCribeCheckBox;
