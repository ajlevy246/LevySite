'use client';

import { motion } from "motion/react";
import Link from "next/link";

// Icons 
import { SiNextdotjs } from "react-icons/si"; // Next.js
import { RiTailwindCssFill } from "react-icons/ri"; // TailwindCSS
import { SiVercel } from "react-icons/si"; // Vercel

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
                <h1>Portfolio Site</h1>
                <p>This is my personal site that I built to showcase my projects. It was developed using Next.js and TailwindCSS and deployed with Vercel.</p>
                <p>To showcase my computer algebra system LevyCAS, the site dynamically connects to an API hosted at <Link href="https://huggingface.co/spaces/ajlevy246/levycas-app">huggingface.co</Link> so that the user can interact 
                    with the python package through the demo.
                </p>
                <p>More information soon!</p>
                <button onClick={() => setIsOpen(false)}>Close</button>
            </motion.div>
        </motion.div>
    )
}