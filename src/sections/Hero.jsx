import { useEffect, useState } from "react";

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);

  return (
    <section className="hero">
      {/* GRID BACKGROUND */}
      <div className="grid-layer grid-layer-1"></div>
      <div className="grid-layer grid-layer-2"></div>
      <div className="grid-layer grid-layer-3"></div>
      <div className="hero-dots" />


      {/* GLOW SOURCE */}
      <div className="hero-glow"></div>

      {/* CONTENT */}
      <div className="hero-content enter">

        <div className="hero-badge">NEXT GEN AUTONOMY</div>

        <h1>FUTURE UNMANNED</h1>

        <h2 className="glow-text">INTELLIGENCE</h2>

        <p className="hero-desc">
          Transforming off-the-shelf drones into fully autonomous assets with
          advanced computer vision and swarm intelligence.
        </p>

  <button
  className="hero-btn hero-btn-enter"
  onClick={() => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }}
>
  Explore System
</button>



      </div>
    </section>
  );
}
