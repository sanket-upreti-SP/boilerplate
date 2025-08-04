import { NavLink } from "react-router";
import "./Layout.css";

const Header = () => {
  return (
    <nav className="header-nav">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        end
      >
        Home
      </NavLink>

      <NavLink
        to="/trial"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Trial
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        About
      </NavLink>
    </nav>
  );
};

export default Header;
