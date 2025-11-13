import { delay } from "framer-motion";

export const rightColumn = {
    hidden: { 
        x: 100, 
        opacity: 0 
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

export const leftColumn = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: { 
        x: 0, 
        opacity: 1, 
        transition: {
             duration: 0.6,
             staggerChildren: 0.2,
             delayChildren: 0.1,
            } 
        },
};