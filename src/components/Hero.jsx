import "./Hero.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Hero() {
  const ref = useScrollAnimation();
  return (
    <section id="hero" ref={ref} className="fade-section">
      <h1>Hi, I'm Amna Javed 👋</h1>
      <p>
        Frontend Developer building responsive, user-focused web interfaces —
        with React and a growing focus on AI-powered experiences.
      </p>
    </section>
  );
}

export default Hero;
