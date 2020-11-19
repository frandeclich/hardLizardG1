let homePage = require('./homePage');
let enCartelera = require('./enCartelera');
let masVotadas = require('./masVotadas');
let sucursales = require('./sucursales');
let contacto = require('./contacto');
let preguntasFrecuentes = require('./preguntasFrecuentes');

module.exports = {
    homePage: function(req,res) {
        res.write(homePage.titulo)
        res.write('\n')
        res.write('\n\n')
        res.write('Total de peliculas en cartelera: holaa ' + homePage.totalDePeliculas())
        res.write('\n\n')
        res.write('--------------------------\n')
        
        res.write('--------------------------')
        res.write('\n\n')
        
        
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
            res.end()

    },

    enCartelera: function(req,res) {
        res.write('En Cartelera')
        res.write('\n')
        res.write('\n\n')
        res.write('Total de peliculas en cartelera: ' + homePage.totalDePeliculas())
        res.write('holaa ' + enCartelera.titulos())
        res.write('holaa ' + enCartelera.reseñas())
        res.write('\n\n')
        res.write('--------------------------\n')
        
        res.write('--------------------------')
        res.write('\n\n')
        res.end()
    },
}
