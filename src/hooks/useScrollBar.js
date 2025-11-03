import { useRef, useState, useEffect } from "react";

export const useScrollBar = () => {
    const containerRef = useRef(null);
    const [scrollData, setScrollData] = useState({
        scrollTop: 0,
        scrollHeight: 0,
        clientHeight: 0,
    });

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const handleScroll = () => {
            setScrollData({
                scrollTop: el.scrollTop,
                scrollHeight: el.scrollHeight,
                clientHeight: el.clientHeight,
            });
        };

        handleScroll();
        el.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        return () => {
            el.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return { containerRef, ...scrollData };
};
