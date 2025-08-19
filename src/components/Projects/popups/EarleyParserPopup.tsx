'use client';

import { motion } from "motion/react";

import "./popups.css";

type LevyCASPopupProps = {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
};

export default function EarleyParserPopup({ isOpen, setIsOpen }: LevyCASPopupProps) {
    return (
        // Popup container
        <motion.div
            className="projectPopup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
        >
            {/* Popup content */}
            <motion.div
                className="projectBox"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
            >
                <h1>Earley Parser</h1>
                <p className="pb-[200px]">Python parser for user-defined context-free grammar.</p>
                <button className="cursor-pointer glow" onClick={() => setIsOpen(false)}>Close</button>
            </motion.div>
        </motion.div>)
}