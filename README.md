# BibliotecaApp
### `Api Utilizada`

Se utilizo una Api de codigo abierto de catalogos Bibliograficos
OpenLibra [https://openlibra.com/es/page/public-api](https://openlibra.com/es/page/public-api) 

### Dependencias Necesarias para el proyecto

A continuación se detallas los package instaladas para la aplicación:
Dependecias de material-ui
    @material-ui/core   version: ^4.11.4
    @material-ui/icons  version: ^4.11.2
    @material-ui/lab    version: ^4.0.0-alpha.58

AXIOS, Dependecia para la realizacion de solicitudes al servidor de la API
    axios version: ^0.21.1

Dependecias react
    react               version: "^17.0.2"
    "react-dom"         version: "^17.0.2"
    "react-router-dom"  version: "^5.2.0"
    "react-scripts"     version: "4.0.3"
### `Patron de arquitectura de contexto`

Se utilizo el patron de arquitectura de contextos, en la cual se aplico un patron de diseño Provider donde se hace uso de los conceptos  Hight Order Component y del Context API de React.
    
## Patros de diseño
Se utilizo patron de diseño provider, para disponibliza los contextos de Libros y Contenido.
Estos son consumidos por los compoennetes Libros que a su vez renderiza las propiedades a su componente hijo que es Libro

Se crearon 2 contextos
    1.- LibrosContexts
    2.- ContenidoLibrosContext
En estos contextos se disponibiliza las funcionalidades necesarios para que los hijos que consuman puedan hacer uso de aquello.

En la mayoria de los compoenentes se pasa la data proveniente de las llamada de la Api para luego estas ser destructuradas para su manejo y hacer posible la visualizacion de los dato

### `Api Utilizada`
Css Gradientes [https://webgradients.com/](https://webgradients.com/) 

