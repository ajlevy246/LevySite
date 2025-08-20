// Components imports
import HeroIntro from "./hero";
import About from "@/components/About/About";
import RollingGallery from "@/blocks/Components/RollingGallery/RollingGallery";
import Education from "@/components/Education/Education";
import Projects from "@/components/Projects/Projects";

// Image imports
import gallery1 from "@/assets/gallery/gallery1.jpg";
import gallery2 from "@/assets/gallery/gallery2.jpg";
import gallery3 from "@/assets/gallery/gallery3.jpg";
import gallery4 from "@/assets/gallery/gallery4.jpg";
import gallery5 from "@/assets/gallery/gallery5.jpg";
import gallery6 from "@/assets/gallery/gallery6.jpg";
import gallery7 from "@/assets/gallery/gallery7.jpg";

export default function Home() {
  return (
    <main className="w-full">
      <HeroIntro />
      <section className="gradBackground px-[10%]">
      <About />
      <div id="gallery" className="hidden sm:flex sm:mt-[10%]">
      <RollingGallery
        autoplay={true}
        pauseOnHover={false}
        images={[
          gallery1,
          gallery2,
          gallery3,
          gallery4,
          gallery5,
          gallery6,
          gallery7,
        ]}
        />
      </div>
      <Education />
      <Projects />
      </section>
    </main>
  )
}