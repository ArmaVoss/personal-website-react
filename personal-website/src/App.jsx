import { useRef } from "react";
import Hero from "./sections/hero.jsx";
import Education from "./sections/education.jsx";
import Navbar from "./components/navbar.jsx";
function App() {
  const landingPage = useRef();
  const education = useRef();

  const scrollToEducation = () => {
    education.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section>
        <Navbar></Navbar>
      </section>
      <section ref={landingPage}>
        <Hero landingPage={landingPage} OnClick={scrollToEducation}></Hero>
      </section>
      <section ref={education}>
        <Education />
      </section>
    </>
  );
}

export default App;
