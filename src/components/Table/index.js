import React, { Component } from "react";
import "./index.css";
import { Grid } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(id, name, precio, uno, two, three, mercado, volumen, circulación) {
  return { id, name, precio, uno, two, three, mercado, volumen, circulación};
}

class CoinTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const rows = [
      createData(1, "Bitcoin", 22.814, "0.18%", "1.43%", "10.13%", "$435.448", "$31.453", "19,100,518 BTC" ),
      createData(2, "Tether", 1.00, "0.25%", "1.84%", "27.13%", "$188.448", "$51.453",  "19,100,518 BTC"),
      createData(3, "Ethereum", 1.550, "0.31%", "1.73%", "27.16%", "$188.448", "$18.821",  "121,657,776 ETH"),
      createData(4, "USD Coin", 1.00, "0.01%", "0.06%", "0.02%", "$55.008.448", "$6.243.821", "54,997,131 USDC"),
      createData(5, "BNB", 267.78, "1.72%", "0.91%", "12.75%", "$43.055.023", "$1,182,096,609", "161,337,261 BNB")
    ];

    return (
      <div class="root-Table">
        <TableContainer
          component={Paper}
          style={{ height: 400, width: "90%", marginLeft: "30px" }}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>#</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>Moneda</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>Precio $$&nbsp;</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>1h%&nbsp;</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>24h%&nbsp;</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>7d%&nbsp;</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>Cap. de Mercado&nbsp;</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>Volumen(24h)&nbsp;</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>Acciones en circulación&nbsp;</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.precio}</TableCell>
                  <TableCell align="right">{row.uno}</TableCell>
                  <TableCell align="right">{row.two}</TableCell>
                  <TableCell align="right">{row.three}</TableCell>
                  <TableCell align="right">{row.mercado}</TableCell>
                  <TableCell align="right">{row.volumen}</TableCell>
                  <TableCell align="right">{row.circulación}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid item xs={12}>
          <br />
          <br />
          <br />
        </Grid>
      </div>
    );
  }
}

export default CoinTable;
