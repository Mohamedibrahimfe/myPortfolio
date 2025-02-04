import "./Hero.css";
import "../../components/themetoggle/ThemeIcon.css";
import "../../data/about.json";
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
  const [isChecked, setIsChecked] = useState(false);
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
            <input
              type="checkbox"
              checked={localStorage.getItem("isChecked") === "false"}
              onClick={toggleDarkMode}
            />
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
            <button
              className="btn "
              Download
              href="/Mohamedibrahimfe/myPortfolio/blob/main/my_portfolio/public/cv-fe-v2.pdf"
            >
              <span class="transition"></span>
              <span class="gradient"></span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
              </svg>{" "}
              <span class="label">Download CV</span>
            </button>
            <button className="btn" href="#contact">
              <span class="transition"></span>
              <span class="gradient"></span>{" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
              </svg>{" "}
              <span class="label">Contact Me</span>
            </button>
          </div>
        </div>
        <a
          className="next-section"
          href={currentSection}
          onClick={handleNextSection}
        >
          {!isAtBottom ? (
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              class="next-section-icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="next-section-icon"
            >
              <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z"
                  fill="#000000"
                ></path>{" "}
              </g>
            </svg>
          )}
        </a>
      </section>
    </>
  );
};

export default Home;
