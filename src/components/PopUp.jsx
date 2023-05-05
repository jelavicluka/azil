import "./PopUp.css";
import axios from "axios";
import { useState } from "react";

function PopUp({ modal, toggleModal, cardZivotinja, admin }) {
  const [formaPodaci, postaviFormaPodaci] = useState({});
  const [mjenjamo, postaviMjenjamo] = useState(false);

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const udomljavanje = async (id) => {
    await axios
      .patch(`http://localhost:3001/zivotinje/${id}`, { udomljen: true })
      .then(toggleModal);
  };

  function pokreniUredivanje() {
    postaviFormaPodaci({
      ime: cardZivotinja[0].ime,
      vrsta: cardZivotinja[0].vrsta,
      opis: cardZivotinja[0].opis,
      udomljen: Boolean(cardZivotinja[0].udomljen),
    });

    postaviMjenjamo(true);
  }

  function obradiPodatke(objekt) {
    return {
      ime: objekt.ime,
      vrsta: objekt.vrsta,
      opis: objekt.opis,
      udomljen: Boolean(objekt.udomljen),
    };
  }

  async function spremiPodatke() {
    const zaSlanje = obradiPodatke(formaPodaci);

    await axios.patch(
      `http://localhost:3001/zivotinje/${cardZivotinja[0].id}`,
      zaSlanje
    );
    const rezultat = await axios.get(
      `http://localhost:3001/zivotinje/${cardZivotinja[0].id}`
    );

    toggleModal();
    postaviMjenjamo(false);
  }

  const promjenaUlaza = (e) => {
    if (e.target.name === "udomljen") {
      const { name, checked } = e.target;
      postaviFormaPodaci({ ...formaPodaci, [name]: checked });
    } else {
      const { name, value } = e.target;
      postaviFormaPodaci({ ...formaPodaci, [name]: value });
    }
  };

  return (
    <div>
      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <p>
                Ime:{" "}
                {mjenjamo ? (
                  <input
                    type="text"
                    name="ime"
                    value={formaPodaci.ime}
                    onChange={promjenaUlaza}
                    required
                  />
                ) : (
                  cardZivotinja[0].ime
                )}
              </p>
              <p>
                Vrsta:{" "}
                {mjenjamo ? (
                  <input
                    type="text"
                    name="vrsta"
                    value={formaPodaci.vrsta}
                    onChange={promjenaUlaza}
                    required
                  />
                ) : (
                  cardZivotinja[0].vrsta
                )}
              </p>
              <p>
                Status:{" "}
                {mjenjamo ? (
                  <input
                    type="checkbox"
                    name="udomljen"
                    checked={formaPodaci.udomljen}
                    onChange={promjenaUlaza}
                  />
                ) : cardZivotinja[0].udomljen ? (
                  "udomljen"
                ) : (
                  "nije udomljen"
                )}
              </p>
              <p>
                Opis:{" "}
                {mjenjamo ? (
                  <input
                    type="text"
                    name="opis"
                    value={formaPodaci.opis}
                    onChange={promjenaUlaza}
                    required
                  />
                ) : (
                  cardZivotinja[0].opis
                )}
              </p>
              <button
                className="close-modal"
                id="close-button"
                onClick={toggleModal}
              >
                Zatvori
              </button>
              {!cardZivotinja[0].udomljen && (
                <button onClick={() => udomljavanje(cardZivotinja[0].id)}>
                  Udomi
                </button>
              )}
              <div style={{ paddingTop: "5px" }}>
                {admin &&
                  (mjenjamo ? (
                    <button onClick={spremiPodatke}>Spremi</button>
                  ) : (
                    <button onClick={pokreniUredivanje}>Uredi</button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopUp;
