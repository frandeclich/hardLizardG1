let homePage = require('./homePage');
let enCartelera = require('./enCartelera');
let masVotadas = require('./masVotadas');
let sucursales = require('./sucursales');
let contacto = require('./contacto');
let preguntasFrecuentes = require('./preguntasFrecuentes');

let index = {
    homePage: function(res) {
        res.write(homePage.titulo)
        res.write('\n')
        res.write('\n\n')
        res.write('Total de peliculas en cartelera: ' + homePage.totalPelis())
        res.write('\n\n')
        res.write('--------------------------\n')
        res.write('Listado de Peliculas disponibles\n').toUpperCase()
        res.write('--------------------------')
        res.write('\n\n')
        
        let titleMovies = homePage.listadoTitulos();
        for (title of titleMovies) {
            res.write(title)
            res.write('\n')

        } 
        res.write('\n')
        res.end('Recorda que podes visitar las secciones:
        i. En Cartelera
        ii. Mas Votadas
        iii. Sucursales
        iv. Contacto
        v. Preguntas Frecuentes ')
    },