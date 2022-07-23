import React, { Component } from "react";
import "./index.css";
import { Grid, Typography } from "@mui/material";
import IL from "./img/illustration.png";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="container-Dashboard">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" gutterBottom component="div">
              Tu exchange de criptomonedas de confianza
            </Typography>
            <Typography variant="h4" gutterBottom component="div">
              En coinChallenge, abogamos por la protección de los usuarios a
              través de protocolos estrictos y mecanismos de carácter técnico
              punteros en el sector.
            </Typography>
            <Typography variant="h5" gutterBottom component="div" class="text">
              Más información &nbsp;&nbsp;&#62;
            </Typography>
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={12} sm={3}>
            <img src={IL} alt="_alt" class="image" />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
