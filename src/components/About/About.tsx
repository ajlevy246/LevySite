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
        <div className="text-2xl text-gray-400">
          Hi there! I&apos;m a senior at Virginia Tech, studying computer science and discrete mathematics. 
          My current area of interest is graphical neural networks, but I&apos;m equally passionate about skiing cool places 
          and eating great food. Recently, I had the opportunity to attend the Park City Mathematics Institute (PCMI), 
          a three-week math conference in Park City, Utah, where I explored extremal combinatorics and its applications.
          Learn more about me and see some of my projects below! 
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