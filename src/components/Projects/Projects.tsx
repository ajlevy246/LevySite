'use client';

// Component Imports
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import LevyCASPopup from "@/components/Projects/popups/LevyCASPopup";
import EarleyParserPopup from "./popups/EarleyParserPopup";
import PersonalSitePopup from "./popups/PersonalSitePopup";

// Style Imports
import "./projects.css";

// Image Imports
import casdemo from "@/assets/projects/levycasdemo.png";
import sitedemo from "@/assets/projects/sitedemo.png";
import earleydemo from "@/assets/projects/earleydemo.png";

function ProjectLink({ href }: { href: string }) {
  return (
    <Link 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      // Popup should not open on button press
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <FaGithub className="projectIcon"/>
    </Link>
  )
}

function LevyCASCard() {
  const [isOpen, setIsOpen] = useState(false);

  // Close popup on escape press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  })

  return (
    <>
      {/* Project Card */}
      <motion.div
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, y: 85 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="projectCard">
          <h1>LevyCAS <ProjectLink href="https://github.com/ajlevy246/LevyCAS" /></h1>
          <p>A pure python computer algebra system with a Pratt parser, complete with automatic simplification, symbolic integration and differentation, and more.</p>
          <Link className="projectImgWrapper projectImageOverlay" href="/projects/LevyCAS">
          <Image
            className=""
            src={casdemo}
            width="1871"
            height="573" 
            alt="The LevyCAS demo; showing a menu with options for calculus, numerical, and polynomial operations with examples"
          /><div>LevyCAS Demo <FaExternalLinkAlt /></div>
          </Link>
        </div>
      </motion.div>

      {/* Project popup */}
      <AnimatePresence>
          {isOpen && (
            <LevyCASPopup setIsOpen={setIsOpen} />
          )}
      </AnimatePresence>
    </>
  )
}

function PersonalSiteCard() {
  const [isOpen, setIsOpen] = useState(false);

  // Close popup on escape press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  })

  return (
    <>
      {/* Project Card */}
      <motion.div
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, y: 95 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="projectCard">
          <h1>Portfolio Site <ProjectLink href="https://github.com/ajlevy246/LevySite" /></h1>
          <p>You&apos;re looking at it! Built to showcase my experience, this site was developed in Next.js with Typescript and TailwindCSS, and deployed through Vercel.</p>
          <div className="projectImgWrapper">
          <Image
            src={sitedemo}
            width="2535"
            height="1314"
            alt="A screenshot of the homepage of my personal site, with a background image of Stowe, Vermont and an image of me in the foreground."
          /></div>
        </div>
      </motion.div>

      {/* Project popup */}
      <AnimatePresence>
        {isOpen && (
          <PersonalSitePopup setIsOpen={setIsOpen} />
        )}
      </AnimatePresence>
    </>
  )
}

function EarleyParserCard() {
  const [isOpen, setIsOpen] = useState(false);

  // Close popup on escape press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  })

  return (
    <>
      {/* Project Card */}
      <motion.div
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, y: 110 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="projectCard">
            <h1>Earley Parser <ProjectLink href="https://github.com/ajlevy246/" /></h1>
            <p>A powerful python implementation of the Earley algorithm for user-defined context-free grammars. Implemented as a Python package on TestPyPi.</p>
            <div className="projectImgWrapper">
            <Image 
              src={earleydemo}
              width="1043"
              height="607"
              alt="Pseudocode for the first steps of the Earley parsing algorithm, taken from wikipedia"
            /></div>
        </div>
      </motion.div>

      {/* Project popup */}
      <AnimatePresence>
        {isOpen && (
          <EarleyParserPopup setIsOpen={setIsOpen} />
        )}
      </AnimatePresence>
    </>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="pt-[25%] md:pt-[8%]">
      <div className="sectionTitle text-5xl text-center mb-[30px] lg:mb-[20px]"> Projects </div>
      <div className="text-3xl lg:text-2xl text-center mb-[15%] lg:mb-[5rem]">click on a project to learn more</div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-[2%] space-y-[10%]">
        <LevyCASCard />
        <PersonalSiteCard />
        <EarleyParserCard />
      </div>
    </section> 
  )
}