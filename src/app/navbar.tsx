'use client';

import Link from "next/link"
import React, { ReactElement, useState } from "react";
import { animate, AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { MdPictureAsPdf } from "react-icons/md";
import { LuMails } from "react-icons/lu";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { CgMail } from "react-icons/cg";


import "./navbar.css";

//TODO: These buttons work only from home page. Alter scrollTo functions to fix this.

type NavItemProps = {
    title: string | ReactElement;
    href: string;
};

export default function Navbar() {

    // Animation state
    const { scrollY } = useScroll();
    const [ aboveIntro, setAboveIntro ] = useState(true);

    useMotionValueEvent(scrollY, 'change', (current) => {
        setAboveIntro(current <= window.innerHeight * 0.1 ? true : false);
    })

    const scrollHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const scrollY = window.scrollY;

        animate(scrollY, 0, {
            duration: 0.8, 
            ease: [0.74, 0.15, 0.3, 0.96],
            onUpdate: (latest) => window.scrollTo(0, latest),
        })
    }

    const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const href = e.currentTarget.getAttribute('href');
        if (href && (href.startsWith("/#") || href.startsWith("#"))) {
            e.preventDefault();

            const selector = href.replace("/", "");
            const el = document.querySelector(selector);

            if (el instanceof HTMLElement) {
                const targetY = el.getBoundingClientRect().top + window.scrollY;

                animate(window.scrollY, targetY, {
                    duration: 0.8, 
                    ease: [0.74, 0.15, 0.3, 0.96],
                    onUpdate: (latest) => window.scrollTo(0, latest),
                })
            }
        }
    } 

    // Dropdown menu state
    const [ menuOpen, setMenuOpen ] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeAndScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (menuOpen) {
            setMenuOpen(false);
        }
        scrollTo(e);
    }

    return (
        <header className="z-999">
            <motion.nav
                className="w-screen fixed top-0 z-999"
                animate={{
                        backgroundColor: aboveIntro ? "rgba(0, 0, 0, 0)" : "rgba(25, 34, 59, 0.85)",
                        backdropFilter: aboveIntro ? "blur(0px)" : "blur(6px)",
                        paddingTop: aboveIntro ? "0.75rem" : "0.25rem",
                }}
                initial={false}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                <div className="grid grid-cols-2 items-center my-2">
                {/* <div className="flex justify-center my-2"> */}
                    {/* Desktop name */}
                    <div className="hidden sm:flex items-center ml-[25%] sectionTitle font-semi-bold">
                        <motion.a
                            href="/"
                            onClick={scrollHome}
                            animate={{
                                fontSize: aboveIntro ? "4rem" : "2.7rem",
                                x: aboveIntro ? 50 : 0
                            }}
                            initial={false}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            Alex Levy
                        </motion.a>
                    </div>

                    {/* Mobile logos */}
                    <motion.div 
                        className="flex sm:hidden items-center justify-center ml-5 pb-2 text-3xl pt-2 space-x-5"
                        animate={{ scale: aboveIntro ? 1.5 : 1}}
                        initial={false}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                            <Link 
                                className="navbarIcon transition"
                                href="https://www.linkedin.com/in/alexlevy246"
                                target="_blank" rel="noopener noreferrer"
                            >
                                    <BiLogoLinkedinSquare />
                            </Link>
                            <Link 
                                className="navbarIcon transition"
                                href="https://github.com/ajlevy246"
                                target="_blank" rel="noopener noreferrer"
                            >
                                    <FaGithub />
                            </Link>
                            <Link 
                                className="navbarIcon transition"
                                href="mailto:ajlevy246@gmail.com"
                                target="_blank" rel="noopener noreferrer"
                            >
                                    <CgMail />
                            </Link>
                    </motion.div>
                    <motion.div
                        className="flex items-center justify-center 2xl:justify-start"
                        animate={{
                            marginTop: aboveIntro ? "10px" : "0px",
                            scale: aboveIntro ? 1.5 : 1,
                        }}
                        initial={false}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        {/* Desktop menu */}
                        <ul className="hidden 2xl:flex navItems contents">
                            <li><Link href="/#about" onClick={scrollTo}>about</Link></li>
                            <li><Link href="/#education" onClick={scrollTo}>education</Link></li>
                            <li><Link href="/#projects" onClick={scrollTo}>projects</Link></li>
                            <li><Link className="navExtern" href="/resume.pdf" onClick={scrollTo}><MdPictureAsPdf className="mt-[5px]"/>resume</Link></li>
                            <li><Link className="navExtern" href="mailto:ajlevy246@gmail.com" onClick={scrollTo}><LuMails className="mt-[5px]"/>contact</Link></li>
                        </ul>

                        {/* Mobile hamburger menu */}
                        <button className="navItems 2xl:hidden cursor-pointer pl-20" onClick={toggleMenu}>
                            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                        </button>
                    </motion.div>
                </div>
                <motion.div
                    className="border-b-5 mb-0 h-0 pb-0 justify-self-center"
                    animate={{ width: (menuOpen || aboveIntro) ? "0%" : "100%"}}
                    initial={false}
                    transition={{ duration: 0.2, ease: "easeIn" }}
                />

                {/* Mobile Dropdown */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.ul
                            className="navItemsMobile flex flex-col pr-12 pl-[5%] text-xl gap-4 overflow-hidden 2xl:hidden bg-[rgba(25,34,59,0.9)]"
                            initial={{ opacity: 0, y: 0, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: "auto" }}
                            exit={{ opacity: 0, y: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                            {/* Framer motion ignores padding when animating, so empty divs are placed here for smoothing the animation */}
                            <div />
                            <Link href="/#about" onClick={closeAndScroll}><li>about</li></Link>
                            <Link href="/#education" onClick={closeAndScroll}><li>education</li></Link>
                            <Link href="/#projects" onClick={closeAndScroll}><li>projects</li></Link>
                            <Link href="/resume.pdf"><li className="navExtern"><MdPictureAsPdf className="mt-[2.5px]"/>resume</li></Link>
                            <Link href="mailto:ajlevy246@gmail.com"><li className="navExtern"><LuMails className="mt-[3px]"/>contact</li></Link>
                            <div />
                        </motion.ul>
                    )}
                </AnimatePresence>
            </motion.nav>
        </header>
  );
}