import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header className="navbar">
      {/* LEFT */}
      <div className="navbar-left">
        <img src={logo} alt="Eight Dimension" />
      </div>

      {/* CENTER */}
      <nav className="navbar-center">
        <a href="#products">Products</a>
        <a href="#industries">Industries</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* RIGHT */}
      <div className="navbar-right">
        <button className="nav-cta">GET ACCESS</button>
      </div>
    </header>
  );
}
