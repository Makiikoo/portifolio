import { useState } from "react";

import Reveal from "./components/Reveal/Reveal";
import MatrixRain from "./components/MatrixRain/MatrixRain";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";

function App() {
  const [isCRTEnabled, setIsCRTEnabled] = useState(false);

  function toggleCRT() {
    setIsCRTEnabled((previous) => !previous);
  }

  
return (
  <div
    className={`relative isolate min-h-screen bg-cyber-bg ${isCRTEnabled ? "crt" : ""}`}
  >
    <MatrixRain />

    <Header isCRTEnabled={isCRTEnabled} onToggleCRT={toggleCRT} />

    <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6 pt-24">
      <Reveal>
        <Hero />
      </Reveal>

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Projects />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>
    </main>

    <div className="relative z-10 mx-auto max-w-6xl px-6">
      
        <Footer />
      
    </div>
  </div>
);

}

export default App;
