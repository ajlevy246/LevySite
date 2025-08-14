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
                        paddingBottom: aboveIntro ? "0.75rem" : "0.25rem",
                    }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                <div className="grid grid-cols-2 my-2">
                    <motion.div
                        className="sectionTitle font-semi-bold flex justify-center items-center"
                        animate={{
                            fontSize: aboveIntro ? "3rem" : "2.2rem",
                            x: aboveIntro ? 50 : 0
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        Alex Levy
                    </motion.div>
                    <motion.div
                        className="flex items-center justify-left"
                        animate={{
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <ul className="contents">
                            <NavItem title="Contact" href="mailto:ajlevy246@gmail.com" />
                            <NavItem title="Projects" href="/#Projects" />
                            <NavItem title="Resume" href="/resume.pdf" />
                        </ul>
                    </motion.div>
                </div>
            </motion.nav>
        </header>
  );
}