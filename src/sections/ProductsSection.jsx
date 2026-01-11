import { useState } from "react";
import { productsData } from "../data/productsData";

export default function ProductsSection() {
  const [activeId, setActiveId] = useState("annot8");
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id = "products" className="products-section">
      <h2 className="products-title">PRODUCTS</h2>

      <div className="products-wrapper">
        {productsData.map((product) => {
          const isActive = activeId === product.id;

          return (
            <div
              key={product.id}
              className={`product-card ${isActive ? "active" : ""}`}
            >
              {/* ================= MAIN CARD ================= */}
              <div className="product-content">
                {/* LEFT TEXT */}
                <div className="product-text">
                  <h3>{product.title}</h3>
                  <div className="subtitle">{product.subtitle}</div>
                  <p className="desc">{product.description}</p>
                  <div className="metric">{product.metric}</div>

                  {/* DETAILS BUTTON (ALWAYS VISIBLE) */}
                  <button
                    className="details-btn"
                    onClick={() => {
                      if (activeId !== product.id) {
                        setActiveId(product.id);
                        setIsExpanded(true);
                      } else {
                        setIsExpanded(!isExpanded);
                      }
                    }}
                  >
                    {isExpanded && isActive
                      ? "CLOSE PROTOCOL ←"
                      : "DETAILS PROTOCOL →"}
                  </button>
                </div>

                {/* RIGHT IMAGE */}
                <div className="product-visual">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                  />
                  <div className="visual-grid-overlay" />
                </div>
              </div>

              {/* ================= EXPANDED DETAILS ================= */}
              {isExpanded && isActive && (
                <div className="product-details">
                  <div className="details-left">
                    <h4>System Overview</h4>
                    <p>{product.longDescription}</p>

                    <h4>Key Capabilities</h4>
                    <ul>
                      {product.features.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="details-right">
                    <div className="details-visual">
                      SYSTEM VISUAL MODULE
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
