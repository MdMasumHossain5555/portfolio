"use client";
import { motion } from "framer-motion";
import { LeftStaggerChild, RightStaggerChild } from "./variants/staggerChild";

const animations = {
    left: LeftStaggerChild,
    right: RightStaggerChild
};

const StaggeredItem = ({children, className, type}) => {
    const staggerChild = animations[type] || LeftStaggerChild;
    return (
        <motion.div 
            className={className}
            variants={staggerChild}
        >
            {children}
        </motion.div>
    );
}

export default StaggeredItem;