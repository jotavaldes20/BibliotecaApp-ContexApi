import React, { Fragment, useContext } from "react";
import { ContenidoLibrosContext } from "./../../contexts/ContenidoLibrosContext";
import ProgressBar from "./../Common/ProgressBar";
import Message from "./../Common/Message";
import ButtonPrimary from "./../Common/ButtonPrimary";
import ContenidoComponent from "./Contenido";

//statefull
const Contenido = () => {
  const { doneFetchLibro, libro } = useContext(ContenidoLibrosContext);
  return (
    <Fragment>
      {doneFetchLibro ? (
        libro.length ? (
          <ContenidoComponent libro={libro} />
        ) : (
          <Message text="No se han encontrado Resultados" />
        )
      ) : (
        <ProgressBar />
      )}
      <ButtonPrimary type="Atras" to="/"/>
    </Fragment>
  );
};
export default Contenido;
