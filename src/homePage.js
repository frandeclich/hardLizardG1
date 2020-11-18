const fs = require('fs') 

let homeData= {
    titulo:  "Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn.",
    bd : './data/movies.json',
    leerJSON : function(){
        return JSON.parse(fs.readFileSync(this.bd,'utf-8'));
    },
    totalDePeliculas: function(){
        return this.leerJSON().total_movies
    },
    listadoTitulos: function(){
        arrayDeTitulos=[] 
        this.leerJSON().movies.forEach(movie => {
            arrayDeTitulos.push(movie.title)
        });
        arrayDeTitulos.sort()
        return arrayDeTitulos
    }
}

module.exports=homeData

//console.log(homeData.listadoTitulos())