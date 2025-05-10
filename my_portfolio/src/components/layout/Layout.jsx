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
    </>
  )
};

export default Layout;