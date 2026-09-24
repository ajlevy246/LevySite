'use client';

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

// Icon Images 
import nextjslogo from "@/assets/projects/logos/nextlogo.svg"; // Next.js
import tailwindlogo from "@/assets/projects/logos/taliwindlogo.svg"; // TailwindCSS
import reactlogo from "@/assets/projects/logos/reactlogo.svg"; // React

// Icons
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Github
import { FiX } from "react-icons/fi"; // Close icon

// Images
import sitedemo from "@/assets/projects/modals/spritz_example.png";

// Styles
import "./popups.css";

type SpritzPopupProps = {
    setIsOpen: (open: boolean) => void;
};

export default function SpritzPopup({ setIsOpen }: SpritzPopupProps) {
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
                <h1>Portfolio Site</h1>
                <h2>Personal Portfolio Built with React and Next.js</h2>
                
                {/* Tech Stack */}
                <ul className="projectStack">
                    <li><Image src={nextjslogo} alt="C++ logo"/>C++</li>
                    <li><Image src={tailwindlogo} alt="CMake logo"/>CMake</li>
                    <li><Image src={reactlogo} alt="Git logo"/>Git</li>
                </ul>

                {/* Overview */}
                <p>
                    Spritz++ is a C++ raytracing engine developed to explore computer graphics, rendering, and numerical optimization.
                    Originally ported from a Python raytracer, the project evolved into an inverse-graphics testbed for recovering scene 
                     properties from target images using photometric loss and gradient-based optimization.
                </p><br />
                {/* Container for image and features list */}
                <div className="featuresContainer">
                    {/* Features */}
                    <div className="projectFeatures">
                        <h3>Features</h3>
                        <ul>
                            <li>Physically-based rendering: perspective cameras, ray-surface intersection, shadows, recursive reflections, refractive materials, and Fresnel-based optics.</li>
                            <li>Mesh geometry, multiple material models, HDR environment lighting, and complex lighting configurations.</li>
                            <li>Inverse graphics: Recovers lighting and material parameters by minimizing photometric error between rendered and target images.</li>
                            <li>Uses finite-difference gradient estimation and ADAM to optimize scene parameters.</li>
                        </ul>
                    </div>
                    

                    {/* Image */}
                    <div className="projectImage">
                        <Image
                            src={sitedemo}
                            width="883"
                            height="306"
                            alt="A screenshot of the homepage of this very site."
                        />
                    </div>


                </div>


                <Link className="modalGithubLink" href="https://github.com/ajlevy246/LevySite"><FaGithub /></Link>

                {/* Close button */}
                <button className="modalBottomClose" onClick={() => setIsOpen(false)}>Close</button>
            </motion.div>
        </motion.div>
    )
}