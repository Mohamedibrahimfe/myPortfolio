import "./Hero.css";
import "../../components/themetoggle/ThemeIcon.css";
import "../../data/about.json";
import resume from "../../assets/resume.pdf"
import { useState, useEffect } from "react";
const Home = (props) => {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.body.classList.add("dark");
    }
    if (theme === "light") {
      document.body.classList.remove("dark");
    }
  }, []);
  const [, setIsChecked] = useState(false);
  const toggleDarkMode = () => {
    if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      localStorage.setItem("isChecked", true);
      setIsChecked(true);
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      localStorage.setItem("isChecked", false);
      setIsChecked(false);
    }
  };

  const [dark, ] = useState(() => {
    const localValue = localStorage.getItem("isChecked");
    if (localValue == null) return null;
  });

  const sections = [
    "#hero",
    "#about",
    "#projects",
    "#hobbies",
    "#skills",
    "#contact",
  ];
  const [currentSection, setCurrentSection] = useState("#hero");
  const handleNextSection = () => {
    const currentIndex = sections.indexOf(currentSection);
    const nextIndex = (currentIndex + 1) % sections.length; // Loops back to the first section after the last one
    setCurrentSection(sections[nextIndex]);
  };
  const [isAtBottom, setIsAtBottom] = useState(false);

  const checkIfAtBottom = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    // If the scroll position is near the bottom (within 10px of the end)
    if (scrollPosition >= pageHeight - 150) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkIfAtBottom);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", checkIfAtBottom);
    };
  }, []);

  return (
    <>
      <section className="hero" id="hero">
        <div className="theme-icon">
          <label className="switch">
            <p>Dark Mode</p>
            <input type="checkbox" checked={dark} onClick={toggleDarkMode} />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="hero-container">
          <div>
            <img alt="" className="block" src="" />
          </div>
          <h1 className="my-name">Mohamed Ibrahim</h1>
          <p className="subtitle">Frontend Developer | React.js</p>
          <div className="social-hero-icons">
            <a href="https://github.com/Mohamedibrahimfe">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/mohamed-ibrahim-a41bab290/">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://x.com/mohamed6845912">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100078061937722">
              <i className="bi bi-facebook"></i>
            </a>
          </div>

          <div className="cta-buttons">
            {" "}
            <a className="btn exception" href={resume} download={resume}>
              <span className="transition"></span>
              <span className="gradient"></span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="ex"
              >
                <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
              </svg>{" "}
              <span className="label ex">Download CV</span>
            </a>
            <a className="btn exception" href="#contact">
              <span className="transition"></span>
              <span className="gradient"></span>{" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="ex"
              >
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
              </svg>{" "}
              <span className="label">Contact Me</span>
            </a>
          </div>
        </div>
        <a
          className="next-section"
          href={currentSection}
          onClick={handleNextSection}
        >
          {!isAtBottom ? (
            <svg
              fill="#000000"
              height="200px"
              className="next-section-icon"
              width="2.2rem"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 330 330"
              xmlspace="preserve"
              transform="rotate(180)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="XMLID_13_">
                  {" "}
                  <path
                    id="XMLID_14_"
                    d="M175.605,104.393c-2.814-2.813-6.628-4.393-10.607-4.393c-3.979,0-7.794,1.581-10.607,4.394l-79.998,80 c-5.857,5.858-5.857,15.355,0.001,21.213c5.857,5.857,15.355,5.858,21.213-0.001l69.392-69.393l69.395,69.394 C237.322,208.536,241.161,210,245,210s7.678-1.464,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213L175.605,104.393z"
                  ></path>{" "}
                  <path
                    id="XMLID_15_"
                    d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M165,300 c-74.439,0-135-60.561-135-135S90.561,30,165,30s135,60.561,135,135S239.439,300,165,300z"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
          ) : (
            <svg
              fill="#000000"
              width="2.2rem"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              // xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 330 330"
              // xml:space="preserve"
              className="next-section-icon"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="XMLID_13_">
                  {" "}
                  <path
                    id="XMLID_14_"
                    d="M175.605,104.393c-2.814-2.813-6.628-4.393-10.607-4.393c-3.979,0-7.794,1.581-10.607,4.394l-79.998,80 c-5.857,5.858-5.857,15.355,0.001,21.213c5.857,5.857,15.355,5.858,21.213-0.001l69.392-69.393l69.395,69.394 C237.322,208.536,241.161,210,245,210s7.678-1.464,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213L175.605,104.393z"
                  ></path>{" "}
                  <path
                    id="XMLID_15_"
                    d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M165,300 c-74.439,0-135-60.561-135-135S90.561,30,165,30s135,60.561,135,135S239.439,300,165,300z"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
          )}
        </a>
      </section>
    </>
  );
};

export default Home;
