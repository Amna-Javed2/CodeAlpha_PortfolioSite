import "../App.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Contact() {
  const ref = useScrollAnimation();
  return (
    <section id="contact" ref={ref} className="content-section fade-section"><h2>Contact Section</h2></section>
  )
}

export default Contact;
