const fs = require('fs')

let votadas = {
    bd : '/data/movies.json',
    leerJSON : function() {
        let  movies = JSON.parse(fs.readFile(this.bd, 'utf-8'))
        return movies
    },
     ranking : function() {
       let movies = this.leerJSON();
       movies = movies.filter(function(movies) {
           return movies.vote_average > 7
       })
       return movies
    },
     totalPelis : function() {
         return this.ranking().length

     }
}

