import "../App.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

function About() {
  const ref = useScrollAnimation();
  return (
    <section id="about" ref={ref} className="content-section fade-section">
      <h2>About Section</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi numquam
        molestias minima magnam mollitia reprehenderit voluptas aut eaque
        delectus beatae at asperiores labore sint commodi nesciunt a nisi totam,
        amet, harum dolorem vero vitae et! Corrupti dolor neque, atque quaerat
        aliquam iste accusantium voluptatem tenetur laborum distinctio eos
        dolorum repellat optio natus aperiam iusto quidem esse fuga eius
        explicabo fugiat, maxime hic quae minima. Iure aperiam ipsam ratione,
        vel officiis at necessitatibus autem, placeat tenetur, porro aliquid?
        Quo ipsum libero ab, nobis eum voluptas accusantium dolorem nam cum
        minus adipisci, autem fugit exercitationem temporibus nesciunt illum,
        maxime error corporis repellendus.
      </p>
    </section>
  );
}

export default About;
