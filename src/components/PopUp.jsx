import "./PopUp.css";
import axios from "axios";

function PopUp({ modal, toggleModal, cardZivotinja }) {
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

  return (
    <div>
      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <p>Ime: {cardZivotinja[0].ime}</p>
              <p>Vrsta: {cardZivotinja[0].vrsta}</p>
              <p>
                Status:{" "}
                {cardZivotinja[0].udomljen ? "udomljen" : "nije udomljen"}
              </p>
              <p>Opis: {cardZivotinja[0].opis}</p>
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopUp;
