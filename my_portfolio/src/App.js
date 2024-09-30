import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "./style/main.css";

import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Links from "./pages/Links";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero theme={localStorage.getItem("theme")} />
      <About />
      <Skills />
      <Projects />
      {/*<Links />
      <Contact />
      <NotFound /> */}
    </div>
  );
}

export default App;
