'use client';

import { motion } from "motion/react";

import "./popups.css";

type LevyCASPopupProps = {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
};

export default function LevyCASPopup({ isOpen, setIsOpen }: LevyCASPopupProps) {
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
                <section>
                    <h1>LevyCAS</h1>
                    <p>
                        LevyCAS is a computer algebra system written in pure python and developed as a python package. 
                        LevyCAS uses a built-in Pratt parser capable of turning natural language mathematical
                        expressions into Python objects that can be manipulated. 
                        The system comes equipped with a set of powerful operations, including automatic simplification, 
                        symbolic integration and differentation, polynomial greatest common divisors, integer 
                        factorization, and more.
                    </p>
                </section>
                <button onClick={() => setIsOpen(false)}>Close</button>
            </motion.div>
        </motion.div>
    )
}

// Desc:

// function LevyCAS() {
//   return (
//     <div className="text-md md:text-2xl text-gray-400">A capable computer algebra system written entirely in python,
//       complete with a Pratt Parser for parsing natural language into mathematical expressions. 
//       Comes equipped with operations from calculus and number theory, including symbolic integration and 
//       prime factorization.
//     </div>
//   )
// }