import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="page-contact">
      <h2 className="section-heading">Contact</h2>
      <p className="contact-lede">
        Please feel free to reach out!
      </p>
      <div className="contact-links">
        <a className="contact-row" href="mailto:adarsh.0.giri@gmail.com">
          <span className="contact-label">Email</span>
        </a>
        <a
          className="contact-row"
          href="https://www.linkedin.com/in/adarsh-giri-286016281/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="contact-label">LinkedIn</span>
        </a>
      </div>
      <p className="contact-foot">Open to meaningful opportunities</p>
    </section>
  );
}
