import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Vision from "./sections/Vision";
import Products from "./sections/ProductsSection";
import { useEffect, useState } from "react";

function App() {
  const [loaded, setLoaded] = useState(false);

useEffect(() => {
  setTimeout(() => setLoaded(true), 100);
}, []);

  return (
    <>
      {/* BACKGROUND LAYERS */}
      <div className="bg-grid" />
      <div className="bg-dots" />
{!loaded && <div className="page-enter" />}

      <Navbar />
      <Hero />
      <Vision />
      <Products />
    </>
  );
}

export default App;
