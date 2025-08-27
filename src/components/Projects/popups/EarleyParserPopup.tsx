'use client';

import { motion } from "motion/react";

import "./popups.css";

type LevyCASPopupProps = {
    setIsOpen: (open: boolean) => void;
};

export default function EarleyParserPopup({ setIsOpen }: LevyCASPopupProps) {
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
                <p>Python parser for user-defined context-free grammar.</p>
                <p> More information soon! </p>
                <button onClick={() => setIsOpen(false)}>Close</button>
            </motion.div>
        </motion.div>
    )
}

// Desc:

// function EarleyParser() {
//   return (
//     <div>A python package capable of parsing arbitrary user defined context-free grammars.
//       Uses a top-down Earley Parser written in pure python—returns ambiguous parse forests, with methods to extract and modify trees.
//     </div>
//   )
// }