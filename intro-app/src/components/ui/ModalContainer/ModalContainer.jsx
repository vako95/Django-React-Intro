import { createPortal } from "react-dom";
import { useEffect } from "react";
import "./ModalContainer.css";
import clsx from "clsx";
const Modal = ({ className, position, open, onClose, children, height }) => {

    const classes = clsx(
        "modal__content",
        className,
        position === "left" && "modal__content--left",
        position === "right" && "modal__content--right",
    );

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();

        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    if (!open) return null;

    return createPortal(
        <div className="modal" onClick={onClose}>
            <div
                style={{ top: (parseInt(height) - 16) + "px" }}
                className={classes}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;

