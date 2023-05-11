import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../App.css";

function AnimalCard({ zivotinja, toggleModal }) {
  const posaljiPodatke = (e) => {
    toggleModal(e.target.value);
  };

  return (
    <Card
      sx={{
        borderRadius: "10px",
        maxWidth: 250,
        backgroundColor: "rgb(47, 57, 78)",
        color: "white",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        width="300"
        image={`/foto${zivotinja.id}.jpg`}
      />
      <CardContent>
        <div>
          {zivotinja.udomljen ? (
            <span className="red-dot"></span>
          ) : (
            <span className="green-dot"></span>
          )}
        </div>
        <Typography gutterBottom variant="h5" component="div">
          {zivotinja.vrsta === "pas"
            ? "Pas "
            : zivotinja.vrsta === "mačka"
            ? "Mačka "
            : ""}
          {zivotinja.ime}
        </Typography>
        <Typography variant="body2" color="white">
          {zivotinja.opis}.
        </Typography>
      </CardContent>
      <CardActions>
        <button
          size="small"
          className="card-button"
          onClick={posaljiPodatke}
          value={zivotinja.id}
        >
          Detalji
        </button>
      </CardActions>
    </Card>
  );
}

export default AnimalCard;
