import { Link } from "react-router-dom";

export const Header = () => (
  <header>
    <div className="container">
      <div className="inner-content">
        <div className="brand">
          <Link to="/">MARVEL</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/favs">Favorites</Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
);
