import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">      
      <div className="flex-between social-hero-icons">
        <div className="gap"><a href="https://github.com/Mohamedibrahimfe">
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
        </a></div>
      
      <p>&copy;2024 Mohamed ibrahim | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
