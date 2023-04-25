import AnimalCard from "./AnimalCard";
import axios from "axios";
import "../App.css";

function PopisZivotinja({ zivotinje, postaviZivotinje }) {
  async function filtriraj(e) {
    const podatci = await axios
      .get(`http://localhost:3001/zivotinje/?vrsta=${e.target.value}`)
      .then((zivotinje) => postaviZivotinje(zivotinje.data));
  }
  return (
    <div>
      <h1>Popis Životinja</h1>
      <h1>Filteri</h1>
      <div className="card-container">
        {zivotinje.map((r) => (
          <div className="card">
            <AnimalCard key={r.id} zivotinja={r} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopisZivotinja;
