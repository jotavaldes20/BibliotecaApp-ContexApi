import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import DownloadIcon from "@material-ui/icons/CloudDownload";
import BotonDescarga from "@material-ui/core/Button";
import Divider from '@material-ui/core/Divider';
const contenido = ({ libro }) => {
  const {
    ID,
    title,
    author,
    language,
    pages,
    thumbnail,
    cover,
    content,
    url_download,
    publisher,
    publisher_date
  } = libro[0];
  const categories = libro[0].categories;
  const numbers = [1, 2, 3, 4, 5];
  return (
    <Container>
      <div>
        
        <Grid container spacing={8}>
          <Grid item xs={12} sm={4}>
            <Paper className="paper_contenido" elevation={0}>
              <img alt="imagen portada" src={cover} width="auto" />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
              <h2>{title}</h2>
              <h5>{author}</h5>
            <Paper className="paper_contenido" elevation={0}>
              <ul>  
                <li>
                  <strong>Detalles del Libro</strong>
                               
                </li>   
                <Divider  component="li" />           
                <li>
                  <strong>Publicado Por:</strong> {publisher}        
                </li> 
                <li>
                  <strong>Año:</strong><span> {publisher_date}      </span>
                </li> 
                <li>
                  <strong>Autor:</strong> {author}          
                </li>
                <li>
                  <strong>Idioma:</strong> {language}          
                </li>   
                <li>
                  <strong>Paginas:</strong> {pages}          
                </li>           
                <li>
                  <strong>Contenido</strong>
                  <Divider/>
                  <p align="justify">{content}</p>
                </li>
                <Divider component="li" />
                <strong>Categorias:</strong>
                {categories&& (<li>
                    <span> {categories.map((cat) => (cat.name)+", ")}</span>
                  </li>
                )}
                <Divider component="li" />
                <strong>Descargar:</strong>
                {console.log(url_download.substring(0, url_download.lastIndexOf("/") + 1)+"es/download/"+url_download.substring(url_download.lastIndexOf("/") + 1, url_download.length))
                }
                {url_download&& (<li>
                    <BotonDescarga  
                      variant="contained" 
                      href={url_download}
                      startIcon={<DownloadIcon/>} 
                      style={{
                        backgroundColor: "#21b6ae",
                      }}
                      target="_blank"
                    > Descargar</BotonDescarga>
                  </li>
                )}
              </ul>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default contenido;
