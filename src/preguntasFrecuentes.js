//eii tamo de vuelta
const fs=require('fs')
let preguntasFrecuentes ={
    titulo:'Preguntas Frecuentes.',
    bd:'./data/faqs.json',
    leerJSON:function(){
        return JSON.parse(fs.readFileSync(this.bd,'utf-8'))
    },
    numeroPreguntas:function(){
        return this.leerJSON().total_faqs
    },
    preguntas:function(){
        let arrayPreguntas=[]
        this.leerJSON().faqs.forEach(faq => {
            arrayPreguntas.push(faq.faq_title)
        });
        return arrayPreguntas
    },
    respuestas:function(){
        let arrayRespuestas=[]
        this.leerJSON().faqs.forEach(faq=>{
            arrayRespuestas.push(faq.faq_answer)
        })
        return arrayRespuestas
    }
}
module.exports=preguntasFrecuentes
//console.log(preguntasFrecuentes.respuestas())