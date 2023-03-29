import { Link } from "react-router-dom";
import "../CSS/header/header.css";

export const Header = () => {
  return (
    <div id="header">
      <nav>
        <ul className="ul-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Todo">Todo</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
