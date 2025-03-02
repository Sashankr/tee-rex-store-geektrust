import "./styles.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__wrapper">
          <h2>
            <i className="fa-solid fa-shop"></i> TeeRex Store
          </h2>
          <section className="navbar__cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <p className="navbar__cart-count">0</p>
          </section>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
