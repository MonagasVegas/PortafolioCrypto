import React, { Component } from "react";
import "./index.css";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";

import TH from "./img/three.png";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="container">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Divider variant="fullWidth" />
            <br />
            <br />
          </Grid>
          <Grid item xs={12} sm={12}>
            <img src={TH} width="50px" alt="_alt" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h3" gutterBottom component="div">
              CoinChallenge
            </Typography>
            <p class="text-Paragraph">
              CoinChallenge ofrece un análisis fundamental del mercado de
              criptomonedas. Además de rastrear el precio, el volumen y la
              capitalización de mercado, controla el crecimiento de la
              comunidad, el desarrollo de código fuente abierto, los eventos
              principales y las métricas en cadena.
            </p>
            <strong>
              <h4 style={{ color: "#1bbc63" }}>
                {" "}
                © 2022 CoinChallenge. All rights reserved
              </h4>
            </strong>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={12} sm={2}>
            <Typography variant="h5" gutterBottom component="div">
              Productos
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Button style={{ color: "black" }}>Explorador</Button>
              </Grid>
              <Grid item xs={12}>
                <Button style={{ color: "black" }}>CriptoAPI</Button>
              </Grid>
              <Grid item xs={12}>
                <Button style={{ color: "#1bbc63" }}>
                  <strong>CriptoIndice</strong>
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button style={{ color: "black" }}>Mapa del sitio</Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Typography variant="h5" gutterBottom component="div">
              Empresa
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Button style={{ color: "black" }}>Nosotros</Button>
              </Grid>
              <Grid item xs={12}>
                <Button style={{ color: "#1bbc63" }}>
                  <strong>Terminos de uso</strong>
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button style={{ color: "black" }}>
                  Politicas de privacidad
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button style={{ color: "black" }}>Preguntas frecuentes</Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Typography variant="h5" gutterBottom component="div">
              Apoyo
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Button style={{ color: "black" }}>
                  Formulario de solicitud
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button style={{ color: "black" }}>Soporte</Button>
              </Grid>
              <Grid item xs={12}>
                <Button style={{ color: "#1bbc63" }}>
                  <strong>(FAQ)</strong>
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button style={{ color: "black" }}>Danos tu oponión</Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Typography variant="h5" gutterBottom component="div">
              Redes Sociales
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Button style={{ color: "black" }}>
                  <strong>Facebook</strong>
                </Button>
                <FacebookIcon
                  style={{
                    color: "#1bbc63",
                    marginLeft: "11px",
                    marginBottom: "-5px",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button style={{ color: "black" }}>
                  <strong>Instagram</strong>
                </Button>
                <InstagramIcon
                  style={{
                    color: "#1bbc63",
                    marginLeft: "7px",
                    marginBottom: "-5px",
                  }}
                ></InstagramIcon>
              </Grid>
              <Grid item xs={12}>
                <Button style={{ color: "black" }}>
                  <strong>Telegram</strong>
                </Button>
                <TelegramIcon
                  style={{
                    color: "#1bbc63",
                    marginLeft: "8px",
                    marginBottom: "-5px",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button style={{ color: "black" }}>
                  <strong>Twitter</strong>
                </Button>
                <TwitterIcon
                  style={{
                    color: "#1bbc63",
                    marginLeft: "25px",
                    marginBottom: "-5px",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Footer;
