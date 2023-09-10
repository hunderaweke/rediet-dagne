import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Portfolio from "./components/Porfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Flowbite } from "flowbite-react";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <>
      <Flowbite className="me-auto">
        <NavBar />
        <Hero />
        <AboutMe />
        <Projects />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </Flowbite>
    </>
  );
}

export default App;
