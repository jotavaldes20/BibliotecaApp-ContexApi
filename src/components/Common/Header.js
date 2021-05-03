import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import logo from "./../../assets/img/logo.png";

const Header = () => (
  <AppBar position="sticky">
    <Toolbar>
      <img src={logo} alt="logo" width="60" height="60"></img>
      &nbsp;&nbsp;
      <h1>Biblioteca App</h1>
    </Toolbar>
  </AppBar>
);

export default Header;
