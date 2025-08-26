
// TODO: PLACE FOOTER IN MIDDLE OF HERO INTRO, THEN MOVE INTO FOOTER AS ANIMATION ON SCROLL

// Component Imports
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { ReactElement } from "react";

// Image imports
import profile from "@/assets/profile.jpeg";
import introbg from "@/assets/introbackground.jpg";

export default function HeroIntro() {

    type LinkBarProps = {
        image: ReactElement;
        href: string;
    };

    function LinkBarItem({ image, href }: LinkBarProps) {
        return (
            <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={"footer-icon transition backdrop-blur-md bg-white/15 shadow-lg shadow-black/20 border border-white/20"}
            >
                {image}
            </Link>
        );
    }
    
    return (
        <section>
            {/* Fixed background image, with layered gradient so navbar stays visible */}
            <div
            className="z-[-1] h-[100vh] w-screen bg-cover bg-center fixed top-0"
            style= {{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)), url(${introbg.src})`,

            }}
            />
            <div className='scale-80 sm:scale-none h-[100vh] flex flex-col text-center space-y-[35px] md:mt-0 justify-center items-center'>
                <Image
                    src={profile}
                    alt="Me"
                    width="2300"
                    height="3000"
                    className="backgroundGlow scale-80 md:scale-none rounded-full border-black border-[7px] object-cover object-bottom-right w-[300px] h-[300px]"
                />
                <div className="sectionTitle text-7xl sm:text-9xl">Alex Levy</div>
                <div className="sectionTitle italic text-4xl pb-[40px]">Computer Science & Discrete Math • Virginia Tech • Olney, MD</div>
                <div className="hidden sm:flex flex-row flex-wrap gap-10 items-center justify-center text-5xl">
                    <LinkBarItem image={<BiLogoLinkedinSquare />} href="https://www.linkedin.com/in/alexlevy246" />
                    <LinkBarItem image={<FaGithub />} href="https://github.com/ajlevy246" />
                    <LinkBarItem image={<CgMail />} href="mailto:ajlevy246@gmail.com" />
                </div>
            </div>
        </section>
    )
}