import React, { useState, useEffect, createContext} from 'react'; 
import { GetLibroById } from './../constants';
import axios from 'axios';

//trabajar con el contexto, para exportarlo
export const ContenidoLibrosContext=createContext();

const ContenidoLibrosProvider = ({children}) => {
    const libro_id = window.location.pathname.split('/')[3];
    const [doneFetchLibro, setDoneFetchLibro] = useState(false);
    const [libro, setLibro] = useState([]);

    useEffect(() =>getLibro(libro_id),[libro_id])
    const getLibro=libro_id =>{
        axios( GetLibroById(libro_id))
         .then(res =>{
            setDoneFetchLibro(true)
             setLibro(res.data)
         }).catch((err)=>console.log(err))
    }
    return (
        <ContenidoLibrosContext.Provider value={{doneFetchLibro, libro}}>
            { children }
        </ContenidoLibrosContext.Provider>
    )
}

export default ContenidoLibrosProvider
