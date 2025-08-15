import Image from "next/image";
import TextType from "../blocks/TextAnimations/TextType/TextType"
import TiltedCard from '@/blocks/Components/TiltedCard/TiltedCard';
import RollingGallery from "@/blocks/Components/RollingGallery/RollingGallery";
import Link from "next/link";
import HeroIntro from "./hero";

function About() {
  return (
    <section id="about" className="flex flex-col pt-[10%] sm:flex-row justify-center space-x-[15%]">
      <div className="pt-[5%] max-w-md">
        <TextType
          className="text-3xl text-gray-300 mb-4"
          text={["Welcome to my personal site!"]}
          typingSpeed={75}
          deletingSpeed={0}
          showCursor={false}
          startOnVisible={true}
          initialDelay={0}
        />
        <div className="text-2xl text-gray-400">
          Hi there! I'm a senior at Virginia Tech studying computer science and discrete math. 
          I'm currently studying the applications of graph theory in machine learning. 
          I love all things skiing, eating, and math (in that order). 
          I recently attended PCMI, a three-week math conference in Park City, Utah, centered on extremal combinatorics. 
          Check out some of my projects below!
        </div>
      </div>
      <div className="mt-20 self-center">
      <TiltedCard 
            imageSrc="/me.jpg"
            altText="me in Park City, Utah"
            containerHeight="400px"
            containerWidth="300px"
            imageHeight="400px"
            imageWidth="300px"
            displayOverlayContent={false}
            showTooltip={false}
      />
      </div>
    </section>
  )
}

function LevyCAS() {
  return (
    <li className="flex justify-center items-center space-x-[15%]">
      <div className="w-[20%]">
        <div className="sectionTitle text-3xl text-center mb-4"> LevyCAS</div>
        <hr className="border-blue-800 mb-2" />
        <div className="text-md md:text-2xl text-gray-400">A capable computer algebra system written entirely in python,
          complete with a Pratt Parser for parsing natural language into mathematical expressions. 
          Comes equipped with operations from calculus and number theory, including symbolic integration and 
          prime factorization.
        </div>
      </div>
      <Link
        className="max-w-[600px] max-h-[200px]"
        href="https://huggingface.co/spaces/ajlevy246/levycas-app"
        target="_blank"
      >
        <Image
          className="glow glowOnHover h-auto w-auto border-collapse border-[5px] rounded-lg border-solid border-black"
          src="/levycasdemo.jpg"
          alt="Screenshot from the LevyCAS demo" 
          width="1875"
          height="575"
        />
      </Link>
    </li>
  )
}

function EarleyParser() {
  return (
    <li className="flex justify-center items-center space-x-[15%]">
      <Link
        className="max-w-[600px] max-h-[200px]"
        href="https://huggingface.co/spaces/ajlevy246/levycas-app"
        target="_blank"
      >
        <Image
          className="glowOnHover h-auto w-auto border-collapse border-[5px] rounded-lg border-solid border-black"
          src="/levycasdemo.jpg"
          alt="Screenshot from the LevyCAS demo" 
          width="1875"
          height="575"
        />
      </Link>
      <div className="w-[20%]">
        <div className="sectionTitle text-3xl text-center mb-4"> Earley Parser Generator</div>
        <hr className="border-blue-800 mb-2" />
        <div className="text-md md:text-2xl text-gray-400">A python package capable of parsing arbitrary user defined context-free grammars.
          Uses a top-down Earley Parser written in pure python—returns ambiguous parse forests, with methods to extract and modify trees.
        </div>
      </div>
    </li>
  )
}

function PersonalSite() {
  return (
    <li className="flex justify-center items-center space-x-[15%]">
      <div className="w-[20%]">
        <div className="sectionTitle text-3xl text-center mb-4"> LevyCAS</div>
        <hr className="border-blue-800 mb-2" />
        <div className="text-md md:text-2xl text-gray-400">A capable computer algebra system written entirely in python,
          complete with a Pratt Parser for parsing natural language into mathematical expressions. 
          Comes equipped with operations from calculus and number theory, including symbolic integration and 
          prime factorization.
        </div>
      </div>
      <Link
        className="max-w-[600px] max-h-[200px]"
        href="https://huggingface.co/spaces/ajlevy246/levycas-app"
        target="_blank"
      >
        <Image
          className="glow glowOnHover h-auto w-auto border-collapse border-[5px] rounded-lg border-solid border-black"
          src="/levycasdemo.jpg"
          alt="Screenshot from the LevyCAS demo" 
          width="1875"
          height="575"
        />
      </Link>
    </li>
  )
}

function Projects() {
  function Separator() {
    return (
      <li><hr className="w-[300px] max-w-[300px] justify-self-center border-blue-800"/></li>
    )
  }

  return (
    <section id="Projects">
      <div className="sectionTitle text-5xl text-center mb-[5%]"> Projects </div>
      <ul className="space-y-20">
        <LevyCAS />
        <Separator />
        <EarleyParser />
        <Separator />
        <PersonalSite />
      </ul>
    </section>
  )
}

export default function Home() {
  return (
    <main className="w-full">
      <HeroIntro />
      <section className="gradBackground px-[10%]">
      <About />
      <div id="gallery" className="mt-[10%]">
      <RollingGallery
        autoplay={true}
        pauseOnHover={false}
        images={[
          "/gallery/gallery1.jpg",
          "/gallery/gallery2.jpg",
          "/gallery/gallery3.jpg",
          "/gallery/gallery4.jpg",
          "/gallery/gallery5.jpg",
          "/gallery/gallery6.jpg",
          "/gallery/gallery7.jpg",
        ]}
        />
      </div>
      <div id="projects" />
      <div className="mt-[10%]">
      <Projects />
      </div>
      </section>
    </main>
  )
}