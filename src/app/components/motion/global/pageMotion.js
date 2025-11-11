"use client";
import { routeFade } from "../variants/routeFade";
import { motion, AnimatePresence } from "framer-motion";

export const PageMotion = ({ children }) => {
    return (
        <AnimatePresence mode="wait">
        <motion.div
            variants={routeFade}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {children}
        </motion.div>
        </AnimatePresence>
    );
}