"use client"
import React from 'react';
import { motion, useInView } from 'framer-motion';

export default function SlideIn({ children, className, direction = 'bottom', duration = 0.5, delay = 1, as = 'div' }) {

    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    const variants = {
        left: { initial: { opacity: 0, x: -150, scale: 0.5 }, animate: { opacity: 1, x: 0, scale: 1 } },
        right: { initial: { opacity: 0, x: 150, scale: 0.5 }, animate: { opacity: 1, x: 0, scale: 1 } },
        top: { initial: { opacity: 0, y: -50, scale: 0.5 }, animate: { opacity: 1, y: 0, scale: 1 } },
        bottom: { initial: { opacity: 0, y: 50, scale: 0.5 }, animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 1 } } }
    };

    const MotionComponent = motion[as];

    return (
        <MotionComponent
            ref={ref}
            initial={variants[direction].initial} // Set initial state based on direction
            animate={isInView ? variants[direction].animate : {}} // Set animate state based on direction
            transition={{ duration, delay }} // Set duration and delay
            className={className} // Add your desired classes
        >
            {children}
        </MotionComponent>
    );
};