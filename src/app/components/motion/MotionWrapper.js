"use client";
import { motion } from "framer-motion";
import { rightColumn, leftColumn } from "./variants/columns";
import fadeIn from "./variants/fadeIn";
import { upDownPalse } from "./variants/upDownPalse";
import { leftRightPalse } from "./variants/leftRightPalse";
import { infinityCarousel } from "./variants/infinityCarousel";


const animations = {
    left: leftColumn,
    right: rightColumn,
    fadeIn: fadeIn,
    upDownPalse,
    leftRightPalse,
    infinityCarousel
};

export const MotionWrapper = ({type = "fadeIn", delay=0, children,className="", once= true}) => {
    const variant = animations[type] || fadeIn; 
    return ( 
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: once, amount: 0.4 }}
        variants={variant}
        transition={{ delay: delay }}
        className={className}
    >
        {children}  
        </motion.div>
    );
}