const Menu = () => (
  <nav className="menu menu__off">
    <ul className="menu__list">
      <li className="menu__item">
        <a href="#about" className="menu__link">
          About
        </a>
      </li>

      <li className="menu__item">
        <a href="#tech" className="menu__link">
          Tech
        </a>
      </li>

      <li className="menu__item">
        <a href="#benefits" className="menu__link">
          Benefits
        </a>
      </li>

      <li className="menu__item">
        <a href="#contacts" className="menu__link">
          Contact
        </a>
      </li>
    </ul>
  </nav>
);

export default Menu;