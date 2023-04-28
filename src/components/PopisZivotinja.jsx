import AnimalCard from "./AnimalCard";
import axios from "axios";
import "../App.css";
import { Reveal } from "react-reveal";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box } from "@mui/system";

function PopisZivotinja({ zivotinje, postaviZivotinje }) {
  async function filtrirajVrste(e) {
    e.target.value === ""
      ? await axios
          .get(`http://localhost:3001/zivotinje`)
          .then((zivotinje) => postaviZivotinje(zivotinje.data))
      : await axios
          .get(`http://localhost:3001/zivotinje/?vrsta=${e.target.value}`)
          .then((zivotinje) => postaviZivotinje(zivotinje.data));
  }
  async function filtrirajDostupnost(e) {
    e.target.value === ""
      ? await axios
          .get(`http://localhost:3001/zivotinje`)
          .then((zivotinje) => postaviZivotinje(zivotinje.data))
      : await axios
          .get(`http://localhost:3001/zivotinje/?udomljen=${e.target.value}`)
          .then((zivotinje) => postaviZivotinje(zivotinje.data));
  }

  return (
    <div>
      <Reveal>
        <h1>Popis Životinja</h1>
        <div className="popis-grid-container">
          <div className="item-filters">
            <h2 className="filter-heading">Filteri</h2>
            <div>
              <div className="inputs-container">
                <div className="input-heading">Vrsta:</div>
                <div className="input-container">
                  <FormControlLabel
                    style={{ color: "white" }}
                    htmlFor="filter"
                    label={
                      <Box component="div" fontSize={14}>
                        Sve
                      </Box>
                    }
                    control={
                      <Checkbox
                        name="filter"
                        type="checkbox"
                        value={""}
                        onChange={filtrirajVrste}
                        sx={{
                          color: "#ffffff",
                          "&.Mui-checked": {
                            color: "rgb(92, 170, 113)",
                          },
                        }}
                      />
                    }
                  />
                </div>
                <div className="input-container">
                  <FormControlLabel
                    style={{ color: "white" }}
                    htmlFor="filter"
                    label={
                      <Box component="div" fontSize={14}>
                        Pas
                      </Box>
                    }
                    control={
                      <Checkbox
                        name="filter"
                        type="checkbox"
                        value={"pas"}
                        onChange={filtrirajVrste}
                        sx={{
                          color: "#ffffff",
                          "&.Mui-checked": {
                            color: "rgb(92, 170, 113)",
                          },
                        }}
                      />
                    }
                  />
                </div>
                <div className="input-container">
                  <FormControlLabel
                    style={{ color: "white" }}
                    htmlFor="filter"
                    label={
                      <Box component="div" fontSize={14}>
                        Mačka
                      </Box>
                    }
                    control={
                      <Checkbox
                        name="filter"
                        type="checkbox"
                        value={"mačka"}
                        onChange={filtrirajVrste}
                        sx={{
                          color: "#ffffff",
                          "&.Mui-checked": {
                            color: "rgb(92, 170, 113)",
                          },
                        }}
                      />
                    }
                  />
                </div>
              </div>
            </div>
            <div className="inputs-container">
              <div className="input-heading">Dostupnost:</div>
              <div className="input-container">
                <FormControlLabel
                  style={{ color: "white" }}
                  htmlFor="filter"
                  label={
                    <Box component="div" fontSize={14}>
                      Sve
                    </Box>
                  }
                  control={
                    <Checkbox
                      name="filter"
                      type="checkbox"
                      value={""}
                      onChange={filtrirajDostupnost}
                      sx={{
                        color: "#ffffff",
                        "&.Mui-checked": {
                          color: "rgb(92, 170, 113)",
                        },
                      }}
                    />
                  }
                />
              </div>
              <div className="input-container">
                <FormControlLabel
                  style={{ color: "white" }}
                  htmlFor="filter"
                  label={
                    <Box component="div" fontSize={14}>
                      Udomljen
                    </Box>
                  }
                  control={
                    <Checkbox
                      name="filter"
                      type="checkbox"
                      value={"true"}
                      onChange={filtrirajDostupnost}
                      sx={{
                        color: "#ffffff",
                        "&.Mui-checked": {
                          color: "rgb(92, 170, 113)",
                        },
                      }}
                    />
                  }
                />
              </div>
              <div className="input-container">
                <FormControlLabel
                  style={{ color: "white" }}
                  htmlFor="filter"
                  label={
                    <Box component="div" fontSize={14}>
                      Nije udomljen
                    </Box>
                  }
                  control={
                    <Checkbox
                      name="filter"
                      type="checkbox"
                      value={"false"}
                      onChange={filtrirajDostupnost}
                      sx={{
                        color: "#ffffff",
                        "&.Mui-checked": {
                          color: "rgb(92, 170, 113)",
                        },
                      }}
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div className="item-cards">
            <div className="card-container">
              {zivotinje.map((r) => (
                <div className="card">
                  <AnimalCard key={r.id} zivotinja={r} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default PopisZivotinja;
