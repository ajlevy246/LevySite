'use client';

import Link from "next/link"
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

import "./navbar.css";

type NavItemProps = {
    title: string;
    href: string;
};

function NavItem({ title, href }: NavItemProps) {
    return (
        <li className="navbarItem">
            <Link href={href} className='text-2xl relative overflow-hidden px-4 inline-flex uppercase text-gray-100 no-underline'>{title}</Link>
        </li>
    )
}

export default function Navbar() {

    // motion scroll state
    const { scrollY } = useScroll();

    // react state reflecting scroll state
    const [ aboveIntro, setAboveIntro ] = useState(true);

    // motion event event listener
    useMotionValueEvent(scrollY, 'change', (current) => {
        setAboveIntro(current <= window.innerHeight * 0.1 ? true : false);
    })

    return (
        <header className="sticky top-0 z-999">
            <motion.nav
                className="w-screen fixed"
                animate={{
                        backgroundColor: aboveIntro ? "rgba(0, 0, 0, 0)" : "rgba(25, 34, 59, 0.85)",
                        backdropFilter: aboveIntro ? "blur(0px)" : "blur(6px)",
                        paddingTop: aboveIntro ? "0.75rem" : "0.25rem",
                        // paddingBottom: aboveIntro ? "0.75rem" : "0.25rem",
                }}
                initial={false}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                <div className="grid grid-cols-2 my-2">
                    <motion.a
                        href="/#"
                        className="sectionTitle font-semi-bold flex justify-center items-center"
                        animate={{
                            fontSize: aboveIntro ? "3rem" : "2.2rem",
                            x: aboveIntro ? 50 : 0
                        }}
                        initial={false}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        Alex Levy
                    </motion.a>
                    <motion.div
                        className="flex items-center justify-left"
                        animate={{
                            marginTop: aboveIntro ? "5px" : "0px",
                        }}
                        initial={false}
                    >
                        <ul className="contents">
                            <NavItem title="about" href="/#about" />
                            <NavItem title="education" href="/#education" />
                            <NavItem title="projects" href="/#projects" />
                            <NavItem title="resume" href="/resume.pdf" />
                        </ul>
                    </motion.div>
                </div>
                <motion.div
                    className="border-b-5 mb-0 h-0 pb-0"
                    animate={{ width: aboveIntro ? 0 : "100%"}}
                    initial={false}
                    transition={{ duration: 0.2, ease: "easeIn" }}
                />
            </motion.nav>
        </header>
  );
}