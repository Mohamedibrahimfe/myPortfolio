import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css"

const Layout = () => {
  return (
    <>
      <header><nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/articles">Article</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
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