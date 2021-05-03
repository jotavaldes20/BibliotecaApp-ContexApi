import React, { Fragment, useContext } from "react";
import { LibrosContext } from "./../../contexts/LibrosContext";
import SearchLibro from "./../Libros/SearchLibro";
import Categorias from "./../Libros/Categorias"
import LibrosComponent from "./Libros"
import ProgressBar from "./../Common/ProgressBar";
import Message from "./../Common/Message";
const Libros = () => {
  //destructuracion de los datos provinientes del contexto Libros
  const {doneFetch, text, libros, categorias, validateQueryLibro, getByCategoriaId} = useContext(LibrosContext);
  return (
    <Fragment>
      <SearchLibro validateQueryLibro={validateQueryLibro} />
      <Categorias categorias={categorias} getByCategoriaId={getByCategoriaId} />
      {doneFetch ? (
        libros.length ? (
          <LibrosComponent text={text} libros={libros} />
        ) : (
          <Message text={text} />
        )
      ) : (
        <ProgressBar />
      )}
    </Fragment>
  );
};

export default Libros;
