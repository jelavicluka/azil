import { useEffect, useState } from "react";
import axios from "axios";

function Donacije({ admin, donacije, postaviDonacije }) {
  const [ponovljenaDonacija, postaviPonovljenuDonaciju] = useState({
    kategorija: "",
    tip: "",
    vrijednost: "",
    opis: "",
  });

  const donirano = async (e) => {
    const id = e.target.value;

    await axios.patch(`http://localhost:3001/donacije/${id}`, {
      kategorija: "donirano",
    });

    const rezultat = await axios.get(`http://localhost:3001/donacije`);
    postaviDonacije(rezultat.data);
  };

  const izbrisi = async (e) => {
    const id = e.target.value;

    await axios.delete(`http://localhost:3001/donacije/${id}`);
    const rezultat = await axios.get(`http://localhost:3001/donacije`);
    postaviDonacije(rezultat.data);
  };

  function obradiPodatke(objekt) {
    return {
      kategorija: "trazi",
      tip: objekt.tip,
      vrijednost: objekt.vrijednost,
      opis: objekt.opis,
    };
  }

  const ponovi = async (e) => {
    e.preventDefault();
    const donacija = obradiPodatke(donacije[e.target.value]);

    await axios.post(`http://localhost:3001/donacije`, donacija);

    const rezultat = await axios.get(`http://localhost:3001/donacije`);
    postaviDonacije(rezultat.data);
  };

  return (
    <div>
      <h1>Donacije</h1>
      <h1>Tražimo</h1>
      <table style={{ margin: "0 auto" }}>
        <thead>
          <tr>
            <th>Tip</th>
            <th>Vrijednost</th>
            <th>Opis</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {donacije.map((r) =>
            r.kategorija === "trazi" ? (
              <tr key={r.id} className="redak-tablice">
                <td>{r.tip}</td>
                <td>{r.vrijednost}</td>
                <td>{r.opis}</td>
                <td>
                  {admin ? (
                    <div>
                      <button value={r.id} onClick={donirano}>
                        Donirano
                      </button>
                      <button value={r.id} onClick={izbrisi}>
                        Izbriši
                      </button>
                    </div>
                  ) : (
                    <button value={r.id} onClick={donirano}>
                      Doniraj
                    </button>
                  )}
                </td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>

      <h1>Nudi se</h1>
      <table style={{ margin: "0 auto" }}>
        <thead>
          <tr>
            <th>Tip</th>
            <th>Vrijednost</th>
            <th>Opis</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {donacije.map((r) =>
            r.kategorija === "nudi" ? (
              <tr className="redak-tablice">
                <td>{r.tip}</td>
                <td>{r.vrijednost}</td>
                <td>{r.opis}</td>
                <td>
                  {admin && (
                    <button value={r.id} onClick={donirano}>
                      Donirano
                    </button>
                  )}
                </td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>

      <h1>Donirano</h1>
      <table style={{ margin: "0 auto" }}>
        <thead>
          <tr>
            <th>Tip</th>
            <th>Vrijednost</th>
            <th>Opis</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {donacije.map((r) =>
            r.kategorija === "donirano" ? (
              <tr className="redak-tablice">
                <td>{r.tip}</td>
                <td>{r.vrijednost}</td>
                <td>{r.opis}</td>
                <td>
                  {admin && (
                    <div>
                      <button value={r.id} onClick={ponovi}>
                        Ponovi
                      </button>
                      <button value={r.id} onClick={izbrisi}>
                        Izbriši
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Donacije;
