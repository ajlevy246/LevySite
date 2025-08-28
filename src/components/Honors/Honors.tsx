'use client';

import { motion } from "motion/react";

import "./honors.css";

export default function Honors() {
    return (
        <section id="honors" className="pt-[25%] md:pt-[8%] text-center">
            {/* Section Title
            <h2 className="sectionTitle text-5xl mb-[50px]">
                Honors and Awards
            </h2> */}

            {/* Honors List */}
            <div>
                {/* Honors card */}
                <motion.ul
                    initial={{ opacity: 0, x: -65 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1>Honors</h1>  
                    <li><b>The Clifford Beck Award for Excellency in Physics</b> - <i>Montgomery College, 2023</i></li>
                    <li><b>Eagle Scout</b> - <i>Troop 457 Rockville, MD, 2023</i></li>
                    <li><b>AP Scholar with Distinction</b> - <i>College Board, 2021</i></li>
                </motion.ul>

                {/* Awards card */}
               <motion.ul
                    initial={{ opacity: 0, x: 65 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1>Awards</h1>
                    <li><b>T. W. Hatcher Scholarship</b> - <i>Virginia Tech, 2025</i></li>
                    <li><b>Ray A. Gaskins Scholarship</b> - <i>Virginia Tech, 2024 & 2025</i></li>
                    <li><b>Richard L. and Georgia W. Kimball Scholarship</b> - <i>Virginia Tech, 2024</i></li>
                </motion.ul>
            </div>
        </section>
    )
}
