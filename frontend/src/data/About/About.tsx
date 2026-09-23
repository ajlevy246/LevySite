// Component Imports
import TextType from "@/blocks/TextAnimations/TextType/TextType";
import TiltedCard from "@/blocks/Components/TiltedCard/TiltedCard";

// Style Imports
import "./about.css";

// Image Imports
import me from "@/assets/me.jpg";

export default function About() {
  return (
    <section id="about" className="flex flex-col pt-[25%] md:pt-[8%] sm:flex-row justify-center space-x-[15%]">
      <div className="pt-[5%] max-w-md">
        <TextType
          className="text-5xl text-gray-300 mb-4 min-h-[101px] sm:min-h-auto sm:whitespace-nowrap"
          text={["Welcome to my personal site!"]}
          typingSpeed={75}
          deletingSpeed={0}
          showCursor={false}
          startOnVisible={true}
          initialDelay={0}
        />
        {/* <div className="text-2xl text-gray-300">
          Hi there! I&apos;m a third-year student at Virginia Tech, studying computer science and discrete mathematics. 
          My current areas of interest are computer algebra, raytracing, and software testing systems, but I&apos;m equally passionate about skiing cool places 
          and eating great food. Recently, I had the opportunity to attend the Park City Mathematics Institute (PCMI), 
          a three-week math conference in Park City, Utah, where I explored extremal combinatorics and its applications. 
          <br/><br/>
          I&apos;m currently serving as both a TA and an undergraduate research assistant for Virginia Tech&apos;s Department of Computer Science.
          I&apos;ll be graduating this spring with dual B.S. degrees, but I&apos;ll be continuing my studies at Virginia Tech through 2027 in a Masters program.

          Learn more about me and my projects below!

        </div> */}
        <div className="text-2xl text-gray-300">
          Hi there! I&apos;m Alex, a graduate student at Virginia Tech pursuing an M.Eng. in Computer Science & Applications after
           completing my undergraduate degrees in computer science and discrete mathematics a year early.
          <br/><br/>
          I&apos;m interested in building software that sits at the intersection of theory and practice, particularly relating mathematics, systems, and software engineering.
           I've explored these interests through projects in computer algebra, automated software testing, machine learning, and parallel computing, as well as 
           through research and my work as a software engineering intern at eClinicalWorks this past summer.
          <br/><br/>
          Outside of computer science, I enjoy skiing, exploring new places, and finding great food. Take a look below to learn more about me and some of my projects.
        </div>
      </div>
      <div className="hidden lg:flex mt-20 self-center">
      <TiltedCard 
            imageSrc={me.src}
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