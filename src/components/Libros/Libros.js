import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Libro from "./Libro";
import Message from "./../Common/Message";

const Libros = ({libros,text}) => (
    <Fragment>
    <Message text={text} />
    <div className="root">
      <Grid container spacing={2} justify="center">
        {libros.map((libro) => {
          const {
            ID,
            title,
            author,
            language,
            pages,
            thumbnail,
            cover
          } = libro;
          const categories=libro.categories
          return (
            <Libro
              key={ID}
              libro_id={ID}
              title={title}
              author={author}
              language={language}
              pages={pages}
              thumbnail={thumbnail}
              categories={categories}
              cover={cover}
            />
          );
        })}
      </Grid>
    </div>
  </Fragment>
)

export default Libros
