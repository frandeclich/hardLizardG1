const fs = require('fs') 

let carteleraData={
    titulo:"En Cartelera.",
    bd:'./data/movies.json',
    leerJSON:function(){
        return JSON.parse(fs.readFileSync(this.bd,'utf-8'))
    },
    numeroPeliculas:function(){
        return this.leerJSON().total_movies
    },
    titulos:function(){
        arrayT=[]
        this.leerJSON().movies.forEach(movie => {
            arrayT.push(movie.title)
        });
        return arrayT
    },
    reseñas:function(){
        arrayR=[]
        this.leerJSON().movies.forEach(movie => {
            arrayR.push(movie.overview)
        });
        return arrayR
    }
}
module.exports=carteleraData
//console.log(carteleraData.reseñas())
