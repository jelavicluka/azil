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
              className={({ isActive }) => (isActive ? "active" : "pending")}
              to="/"
            >
              O nama
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "pending")}
              to="/popis"
            >
              Popis
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "pending")}
              to="/donacije"
            >
              Donacije
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "pending")}
              to="/obavijesti"
            >
              Obavijesti
            </NavLink>
          </li>
          {admin && (
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "pending")}
                to="/unos"
              >
                Unos
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      <div>
        <a className="admin">Admin</a>
        <input
          className="apple-switch"
          type="checkbox"
          onClick={toggleAdmin}
        ></input>
      </div>
    </div>
  );
}

export default Navbar;
