import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css"
const Layout = () => {
  return (
    <>
      <header><nav>
        <ul>
          <li><Link>Article</Link></li>
          <li><Link>About</Link></li>
          <li><Link>Projects</Link></li>
          <li><Link>Contact</Link></li>
        </ul>
      </nav></header>
      <div className="home-container"><Outlet /></div>
    </>
  )
};

export default Layout;