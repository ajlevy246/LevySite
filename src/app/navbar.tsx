'use client';

import Link from "next/link"
import React, { ReactElement, useState } from "react";
import { animate, motion, useScroll, useMotionValueEvent } from "motion/react";
import { MdPictureAsPdf } from "react-icons/md";
import { LuMails } from "react-icons/lu";

import "./navbar.css";

//TODO: These buttons work only from home page. Alter scrollTo functions to fix this.

type NavItemProps = {
    title: string | ReactElement;
    href: string;
};

// function NavItem({ title, href }: NavItemProps) {
    
    // const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    //     if (href.startsWith("/#") || href.startsWith("#")) {
    //         e.preventDefault();

    //         const selector = href.replace("/", "");
    //         const el = document.querySelector(selector);

    //         if (el instanceof HTMLElement) {
    //             const targetY = el.getBoundingClientRect().top + window.scrollY;

    //             animate(window.scrollY, targetY, {
    //                 duration: 0.8, 
    //                 ease: [0.74, 0.15, 0.3, 0.96],
    //                 onUpdate: (latest) => window.scrollTo(0, latest),
    //             })
    //         }
    //     }
    // } 

//     return (
        // <li className="navbarItem">
        //     <Link href={href} onClick={scrollTo} className='text-2xl relative overflow-hidden px-4 inline-flex capitalize text-gray-100 no-underline'>{title}</Link>
        // </li>
//     )
// }

export default function Navbar() {

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

    return (
        <header className="sticky top-0 z-999">
            <motion.nav
                className="w-screen fixed"
                animate={{
                        backgroundColor: aboveIntro ? "rgba(0, 0, 0, 0)" : "rgba(25, 34, 59, 0.85)",
                        backdropFilter: aboveIntro ? "blur(0px)" : "blur(6px)",
                        paddingTop: aboveIntro ? "0.75rem" : "0.25rem",
                }}
                initial={false}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                <div className="grid grid-cols-2 my-2">
                    <div className="flex justify-center sectionTitle font-semi-bold flex justify-center items-center">
                        <motion.a
                            href="/"
                            onClick={scrollHome}
                            className="contents"
                            animate={{
                                fontSize: aboveIntro ? "3rem" : "2.2rem",
                                x: aboveIntro ? 50 : 0
                            }}
                            initial={false}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            Alex Levy
                        </motion.a>
                    </div>
                    <motion.div
                        className="flex items-center justify-left"
                        animate={{
                            marginTop: aboveIntro ? "10px" : "0px",
                        }}
                        initial={false}
                    >
                        <ul className="navItems contents">
                            <li><Link href="/#about" onClick={scrollTo}>about</Link></li>
                            <li><Link href="/#education" onClick={scrollTo}>education</Link></li>
                            <li><Link href="/#projects" onClick={scrollTo}>projects</Link></li>
                            <li><Link className="navExtern" href="/resume.pdf" onClick={scrollTo}><MdPictureAsPdf className="mt-[5px]"/>resume</Link></li>
                            <li><Link className="navExtern" href="mailto:ajlevy246@gmail.com" onClick={scrollTo}><LuMails className="mt-[5px]"/>contact</Link></li>
                        </ul>
                    </motion.div>
                </div>
                <motion.div
                    className="border-b-5 mb-0 h-0 pb-0 justify-self-center"
                    animate={{ width: aboveIntro ? 0 : "100%"}}
                    initial={false}
                    transition={{ duration: 0.2, ease: "easeIn" }}
                />
            </motion.nav>
        </header>
  );
}