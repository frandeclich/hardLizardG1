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
        res.write('Total de peliculas en cartelera: holaa ' + homePage.totalPelis())
        res.write('\n\n')
        res.write('--------------------------\n')
        res.write('Listado de Peliculas disponibles\n').toUpperCase()
        res.write('--------------------------')
        res.write('\n\n')
        res.end
        
        let titleMovies = homePage.listadoTitulos();
        for (title of titleMovies) {
            res.write(title)
            res.write('\n')

        } 
            res.write('\n')
            res.write('i. En Cartelera')
            res.write('ii. Mas Votadas')
            res.write('iii. Sucursales')
            res.write('iv. Contacto')
            res.write('v. Preguntas Frecuentes')
            res.write('\n\n')
            res.end

    },
    enCartelera: function(res) {
        res.write('En Cartelera')
        res.write('\n')
        res.write('\n\n')
        res.write('Total de peliculas en cartelera: ' + homePage.totalPelis())
        enCartelera.titulos()
        enCartelera.reseñas()
        res.write('\n\n')
        res.write('--------------------------\n')
        res.write('Listado de Peliculas disponibles\n').toUpperCase()
        res.write('--------------------------')
        res.write('\n\n')
        res.end
    }

