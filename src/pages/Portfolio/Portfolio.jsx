import Navbar from "../../components/Navbar/Navbar";
import Home from "../Home/Home";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <Navbar />
      <Home />
      <Skills />
      <Contact />
    </div>
  );
}