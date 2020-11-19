const fs = require('fs')

module.exports = {
    bd : '../data/movies.json',
    titulo: 'Más Votadas.',
    leerJSON : function() {
        return JSON.parse(fs.readFileSync(this.bd,'utf-8'));        
    },
    ranking : function() {
        let movies = this.leerJSON().movies;
        return movies.filter(peliculas => peliculas.vote_average >= 7)       
    },
    totalPelis : function() {
        return this.ranking().length
    },
    promedio : function() {
         let totalPelis = this.totalPelis()
         let pelis = this.ranking()
         let num = 0
        pelis.forEach(function(peli){
            num = num + peli.vote_average
        });
        return (num / totalPelis).toFixed(2)
        
    }
}