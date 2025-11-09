import { useClickOutside } from "@reactuses/core";
import { useCallback, useRef, useState } from "react";


export const useCalendarControl = () => {
    const [isOpen, setIsOpen] = useState("");
    const ref = useRef(null);

    const toggleDropdown = useCallback((type) => {
        setIsOpen((prev) => (prev === type ? "" : type));
    }, []);

    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    useClickOutside(ref, handleClose, ["pointerdown"]);

    return {
        ref,
        isOpen,
        setIsOpen,
        toggleDropdown,
        handleClose,
    }
}