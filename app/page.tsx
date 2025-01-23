import Footer from "./section/Footer";
import Header from "./section/Header";
import Stats from "./section/InfoStats";
import Projects from "./section/ProjectSection";
import Testimonials from "./section/Recommendation";
import TechSection from "./section/TechSection";

export default function Home() {
  return (
    <>
      <Header />
      <TechSection />
      <Stats />
      <Projects />
      <Testimonials/>
      <Footer />
    </>
  );
}
