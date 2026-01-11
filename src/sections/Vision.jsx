import { useEffect, useRef, useState } from "react";

export default function Vision() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="vision-section">
       
        <div className="vision-grid" />
        <div className="vision-dots" />
        <div className="vision-glow" />



      <div 
        ref={ref}
        className={`vision-content ${visible ? "show" : ""}`}
      >
        <h2>
          SCALING HUMAN CAPABILITY <br />
          THROUGH <span>SEAMLESS AUTONOMY</span>
        </h2>

        <p>
          We bridge the gap between hardware and intelligence. 8-D.AI provides
          the software backbone that transforms standard drone platforms into
          sophisticated autonomous assets that perceive, navigate, and
          collaborate with precision.
        </p>
      </div>
    </section>
  );
}
