import React, { Component } from "react";
import "./index.css";
import { Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

import CR from "./img/uno.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  render() {
    return (
      <div>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={1}>
            <img src={CR} width="70px" alt="_alt" />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h4" gutterBottom component="div">
              coinChallenge
            </Typography>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Button style={{ color: "black" }}>
              <strong>Criptomonedas</strong>
            </Button>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Button style={{ color: "black" }}>
              <strong>Intercambios</strong>
            </Button>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Button style={{ color: "#1bbc63" }}>
              <strong>Comunidad</strong>
            </Button>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button style={{ color: "black" }}>
              <strong>Productos</strong>
            </Button>
          </Grid>

          <Grid item xs={12} sm={1}>
            <Button style={{ color: "black" }} onClick={this.handleClick}>
              <strong>iniciar sesion</strong>
            </Button>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Button
              variant="contained"
              style={{ color: "black", backgroundColor: "#1bbc63" }}
            >
              <strong>Registrarse</strong>
            </Button>
          </Grid>
          <Grid item xs={2} />
        </Grid>

        <Grid container>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            PaperProps={{
              style: {
                borderRadius: "4vh",
                background:
                  "linear-gradient(90deg, #cbe452 0%, #77c801 50%, #77c801 100%)",
              },
            }}
          >
            <DialogTitle id="alert-dialog-title" justify="center">
              <Grid item xs={12}><br/></Grid>
              <Grid container>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                  <Typography variant="h5">Inicio de Sesión</Typography>
                </Grid>
                <Grid item xs={4} />
              </Grid>
            </DialogTitle>

            <DialogContent>
              <Grid container style={{ padding: 20, marginTop: -20 }}>
                <Grid md={12} xs={12} sm={12} container>
                  <Grid md={12} xs={12} sm={12} container>
                    <Grid md={12} xs={12} sm={12} container>
                      <br />
                    </Grid>

                    <Grid md={12} xs={12} sm={12} container>
                      <Typography variant="subtitle1">Correo</Typography>
                      <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        inputProps={{
                          maxLength: 25,
                        }}
                      />
                    </Grid>

                    <Grid md={12} xs={12} sm={12} container>
                      <Typography variant="subtitle1">Contraseña</Typography>
                      <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        inputProps={{
                          maxLength: 25,
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </DialogContent>

            <DialogActions>
              <Grid container style={{ marginBottom: 20 }}>
                <Grid item xs={6} />
                <Grid item xs={3}>
                  <Button
                    variant="variant"
                    color="primary"
                    onClick={this.handleClose}
                  >
                    Aceptar
                  </Button>
                </Grid>
                <Grid item xs={3} justify="flex-end" container>
                  <Button  variant="variant"
                    color="primary"
                    onClick={this.handleClose}
                  >
                    Cerrar
                  </Button>
                </Grid>
              </Grid>
            </DialogActions>
          </Dialog>
        </Grid>
      </div>
    );
  }
}

export default Header;
