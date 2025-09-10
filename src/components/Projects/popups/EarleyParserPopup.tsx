'use client';

import { motion } from "motion/react";

// Components
import Link from "next/link";
import Image from "next/image";

// Icon images
import pythonlogo from "@/assets/projects/modals/pythonlogo.svg"; // Python

// Icons
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FiX } from "react-icons/fi"; // Close icon

// Styles
import "./popups.css";

// Images
import earleydemo from "@/assets/projects/earleydemo.png";

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
                {/* Close Icon */}
                <button className="modalTopClose" onClick={() => setIsOpen(false)}><FiX /></button>

                {/* Headers */}
                <h1>Earley Parser Generator</h1>
                <h2>Powerful Parser for E-BNF Context-Free Gramars</h2>
                
                {/* Tech Stack */}
                <ul className="projectStack">
                    <li><Image src={pythonlogo} alt="Python logo"/>Python</li>
                </ul>

                {/* Overview */}
                <p>
                    This project allows users to define grammars, written in Extended Backaus-Naur Form (E-BNF),
                    and parse text into abstract syntax trees, with methods for extracting and modifying these trees.
                </p>
                <br />
                {/* Container for image and features list */}
                <div className="featuresContainer">
                    {/* Features */}
                    <div className="projectFeatures">
                        <h3>Features</h3>
                        <ul>
                            <li>Parses implicit multiplication and elementary functions using a Pratt parsing algorithm.</li>
                            <li>Performs symbolic operations including integration, differentiation, and polynomial GCD computation.</li>
                            <li>Includes automated testing with Pytest and GitHub Actions.</li>
                            <li>Offers an online API for web applications requiring symbolic math.</li>
                        </ul>
                    </div>
                    

                    {/* Image */}
                    <div className="projectImage">
                        <Image
                            className="projectImage"
                            src={earleydemo}
                            width="883"
                            height="306"
                            alt="A sample of the LevyCAS README, providing two examples on how to integrate expressions with the package."
                        />
                    </div>


                </div>

                {/* Github Link */}
                {/* <Link href="https://github.com/ajlevy246/levycas"><FaGithub /></Link> */}


                <Link className="modalGithubLink" href="https://github.com/ajlevy246/"><FaGithub /></Link>

                {/* Close button */}
                <button className="modalBottomClose" onClick={() => setIsOpen(false)}>Close</button>
            </motion.div>
        </motion.div>
    )
}

// Desc:

// A python package capable of parsing arbitrary user defined context-free grammars.
// Uses a top-down Earley Parser written in pure python—returns ambiguous parse forests,
// with methods to extract and modify trees.