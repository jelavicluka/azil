import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function AnimalCard({ zivotinja }) {
  return (
    <Card
      sx={{
        borderRadius: "10px",
        maxWidth: 250,
        backgroundColor: "rgb(47, 57, 78)",
        color: "white",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://ip.index.hr/remote/bucket.index.hr/b/index/images2/Iguana_naslovna_akvarij.jpg"
          alt="green iguana"
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
      </CardActionArea>
    </Card>
  );
}

export default AnimalCard;
