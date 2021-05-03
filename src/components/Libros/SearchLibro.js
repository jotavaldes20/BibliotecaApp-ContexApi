import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const SearchLibro = ({ validateQueryLibro }) => (
  <Paper className="paper defaultPaper">
    <TextField
      id="query_libro"
      label="Libro"
      margin="normal"
      variant="outlined"
      onKeyPress={(e) => validateQueryLibro(e)}
    />
    <IconButton onClick={(e) => validateQueryLibro(e)}>
      <SearchIcon />
    </IconButton>
  </Paper>
);

export default SearchLibro;
