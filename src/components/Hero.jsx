import "./Hero.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Hero() {
  const ref = useScrollAnimation();
  return (
    <section id="hero" ref={ref} className="fade-section">
    <h1>Hero Section</h1>
    </section>
  )
}

export default Hero;
