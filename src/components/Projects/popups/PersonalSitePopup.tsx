'use client';

import { motion } from "motion/react";

import "./popups.css";

type LevyCASPopupProps = {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
};

export default function PersonalSitePopup({ isOpen, setIsOpen }: LevyCASPopupProps) {
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
                <h1>Portfolio Site</h1>
                <p>My personal site, with more info about me. </p>
                <p>More information soon!</p>
                <button onClick={() => setIsOpen(false)}>Close</button>
            </motion.div>
        </motion.div>
    )
}

// Desc:

// function PersonalSite() {
//   return (
//     <div>
//       A capable computer algebra system written entirely in python,
//       complete with a Pratt Parser for parsing natural language into mathematical expressions. 
//       Comes equipped with operations from calculus and number theory, including symbolic integration and 
//       prime factorization.
//     </div>
//   )
// }