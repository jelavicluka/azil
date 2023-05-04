import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

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
        image="https://ip.index.hr/remote/bucket.index.hr/b/index/images2/Iguana_naslovna_akvarij.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {zivotinja.vrsta === "pas" ? "Pas " : "Mačka "}
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
