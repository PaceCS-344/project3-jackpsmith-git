import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './Navbar.js';
import { Home } from './Home.js';
import { About } from './About.js';
import { Projects } from './Projects.js'
import { Contact } from "./Contact.js";
import { Skills } from "./Skills.js";
import { Footer } from "./Footer.js";

export default function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    );
}