import { useClickOutside } from "@reactuses/core";
import { useCallback, useRef, useState } from "react";


export const useCalendarControl = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);
    const handleToggle = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    useClickOutside(ref, handleClose, ["pointerdown"]);

    return {
        ref,
        isOpen,
        setIsOpen,
        handleToggle,
        handleClose,
    }
}