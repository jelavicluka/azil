import "./Footer.css";

function Footer() {
  return (
    <div>
      <div style={{ height: "100px" }}></div>
      <div className="grid-container">
        <div className="item1">
          <h2>Radno vrijeme</h2>
          <p>Ponedjeljak - Petak: 08:00 - 17:00</p>
          <p>Subota: 09:00 - 13:00</p>
          <p>Nedjelja: Zatvoreno</p>
        </div>
        <div className="item2">
          <h2>Kontaktirajte nas</h2>
          <div>
            <label htmlFor="ime" style={{ paddingRight: "5px" }}>
              Email:
            </label>
            <input type="text" id="email" name="email" />
          </div>
          <div style={{ paddingTop: "10px" }}>
            <textarea
              placeholder="Unesite svoju poruku ovdje"
              type="text"
              id="poruka"
              name="poruka"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
