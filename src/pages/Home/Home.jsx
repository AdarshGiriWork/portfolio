import "./Home.css";

export default function Home() {
  return (
    <section id="home" className="page-home">
      <p className="home-eyebrow">Hello, I&apos;m</p>
      <h1 className="home-title">Adarsh Giri</h1>
      <p className="home-role">Software Engineer | AI/ML Engineer</p>
      <p className="home-lede">
        An enthusiastic and proactive professional skilled in Full Stack Development and  AI/ML. <br />
        A fast learner who is always eager to take on new challenges and expand technical skills. <br />
        Quick to notice small details and a strong team player who thrives in collaborative and dynamic environments.
      </p>
      <div className="home-actions">
        <a className="home-btn home-btn-primary" href="#skills">
          View Skills
        </a>
        <a className="home-btn home-btn-ghost" href="#contact">
          Get in touch
        </a>
      </div>
      <div className="home-image">
        
      </div>
    </section>
  );
}
