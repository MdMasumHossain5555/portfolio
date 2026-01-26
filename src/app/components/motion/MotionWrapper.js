"use client";
import { motion } from "framer-motion";
import { rightColumn, leftColumn } from "./variants/columns";
import fadeIn from "./variants/fadeIn";
import { upDownPalse } from "./variants/upDownPalse";
import { leftRightPalse } from "./variants/leftRightPalse";
import { infinityCarousel } from "./variants/infinityCarousel";
import { bottomVariant } from "./variants/bottom";
import { rotateClockwise, rotateAntiClockwise } from "./variants/roundMotion";


const animations = {
    left: leftColumn,
    right: rightColumn,
    fadeIn: fadeIn,
    upDownPalse,
    leftRightPalse,
    infinityCarousel, 
    bottom: bottomVariant,
    rotateClockwise,
    rotateAntiClockwise,
};

export const MotionWrapper = ({ type = "fadeIn", delay = 0, children, className = "", once = true }) => {
    const variant = animations[type] || fadeIn;
    const variantTransition = variant?.visible?.transition || {};
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: once, amount: 0.3 }}
            variants={variant}
            custom={delay}
            transition={{
                ...variantTransition,
                delay: delay
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}