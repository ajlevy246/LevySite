'use client';

import './navbar.css';
import Image from "next/image"
import Link from "next/link"
import React, { useRef, useState } from "react";

//Code adapated from https://www.reactbits.dev/components/spotlight-card

type NavItemProps = {
    title: string;
    href: string;
};

function NavItem({ title, href }: NavItemProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isFocused, setIsFocused] = useState(false);
    const [opacity, setOpacity] = useState(0);
    const [scale, setScale] = useState(1);
    const [boxShadow, setBoxShadow] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || isFocused) return;

        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(0.6);
    };

    const handleBlur = () => {
        setIsFocused(true);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(0.6);
        setScale(1.2);
        setBoxShadow({ x: 16, y: 4 });
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
        setScale(1);
        setBoxShadow({ x: 0, y: 0 });
        setIsHovered(false);
    };

    return (
        <li>
            <div 
                ref={divRef}
                onMouseMove={handleMouseMove}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`text-lg font-semi-bold relative rounded-3xl border overflow-hidden px-4 py-2 inline-flex mr-4 ${isHovered ? 'bg-blue-500' : ''}`}
                style={{
                    transition: `transform 0.2s, box-shadow 0.2s`,
                    transform: `scale(${scale})`,
                    boxShadow: `0 0 ${boxShadow.x}px ${boxShadow.y}px #3b82f6`,
                }}
            >
                <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
                    style={{
                    opacity,
                    background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.25), transparent 80%)`,
                    }}
                />
                <Link href={href} className='text-gray-100 no-underline'>{title}</Link>
            </div>
        </li>
    )
}

export default function Navbar() {
    return (
        <header className="sticky top-0">
            <nav
                className="w-screen fixed top-0"
                style= {{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))`
                }}
            >
                <section className="flex flex-row items-center justify-center space-x-[30%]">
                    {/* <Link href={"/"}>
                        <Image
                            className="glow glowOnHover border-black border-[2px] header-elem rounded-full object-cover object-right w-[80px] h-[80px] m-4"
                            src="/me.jpg"
                            width={4000}
                            height={3000}
                            alt="Picture of me!"
                        />
                    </Link> */}
                    <div className="sectionTitle ml-5 text-5xl">Alex Levy</div>
                    <div>
                        <ul className="list-none flex justify-right m-0 p-0 mt-5 mr-5 mb-10">
                            <NavItem title="Contact" href="mailto:ajlevy246@gmail.com" />
                            <NavItem title="Projects" href="/#Projects" />
                            <NavItem title="Resume" href="/resume.pdf" />
                        </ul>
                    </div>
                </section>
            </nav>
        </header>
  );
}