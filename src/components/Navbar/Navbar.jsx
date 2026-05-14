import "./Navbar.css";

const LINKS = ["Home", "Skills", "Contact"];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Adarsh Giri</div>
      <ul className="nav-links">
        {LINKS.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`}>{l}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}