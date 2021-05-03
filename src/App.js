import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Common/Header";
import LibrosContextProvider from "./contexts/LibrosContext";
import ContenidoLibrosContextProvider from "./contexts/ContenidoLibrosContext";
import Contenido from "./components/ContenidoLibros"
import Libros from "./components/Libros";
import NotFound from './components/NotFound'
import "./assets/css/styles.css";

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/">
        {/* HOC */}
        <LibrosContextProvider>
          <Libros />
        </LibrosContextProvider>
      </Route>
      <Route path="/ContenidoLibros/libro/:libro_id">
        {/* HOC */}
        <ContenidoLibrosContextProvider>
          <Contenido />
        </ContenidoLibrosContextProvider>
      </Route>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

export default App;
