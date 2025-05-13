import "../assets/css/Hero.css";
import "../data/about.json";
import resume from "../assets/resume.pdf";
import myImage from '../assets/me.png';

const Hero = () => {
  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-container">
          <div>
            <img alt="Mohamed Ibrahim" className="block" src={myImage} loading="lazy" />
          </div>
          <h1 className="my-name">Mohamed Ibrahim</h1>
          <p className="subtitle">Frontend Developer | React.js</p>

          <p className="hero-description">I build modern, animated, conversion-focused websites and web apps for small businesses and startups.</p>
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
            <a href="https://wa.link/csa1mk" target="_blank">
              <i className="bi bi-whatsapp"></i>
            </a>
            <a href="https://www.mostaql.com/mohamedibrahimfe">
              <i className="bi bi-mostaql"></i>
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
        
      </section>
    </>
  );
};

export default Hero;
