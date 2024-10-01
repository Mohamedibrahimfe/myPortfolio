import "../style/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <p>© 2024 Mohamed Ibrahim. All rights reserved.</p>
      <p>Made with ❤️ in Egypt</p>
      <a href="/contact" className="footer-link" to="/contact">
        Contact
      </a>
      <div className="social-icons">
        <a href="https://github.com/Mohamedibrahimfe">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/mohamed-ibrahim-a41bab290/">
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
