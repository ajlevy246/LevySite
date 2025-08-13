
// TODO: PLACE FOOTER IN MIDDLE OF HERO INTRO, THEN MOVE INTO FOOTER AS ANIMATION ON SCROLL

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { CgMail } from "react-icons/cg";


export default function HeroIntro() {

    type LinkBarProps = {
        image: any;
        href: string;
    };

    function LinkBarItem({ image, href }: LinkBarProps) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={"footer-icon transition backdrop-blur-md bg-white/15 shadow-lg shadow-black/20 border border-white/20"}
                >
                {image}
            </a>
        );
    }
    
    return (
    <section>
        {/* Fixed background image, with layered gradient so navbar stays visible */}
        <div
        className="z-[-1] h-[100vh] w-screen bg-cover bg-center fixed top-0"
        style= {{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('/introbackground.jpg')`
        }}
        />
        <div className='h-[100vh] flex flex-col space-y-[35px] justify-center items-center'>
            <Image
                src="/me.jpg"
                alt="Me"
                width="4032"
                height="3024"
                className="backgroundGlow rounded-full border-black border-[7px] object-cover object-right w-[300px] h-[300px]"
            />
            <div className="sectionTitle text-white text-9xl">Alex Levy</div>
            <div className="flex flex-row flex-wrap gap-10 items-center justify-center text-5xl">
                <LinkBarItem image={<BiLogoLinkedinSquare />} href="https://www.linkedin.com/in/alexlevy246" />
                <LinkBarItem image={<FaGithub />} href="https://github.com/ajlevy246" />
                <LinkBarItem image={<CgMail />} href="mailto:ajlevy246@gmail.com" />
            </div>
        </div>
    </section>
  )
}