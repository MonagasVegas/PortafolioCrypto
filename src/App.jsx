import React, { Fragment } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Table from "./components/Table";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";

export function App() {
  return (
    <Fragment>
      <Header />
      <br />
      <Dashboard />
      <br /><br /><br /><br />
      <Home />
      <Table />
      <br /><br /><br />
      <Footer />
    </Fragment>
  );
}
