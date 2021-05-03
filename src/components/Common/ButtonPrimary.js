import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Ver from '@material-ui/icons/Visibility';
import Back from '@material-ui/icons/Backspace';

const ButtonPrimary = ({ type, to }) => (
  <Link className="buttonPrimary" to={to}>
    <Button variant="contained" color="primary"  startIcon={type === 'contenido' ? <Ver /> : <Back /> }>
      {type === "contenido" ? "Ver Libro" : "Atras"}     
    </Button>
  </Link>
);

export default ButtonPrimary;
