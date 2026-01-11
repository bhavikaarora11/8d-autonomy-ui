<div className={`product-card ${isActive ? "active" : ""}`}>
  <div className="product-inner">

    {/* LEFT TEXT */}
    <div className="product-text">
      <h3>{product.title}</h3>
      <span className="subtitle">{product.subtitle}</span>

      <p className="desc">{product.description}</p>

      <div className="metric">{product.metric}</div>

      <button
        className="details-btn"
        onClick={() => setActiveId(isActive ? null : product.id)}
      >
        {isActive ? "CLOSE PROTOCOL ←" : "DETAILS PROTOCOL →"}
      </button>
    </div>

    {/* RIGHT VISUAL */}
    <div className="product-visual">
      <img src={product.image} alt={product.title} />
      <div className="visual-grid" />
    </div>

  </div>
</div>
