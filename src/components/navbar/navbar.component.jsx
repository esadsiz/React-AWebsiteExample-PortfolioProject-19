import { NavLink } from "react-router-dom";
import "./navbar.styles.scss";

const NavBar = ({ navBarProps }) => {
  return (
    <div className="navbar">
      <h2 className="navbar-links">
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "grey" : "white" })}
          to="/"
        >
          {navBarProps.logo}
        </NavLink>
      </h2>

      <h2 className="navbar-links">
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "grey" : "white" })}
          to="entdecken"
        >
          {navBarProps.link1}
        </NavLink>
      </h2>

      <h2 className="navbar-links">
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "grey" : "white" })}
          to="werkzeugen"
        >
          {navBarProps.link2}
        </NavLink>
      </h2>

      <h2 className="navbar-links">
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "grey" : "white" })}
          to="holdenprofi"
        >
          {navBarProps.link4}
        </NavLink>
      </h2>

      <h2 className="navbar-links">
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "grey" : "white" })}
          to="derfirma"
        >
          {navBarProps.link5}
        </NavLink>
      </h2>
    </div>
  );
};

export default NavBar;
