import "../App.css";
import Switch from "react-ios-switch";

function Navbar({ admin, setAdmin }) {
  function toggleAdmin() {
    setAdmin(!admin);
  }

  return (
    <div className="navbar">
      <div>
        <a href="/" className="navbar-title">
          Azil
        </a>
      </div>
      <div className="options-container">
        <ul>
          <li>
            <a href="/opcenito">O nama</a>
          </li>
          <li>
            <a href="/popis">Popis</a>
          </li>
          <li>
            <a href="/donacije">Donacije</a>
          </li>
          <li>
            <a href="/obavjesti">Obavijesti</a>
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
