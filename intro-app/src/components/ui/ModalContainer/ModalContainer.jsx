import React, { useEffect, forwardRef } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import "./ModalContainer.css";

const Modal = forwardRef(({ className, position, open, onClose, children, height }, ref) => {
    const classes = clsx(
        "modal__content",
        className,
        position === "left" && "modal__content--left",
        position === "right" && "modal__content--right"
    );

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    if (!open) return null;

    return (
        <div className="modal" onClick={onClose}>
            <div
                ref={ref}
                style={{ top: `${parseInt(height) - 16}px` }}
                className={classes}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>

    );
});

export default Modal;
