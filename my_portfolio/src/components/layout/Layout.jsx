import { NavLink, Outlet } from "react-router-dom";
import "./style.css"
const Layout = () => {
  return (
    <>
      <header><nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/articles">Article</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
        </ul>
      </nav></header>
      <div className="home-container"><Outlet /></div>
      <div className="contact-buttons">
        <a href="mailto:mohamed.ibrahimfe@gmail.com" className="contact-btn">
          <i className="bi bi-envelope-fill"></i>
          Contact Me
        </a>
        <a href="https://wa.link/csa1mk" target="_blank" className="whatsapp-btn">
          <i className="bi bi-whatsapp"></i>
          WhatsApp
        </a>
      </div>
    </>
  )
};

export default Layout;