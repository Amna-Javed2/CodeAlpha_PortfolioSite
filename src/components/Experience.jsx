import "../App.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Experience() {
  const ref = useScrollAnimation();
  return (
    <section id="experience" ref={ref} className="content-section fade-section">
      <h2>Experience Section</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Necessitatibus, perferendis. Dolorum minus minima officiis est iure,
        voluptate aperiam iusto provident, ipsam dolorum delectus quos expedita
        esse! Aperiam, aspernatur ducimus? Numquam eaque atque id doloribus
        accusamus, dolore cupiditate suscipit molestiae eius odio dolor illum
        labore dolores quos corrupti aliquid temporibus at ipsa et repellendus
        omnis voluptas? Laboriosam dolores commodi alias autem beatae fuga nam,
        sit libero soluta fugiat dolorem!
      </p>
    </section>
  );
}

export default Experience;
