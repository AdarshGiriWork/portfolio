import "./Skills.css";

const SKILLS = [
  { name: "Languages", note: "Python, SQL, Java, JS" },
  { name: "Frameworks", note: " Reacts, Django, Express.js" },
  { name: "Libraries", note: "NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn" },
  { name: "Tools and DevOps", note: "Docker, Power BI, VS Code, Jupyter Notebok, GitHub" },
  { name: "Databases", note: "MySQL, PostgreSQL, SQLite" },
];

export default function Skills() {
  return (
    <section id="skills" className="page-skills">
      <h2 className="section-heading">Skills</h2>
      <ul className="skills-grid">
        {SKILLS.map((s) => (
          <li key={s.name} className="skill-card">
            <span className="skill-name">{s.name}</span>
            <span className="skill-note">{s.note}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
