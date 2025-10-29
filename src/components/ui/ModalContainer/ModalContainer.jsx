import "./ModalContainer.css";
import { createPortal } from "react-dom";
import { useEffect } from "react";

const ModalContainer = ({ children }) => {

    useEffect(() => {

        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return createPortal(
        <div className="modal">
            {children}
        </div>,
        document.body
    )
}

export default ModalContainer;