'use client';

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

// Icon Images 
import nextjslogo from "@/assets/projects/modals/nextlogo.svg"; // Next.js
import tailwindlogo from "@/assets/projects/modals/taliwindlogo.svg"; // TailwindCSS
import reactlogo from "@/assets/projects/modals/reactlogo.svg"; // React

// Icons
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Github
import { FiX } from "react-icons/fi"; // Close icon

// Images
import sitedemo from "@/assets/projects/sitedemo.png";

// Styles
import "./popups.css";

type LevyCASPopupProps = {
    setIsOpen: (open: boolean) => void;
};

export default function PersonalSitePopup({ setIsOpen }: LevyCASPopupProps) {
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
                    <li><Image src={nextjslogo} alt="Next.js logo"/>Next.js</li>
                    <li><Image src={tailwindlogo} alt="TailwindCSS logo"/>TailwindCSS</li>
                    <li><Image src={reactlogo} alt="React logo"/>React</li>
                </ul>

                {/* Overview */}
                <p>
                    Developed with Next.js and React, this site was designed with a modern look and feel.
                    Built to showcase my projects and showcase my skills, 
                    this site serves both static content and contains a dynamic web app showcasing my computer algebra system,
                    LevyCAS.
                </p><br />
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
                            src={sitedemo}
                            width="883"
                            height="306"
                            alt="A sample of the LevyCAS README, providing two examples on how to integrate expressions with the package."
                        />
                    </div>


                </div>

                {/* Github Link */}
                {/* <Link href="https://github.com/ajlevy246/levycas"><FaGithub /></Link> */}

                {/* Close button */}
                <button className="modalBottomClose" onClick={() => setIsOpen(false)}>Close</button>
            </motion.div>
        </motion.div>
    )
}