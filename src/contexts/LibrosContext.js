import React, { createContext, useState, useEffect, Children } from "react";
import { GetTopLibro, GetAllCategories, libroSearch, GetLibrosMostViewedByCategoryId } from "./../constants";
import axios from "axios"

//Creacion de Contexto para libros
export const LibrosContext = createContext();

const LibrosContextProvider = ({ children }) => {
  const [doneFetch, setDoneFetch] = useState(false);
  const [currentQueryLibro, setcurrentQueryLibro]=useState(""); //inicializamos query vacia
  const [text, setText] = useState("Libros mas Vistos");
  const [libros, setLibros] = useState([]);
  const [categorias, setCategorias] = useState([])

  //Hooks para manjer ciclo de vida, al inicicar carga la funcion topLibros y listar todas las categorias
  useEffect(() => getTopLibros(), []);
  useEffect(()=>getCategorias(),[] ) 
  //funcionar para listar las categorias
  const getCategorias=() => {
    axios.get(GetAllCategories())
     .then((res) =>{
         setDoneFetch(true)
         setCategorias(res.data)
     }).catch(
         (err) => console.error(err)
     )
  }
  const getByCategoriaId=(categoria_id, name) => {
    console.log("categoria_id",categoria_id)
    axios.get(GetLibrosMostViewedByCategoryId(categoria_id))
     .then((res) =>{
        console.log("libros categoria:",res.data)
        setDoneFetch(true);
        setText(GetLibrosMostViewedByCategoryId.length ? "Resultados categoria "+name+":" : "No hay Resultados");
        setLibros(res.data);
     }).catch(
         (err) => console.error(err)
     )
  }
  const getLibros = (query_libro) => {
    axios.get(libroSearch(query_libro))
      .then((res) => {
        setDoneFetch(true);
        setText(libroSearch.length ? "Resultados:" : "No hay Resultados");
        setLibros(res.data);
      })
      .catch((err) => console.error(err));
  };
  const getTopLibros = () => {
    axios.get(GetTopLibro())
      .then((res) => {
        setDoneFetch(true);
        setLibros(res.data);
      });
  };
  const validateQueryLibro = (
    e,
    query_libro = document
      .querySelector("#query_libro")
      .value.toLowerCase()
      .trim()
  ) => {
    if (e.type === "keypress" && e.key !== "Enter") return;
    const words = query_libro.match(/\w+/g);
    query_libro = words && words.join(" ");
    if (query_libro && query_libro !== currentQueryLibro) {
      setcurrentQueryLibro(query_libro);
      setDoneFetch(false);
      getLibros(query_libro);
    }
  };
  return (
    <LibrosContext.Provider value={{ doneFetch, text, libros, categorias, validateQueryLibro, getByCategoriaId }}>
      {children}
    </LibrosContext.Provider>
  );
};

export default LibrosContextProvider;
