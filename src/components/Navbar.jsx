import "../App.css";
import { NavLink } from "react-router-dom";

function Navbar({ admin, setAdmin }) {
  function toggleAdmin() {
    setAdmin(!admin);
  }

  return (
    <div className="navbar">
      <div>
        <NavLink to="/" className="navbar-title">
          Azil
        </NavLink>
      </div>
      <div className="options-container">
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#646cff" : "white",
              })}
              to="/"
            >
              O nama
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#646cff" : "white",
              })}
              to="/popis"
            >
              Popis
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#646cff" : "white",
              })}
              to="/donacije"
            >
              Donacije
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#646cff" : "white",
              })}
              to="/obavjesti"
            >
              Obavijesti
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <a className="admin">Admin</a>
        <input
          class="apple-switch"
          type="checkbox"
          onClick={toggleAdmin}
        ></input>
      </div>
    </div>
  );
}

export default Navbar;
