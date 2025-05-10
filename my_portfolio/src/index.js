import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import "./index.css";
export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);