const fs = require('fs')

let sucursales = {
    titulo: "Nuestras Salas",
    bd: './data/theaters.json',
    leerJSON : function(){
        return JSON.parse(fs.readFileSync(this.bd,'utf-8'));
    },
    numeroSalas:function(){
        return this.leerJSON().total_theaters
    },
    salas:function(){
        let arraySalas=[]
        this.leerJSON().theaters.forEach(theater => {
            arraySalas.push(theater.name)
        });
        return arraySalas
    },
    direccion:function(){
        let arrayDireccion=[]
        this.leerJSON().theaters.forEach(theater =>{
            arrayDireccion.push(theater.address)
        });
        return arrayDireccion
    },
    descripcion:function(){
        let arrayDescripcion = []
        this.leerJSON().theaters.forEach(theater =>{
            arrayDescripcion.push(theater.description)
        });
        return arrayDescripcion
    }
}
module.exports=sucursales
//console.log(sucursales.descripcion())
/*i. Nombre (nombre de la sala)
ii. Dirección (ubicación de la sala)
iii. Descripción (descripción de la sala)*/
