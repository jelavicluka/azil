import "./PopUp.css";

function PopUp({ modal, toggleModal }) {
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div>
      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <h2>Hello modal!</h2>
              <p>
                Modal modal modal modal modal Modal modal modal modal modal
                Modal modal modal modal modal Modal modal modal modal modal
                Modal modal modal modal modal Modal modal modal modal modal
              </p>
              <button className="close-modal" onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopUp;
