'use client';

// Dynamic
import { motion } from "motion/react";
import { useState } from "react";

// Components
import Link from "next/link";
import Image from "next/image";

// Icon Images
import pythonlogo from "@/assets/projects/modals/pythonlogo.svg"; // Python
import huggingfacelogo from "@/assets/projects/modals/huggingfacelogo.svg"; // HuggingFace
import pytestlogo from "@/assets/projects/modals/pytestlogo.svg"; // Pytest

// Icons
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Github, External Link icon
import { FiX } from "react-icons/fi"; // Close button


// Styles
import "./popups.css";

// Images
import casexample from "@/assets/projects/levycasdemo.png";

type LevyCASPopupProps = {
    setIsOpen: (open: boolean) => void;
};

export default function LevyCASPopup({ setIsOpen }: LevyCASPopupProps) {

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
                <h1>LevyCAS</h1>
                <h2>Modern Computer Algebra System for Python Apps</h2>
                
                {/* Tech Stack */}
                <ul className="projectStack">
                    <li><Image src={pythonlogo} alt="Python logo"/>Python</li>
                    <li><Image src={huggingfacelogo} alt="HuggingFace Logo"/>Hugging Face</li>
                    <li><Image src={pytestlogo} alt="Pytest logo" />Pytest</li>
                </ul>

                {/* Overview */}
                <p>
                    LevyCAS is a lightweight computer algebra system built in pure Python 
                    for fast and efficient symbolic mathematics. Distributed as a Python package
                    on TestPyPi, LevyCAS provides an easy-to-use API (powered by Gradio and hosted on HuggingFace)
                    for seamless integration into applications.
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
                    <Link href="/projects/LevyCAS" className="projectImage projectImageOverlay">
                        <Image
                            src={casexample}
                            width="883"
                            height="306"
                            alt="A sample of the LevyCAS README, providing two examples on how to integrate expressions with the package."
                        />
                        <div>LevyCAS Demo <FaExternalLinkAlt /></div>
                    </Link>


                </div>

                {/* Github Link */}
                {/* <Link href="https://github.com/ajlevy246/levycas"><FaGithub /></Link> */}

                {/* Close button */}
                <button className="modalBottomClose" onClick={() => setIsOpen(false)}>Close</button>
            </motion.div>
        </motion.div>
    )
}