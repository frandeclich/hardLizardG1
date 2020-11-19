let homePage = require('./homePage');
let enCartelera = require('./enCartelera');
let cartelera = enCartelera.leerJSON();
let masVotadas = require('./masVotadas');
let sucursales = require('./sucursales');
let contacto = require('./contacto');
let preguntasFrecuentes = require('./preguntasFrecuentes');

module.exports = {
    homePage: function(req,res) {
        res.write(homePage.titulo)
        res.write('\n')
        res.write('\n\n')
        res.write('Total de peliculas en cartelera: ' + homePage.totalDePeliculas())
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
        res.write('Recordá que podés visitar las secciones:\n')
        res.write('i. En Cartelera\n')
        res.write('ii. Mas Votadas\n')            
        res.write('iii. Sucursales\n')
        res.write('iv. Contacto\n')
        res.write('v. Preguntas Frecuentes\n')
        res.write('\n\n')
        res.end()
    },

    enCartelera: function(req,res) {
        res.write(enCartelera.titulo)
        res.write('\n')
        res.write('\n\n')
        res.write('Total de peliculas en cartelera: ' + homePage.totalDePeliculas())
        res.write('\n')
       /*  cartelera.movies.forEach(a => {
            res.write('titulos: ' + a.title + '\n' +'reseñas: ' + a.overview + '\n\n' )
        }); */
        function titulosYReseñas(){
            for(let i=0;i<enCartelera.titulos().length;i++){
                res.write(`${i+1}.\ni. Título: ${enCartelera.titulos()[i]}\nii. Reseña: ${enCartelera.reseñas()[i]}\n\n`)
            }
        }
        titulosYReseñas()
        res.write('\n\n')
        //res.write(´${enCartelera.titulos()}\n´)
        res.write('\n\n')
        res.write('--------------------------\n')            
        res.write('\n\n')
        //res.write(enCartelera.reseñas())  
        res.end()
    },
    respuesta:function(req,res){
        res.write(`Te diría ERROR 404 not found pero mejor te digo así cortísima que no pongas ${req.url} en la barrita de búsqueda.\nNos vemoos.`)
        res.end()
    }
    
}
