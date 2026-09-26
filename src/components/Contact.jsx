import "../App.css";
import "./Contact.css"
import useScrollAnimation from "../hooks/useScrollAnimation";


function Contact() {
  const ref = useScrollAnimation();
  return (
    <section id="contact" ref={ref} className="content-section fade-section">
      <h2>Contact</h2>
      <p>
        Have an internship opportunity or want to connect? My inbox is open.
      </p>
      <div className="contact-links">
      <a href="mailto:amna32611@gmail.com">amna32611@gmail.com</a>
      <a href="https://github.com/Amna-Javed2" target="_blank">
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/amna-javed-13a7692bb/"
        target="_blank"
      >
        LinkedIn
      </a>
      </div>
    </section>
  );
}

export default Contact;
