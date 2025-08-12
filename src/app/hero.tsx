'use client'

// TODO: PLACE FOOTER IN MIDDLE OF HERO INTRO, THEN MOVE INTO FOOTER AS ANIMATION ON SCROLL

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroIntro() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <section>
        {/* Fixed background image, with layered gradient so navbar stays visible */}
        <div
        className="z-[-1] h-[100vh] w-screen bg-cover bg-center fixed top-0"
        style= {{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('/introbackground.jpg')`
        }}
        />
        <div className='h-[100vh] flex flex-col space-y-[10px] justify-center items-center'>
            <Image
                src="/me.jpg"
                alt="Me"
                width="4032"
                height="3024"
                className="backgroundGlow rounded-full border-black border-[5px] object-cover object-right w-[300px] h-[300px]"
            />
            <div className="sectionTitle text-white text-8xl">Alex Levy</div>
        </div>
    </section>
  )
}