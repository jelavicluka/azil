import { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import "./Footer.css";

function Footer() {
  const [forma, postaviForma] = useState({
    email: "",
    poruka: "",
  });
  const saljiPodatke = async (event) => {
    event.preventDefault();

    axios.post("http://localhost:3001/poruke", forma);

    postaviForma({ email: "", poruka: "" });
  };

  const promjenaUlaza = (event) => {
    const { name, value } = event.target;

    postaviForma({ ...forma, [name]: value });
  };
  return (
    <div>
      <div style={{ height: "100px" }}></div>
      <div className="grid-container">
        <div className="item1">
          <div style={{ float: "right", paddingRight: "3rem" }}>
            <h2>Radno vrijeme</h2>
            <p>Ponedjeljak - Petak: 08:00 - 17:00</p>
            <p>Subota: 09:00 - 13:00</p>
            <p>Nedjelja: Zatvoreno</p>
          </div>
        </div>
        <div className="item2">
          <form onSubmit={saljiPodatke}>
            <h2>Kontaktirajte nas</h2>
            <div>
              <label htmlFor="ime" style={{ paddingRight: "5px" }}>
                Email:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={forma.email}
                onChange={promjenaUlaza}
                required
              />
            </div>
            <div style={{ paddingTop: "10px" }}>
              <textarea
                placeholder="Unesite svoju poruku ovdje"
                type="text"
                id="poruka"
                name="poruka"
                value={forma.poruka}
                onChange={promjenaUlaza}
                required
              />
            </div>
            <div className="button-container">
              <button type="submit">Pošalji</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
