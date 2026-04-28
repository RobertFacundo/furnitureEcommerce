import { useEffect, type RefObject } from "react";

type Handler = () => void;

export const useClickOutside = (
    ref: RefObject<HTMLElement | null>,
    handler: Handler
) => {
    useEffect(() => {
        const listener = (event: MouseEvent) => {
            const target = event.target as Node;

            if (!ref.current || ref.current.contains(target)) return;

            handler();
        };

        document.addEventListener('mousedown', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler]);
};