//para habilitar CORS si fuese necesario
//const cors_anywhere = 'https://cors-anywhere.herokuapp.com/';
//base url de Librearia openlibra
const base_url = 'https://www.etnassoft.com/api/v1/'
//todas las categorias
const all_categories = 'get/?get_categories=all'
//libros mas vistos por categoria id
const libro_categoriaid='get/?category_id='
const libro_byId_search='get/?id='
const libro_search='get/?keyword='
const topLibros='get/?num_items=10&criteria=most_viewed'
const criterio_most_viewed='&criteria=most_viewed'

export const GetAllCategories= () => `${ base_url }${all_categories}`
export const GetLibrosMostViewedByCategoryId= category_id => `${ base_url }${ libro_categoriaid }${ category_id }${ criterio_most_viewed }`
export const libroSearch = query_libro=> `${ base_url }${ libro_search }${ query_libro }${ criterio_most_viewed }`
export const GetTopLibro= () => `${ base_url }${topLibros}`
export const GetLibroById= libro_id =>`${ base_url }${ libro_byId_search }${libro_id}`