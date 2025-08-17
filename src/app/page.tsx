
import HeroIntro from "./hero";
import About from "@/blocks/Sections/About/About";
import RollingGallery from "@/blocks/Components/RollingGallery/RollingGallery";
import Education from "@/blocks/Sections/Education/Education";
import Projects from "@/blocks/Sections/Projects";

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
      <Education />
      <Projects />
      </section>
    </main>
  )
}