import { useEffect, useState } from "react";

export const useScroll = (scrollPosition = 150) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= scrollPosition) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition]);

    return { visible };
};
