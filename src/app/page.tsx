import Image from "next/image";
import TextType from "../blocks/TextAnimations/TextType/TextType"
import TiltedCard from '@/blocks/Components/TiltedCard/TiltedCard';
import RollingGallery from "@/blocks/Components/RollingGallery/RollingGallery";
import Link from "next/link";

function Intro() {
  return (
    <section className="flex flex-cols justify-center space-x-[15%]">
      <div className="pt-[5%] max-w-md">
        <div className="sectionTitle text-5xl text-white mb-1">Alex Levy</div>
        <TextType
          className="text-2xl text-gray-300 mb-4"
          text={["Welcome to my personal site!"]}
          typingSpeed={75}
          deletingSpeed={0}
          showCursor={false}
          startOnVisible={true}
          initialDelay={0}
        />
        <div className="text-lg text-gray-500">
          Hi there! I'm a senior at Virginia Tech studying computer science and discrete math. 
          I'm currently studying the applications of graph theory in machine learning. 
          I love all things skiing, eating, and math (in that order). 
          I recently attended PCMI, a three-week math conference in Park City, Utah, centered on extremal combinatorics. 
          Check out some of my projects below!
        </div>
      </div>
      <TiltedCard 
            imageSrc="/me.jpg"
            altText="me in Park City, Utah"
            containerHeight="400px"
            containerWidth="300px"
            imageHeight="400px"
            imageWidth="300px"
            displayOverlayContent={false}
      />
    </section>
  )
}

function LevyCAS() {
  return (
    <section className="flex justify-center space-x-[15%]">
      <div className="w-[20%]">
        <div className="text-2xl mb-8"> LevyCAS</div>
        <hr className="max-w-[100px] border-blue-800" />
        <div className="text-lg text-gray-500">A capable computer algebra system written entirely in python,
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
          className="glowOnHover h-auto w-auto border-collapse border-[5px] rounded-lg border-solid border-black"
          src="/levycasdemo.jpg"
          alt="Screenshot from the LevyCAS demo" 
          width="1875"
          height="575"
        />
      </Link>
    </section>
  )
}

function EarlerParser() {
  return (
      <section className="flex justify-center space-x-[15%]">
      <div>Over here will be the image!</div>
      <div className="w-[20%]">
        <div className="text-lg"> LevyCAS</div>
        <div className="text-gray-500">A capable computer algebra system written entirely in python,
          complete with a Pratt Parser for parsing natural language into mathematical expressions. Comes equipped
          with many algorithms from calculus and number theory. 
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="Projects">
      <div className="sectionTitle text-5xl text-center mb-[5%] background"> Projects </div>
      <ul className="space-y-20">
        <li><LevyCAS /></li>
        <hr className="w-[15%] justify-self-center border-blue-800"/>
        <li><EarlerParser /></li>
        <hr className="w-[10%] justify-self-center border-blue-800"/>
      </ul>
    </section>
  )
}

export default function Home() {
  return (
    <main className="mx-[10%]">
      <section className="mt-[10%]">
      <Intro />
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
      <div id="projects" className="mt-[10%]">
      <Projects />
      </div>
      </section>
    </main>
  )
}