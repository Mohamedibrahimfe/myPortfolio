import React from "react";
// import ThemeToggle from "../components/ThemeToggle";
import "../style/Home.css";
const Home = () => {
  const [theme, setTheme] = React.useState("light-mode");
  const getTheme = () => {
    const theme = localStorage.getItem("theme");
    setTheme(theme);
  }
  React.useEffect(() => {
    getTheme();
  }, [])
  const toggleTheme = () => {
    const theme = localStorage.getItem("theme");
    const newTheme = theme === "light-mode" ? "dark-mode" : "light-mode";
    setTheme(newTheme);
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  }
  return (
    <div>
      <div onClick={toggleTheme} class="theme-toggle">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          class="icon moon"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Home;
