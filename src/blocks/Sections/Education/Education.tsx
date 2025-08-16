'use client'

import { AnimatePresence, motion } from "motion/react";
import { ReactHTMLElement } from "react";

import "./education.css";

function VirginiaTech() {
    return (
        <motion.div
            className="event"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <h1>Virginia Tech - <i>Blacksburg, VA</i></h1>
            <h3>B.S. Mathematics | B.S. Computer Science | 2023 - Present</h3>
            <section>
                <h2>GPA:</h2>
                <p>3.9</p>
            </section>
            <section>
                <h2 className="lg:whitespace-nowrap">relevant coursework:</h2>
                <p>combinatorics, graph theory, linear algebra, mathematical optimization for machine learning, machine learning, computer graphics</p>
            </section>
        </motion.div>
    )
}

function MontgomeryCollege() {
    return (
        <motion.div
            className="event"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            <h1>Montgomery College - <i>Rockville, MD</i></h1>
            <h3>A.S. Mathematics | Dual Enrollment | 2021 - 2023 </h3>
            <section>
                <h2>Awards:</h2>
                <p>Clifford Beck Award for Excellency in Physics</p>
            </section>
            <section>
                <h2>Relevant Coursework:</h2>
                <p>python programming, physics, C++ programming, calculus</p>
            </section>
        </motion.div>
    )
}

function SherwoodHighSchool() {
    return(
        <motion.div
            className="event"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            <h1>Sherwood High School - <i>Sandy Spring, MD</i></h1>
            <h3>High School Diploma | 2021 - 2023 </h3>
            <section>
                <h2>Awards:</h2>
                <p>Clifford Beck Award for Excellency in Physics</p>
            </section>
            <section>
                <h2>Relevant Coursework:</h2>
                <p>python programming, physics, C++ programming, calculus</p>
            </section>
        </motion.div>
    )
}

export default function Education() {
    return (
        <section id="education" className="pt-[25%] md:pt-[8%]">
            <div className="sectionTitle text-center text-5xl">Education</div>
            
            {/* Timeline */}
            <motion.div
                className="border-l-[5px] rounded-lg border-gray-500 mt-[15%] pt-[5%] pb-[0.65%] lg:mt-0 mx-none lg:mx-[10%]"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <VirginiaTech />
                <MontgomeryCollege />
                <SherwoodHighSchool />
            </motion.div>
        </section>
    )
}