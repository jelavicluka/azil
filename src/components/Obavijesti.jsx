import moment from "moment";
import { useState } from "react";
import UnosObavijesti from "./UnosObavijesti";
import axios from "axios";

function Obavijesti({ obavijesti, postaviObavijesti, admin }) {
  const [forma, postaviFormu] = useState(false);

  function toggleForm() {
    postaviFormu(true);
  }

  async function izbrisiObavijest(e) {
    const id = e.target.value;

    await axios.delete(`http://localhost:3001/obavijesti/${id}`);
    const rezultat = await axios.get(`http://localhost:3001/obavijesti`);
    postaviObavijesti(rezultat.data);
  }

  return (
    <div>
      <h1>Obavijesti</h1>
      <div style={{ padding: "15px 0" }}>
        {forma ? (
          <UnosObavijesti
            admin={admin}
            postaviFormu={postaviFormu}
            postaviObavijesti={postaviObavijesti}
          ></UnosObavijesti>
        ) : (
          <div className="nova-donacija">
            <button onClick={toggleForm}>Nova obavijest</button>
          </div>
        )}
      </div>
      {obavijesti
        .sort(function (a, b) {
          return a.datum < b.datum ? 1 : a.datum > b.datum ? -1 : 0;
        })
        .map((r) => (
          <div key={r.id} style={{ padding: "1.5rem 0" }}>
            <div
              style={{
                float: "left",
                width: "47%",
                backgroundColor: r.vazno
                  ? "rgb(255, 96, 92)"
                  : "rgb(66, 121, 81)",
              }}
            >
              <h2 style={{ paddingLeft: "5rem" }}>{r.naslov}</h2>
            </div>
            <div
              style={{
                float: "right",
                width: "53%",
                backgroundColor: r.vazno
                  ? "rgb(255, 96, 92)"
                  : "rgb(66, 121, 81)",
              }}
            >
              <h2 style={{ float: "right", paddingRight: "5rem" }}>
                {moment(r.datum).format("DD.MM.YYYY")}
              </h2>
              <div>
                <h2>{r.vazno ? "Važno!" : ""}</h2>
              </div>
            </div>
            <div style={{ display: "inline-block", padding: "0 7rem" }}>
              <p>{r.tekst}</p>
            </div>

            {admin && (
              <div style={{ float: "right", paddingRight: "7rem" }}>
                <button
                  value={r.id}
                  className="delete-button"
                  onClick={izbrisiObavijest}
                >
                  Izbriši
                </button>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default Obavijesti;
