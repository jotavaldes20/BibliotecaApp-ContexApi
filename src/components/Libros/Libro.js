import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonPrimary from "./../Common/ButtonPrimary";
const Libro = ({libro_id,title, author,language,pages,thumbnail,cover,categories}) => (

  <Grid item xs={12} sm={4} >
    <Paper className="defaultPaper" elevation={3}>
        <img alt="img" src={cover} width="200" />
      <ul>
        <li>
          <strong>Titulo: </strong>
          <span>{title}</span>
        </li>
        <li>
          <strong>Autor: </strong>
          <span>{author}</span>
        </li>
        <li>
          <strong>language: </strong>
          <span>{language}</span>
        </li>

        <li>
          <strong>pages: </strong>
          <span>{ pages }</span>
        </li>
        <li>
            <ButtonPrimary type="contenido" to={`/ContenidoLibros/libro/${libro_id}`} />
        </li>
      </ul>
    </Paper>
  </Grid>
);

export default Libro
