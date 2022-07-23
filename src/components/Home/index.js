import React, { Component } from "react";
import "./index.css";
import { Grid, Typography, Paper } from "@mui/material";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="root">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Typography variant="h4" gutterBottom component="div">
              Principales 100 criptomonedas por capitalización de mercado
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12}>
            <p class="text-Home">
              La capitalización del mercado global de criptomonedas es $1.05T,
              un aumento de 0.26% durante el último día.Leer menos El volumen
              total del mercado de criptomonedas en las últimas 24 horas es de
              $77.47B, lo cual hace que haya una disminución de 19.63%. El
              volumen total en DeFi es actualmente $6.79B, un 8.76% del volumen
              total del mercado de criptomonedas en 24 horas. El volumen de
              todas las monedas estables es ahora de $70.19B, lo cual es 90.60%
              del volumen total del mercado de criptomonedas en 24 horas. El
              precio actual del Bitcoin es $23,021.23. El dominio actual del
              Bitcoin es 42.02%, lo que representa un descenso del 0.71% a lo
              largo del día.
            </p>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Grid container spacing={3}>
              <Grid item xs={1} />
              <Grid item xs={12} sm={3}>
                <Paper elevation={3} class="paper">
                  <Typography variant="h5" gutterBottom component="div">
                    1.091.773.064 US$ -1.2%
                  </Typography>
                  <strong>Capitalización de mercado</strong>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper elevation={3} class="paper">
                  <Typography variant="h5" gutterBottom component="div">
                    132.726.139.748 US$
                  </Typography>
                  <strong>Volumen de comercio en 24 horas</strong>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper elevation={3} class="paper">
                  <Typography variant="h5" gutterBottom component="div">
                    40,29 %
                  </Typography>
                  <strong>
                    Dominio de la capitalización de mercado del Bitcoin
                  </strong>
                </Paper>
              </Grid>
              <Grid item xs={1} />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <br />
            <br />
            <br />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;
