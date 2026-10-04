'use client';

import { motion } from "motion/react";

const honors = [
    {
        title: "The Clifford Beck Award for Excellency in Physics",
        organization: "Montgomery College, 2023",
    },
    {
        title: "Eagle Scout",
        organization: "Troop 457 Rockville, MD, 2023",
    },
    {
        title: "AP Scholar with Distinction",
        organization: "College Board, 2021",
    },
];

const awards = [
    {
        title: "T. W. Hatcher Scholarship",
        organization: "Virginia Tech, 2025",
    },
    {
        title: "Ray A. Gaskins Scholarship",
        organization: "Virginia Tech, 2024 & 2025",
    },
    {
        title: "Richard L. and Georgia W. Kimball Scholarship",
        organization: "Virginia Tech, 2024",
    },
];

const cardVariants = {
    hidden: (direction: "left" | "right") => ({
        opacity: 0,
        x: direction === "left" ? -80 : 80,
    }),
    visible: {
        opacity: 1,
        x: 0,
    },
};

export default function Honors() {
    return (
        <section
            id="honors"
            className="px-6 pt-[25%] text-center md:px-10 md:pt-[8%]"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
                {/* Honors */}
                <section>
                    <h1 className="mb-8 text-center text-4xl font-semibold text-white [text-shadow:0_0_16px_#3b82f6] md:text-5xl">
                        Honors
                    </h1>

                    <ul className="flex flex-col gap-5">
                        {honors.map((honor) => (
                            <motion.li
                                key={honor.title}
                                custom="left"
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true,
                                    amount: 0.25,
                                }}
                                transition={{
                                    duration: 0.7,
                                    ease: "easeOut",
                                }}
                                className="min-h-[125px] rounded-2xl border-2 border-white/80 bg-[#0d1b2a] p-6 text-left text-xl shadow-[-1px_4px_12px_#3b82f6] will-change-transform md:text-2xl lg:text-[1.75rem]"
                            >
                                <b>{honor.title}</b>
                                <span> - </span>
                                <i>{honor.organization}</i>
                            </motion.li>
                        ))}
                    </ul>
                </section>

                {/* Awards */}
                <section>
                    <h1 className="mb-8 text-center text-4xl font-semibold text-white [text-shadow:0_0_16px_#3b82f6] md:text-5xl">
                        Awards
                    </h1>

                    <ul className="flex flex-col gap-5">
                        {awards.map((award) => (
                            <motion.li
                                key={award.title}
                                custom="right"
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true,
                                    amount: 0.25,
                                }}
                                transition={{
                                    duration: 0.7,
                                    ease: "easeOut",
                                }}
                                className="min-h-[125px] rounded-2xl border-2 border-white/80 bg-[#0d1b2a] p-6 text-left text-xl shadow-[-1px_4px_12px_#3b82f6] will-change-transform md:text-2xl lg:text-[1.75rem]"
                            >
                                <b>{award.title}</b>
                                <span> - </span>
                                <i>{award.organization}</i>
                            </motion.li>
                        ))}
                    </ul>
                </section>
            </div>
        </section>
    );
}