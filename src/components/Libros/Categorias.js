import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ToggleButton from "@material-ui/lab/ToggleButton";

const Categorias = ({categorias, getByCategoriaId}) => {

      return (
        <Grid item xs={12}>
          <Paper className="paper_categoria">
            {categorias.map((categoria) => {
              const { category_id, name,nicename } = categoria;
              return (
                <ToggleButton
                  key={category_id}
                  id={category_id}
                  value={name}
                  onClick={() => getByCategoriaId(category_id, name)}
                >
                  {name}
                </ToggleButton>
              );
            })}
          </Paper>
        </Grid>
      );
    };

export default Categorias
