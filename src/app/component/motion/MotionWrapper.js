"use client";
import { motion } from "framer-motion";
import { rightColumn, leftColumn } from "./variants/columns";
import fadeIn from "./variants/fadeIn";
import { upDownPalse } from "./variants/upDownPalse";


const animations = {
    left: leftColumn,
    right: rightColumn,
    fadeIn: fadeIn,
    upDownPalse,
};

export const MotionWrapper = ({type = "fadeIn", delay =0, children, once= true}) => {
    const variant = animations[type] || fadeIn; 
    return ( 
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: once }}
        variants={variant}
        transition={{ delay: delay }}
    >
        {children}  
        </motion.div>
    );
}