let autos = require ('./autos');
const fs = require ("fs");

let concesionaria = {
    patente : function (){
        return autos.patente;
    },

    vendido : function (){
        return autos.vendido;
    },

    buscarAuto : function (numPatente){
        let buscarPorPatente = autos.find(function (autos){
            if (autos.patente == numPatente){

                return autos;
            } else {

                return null;
            }
        });

        return buscarPorPatente;
    },

    venderAutos : function (numPatente){
        let autoVender = this.buscarAuto(numPatente);
        let cambioEstado = autos.map(autos => autos == autoVender ? Object({...autos, vendido: true}) : autos);

        return cambioEstado;
    },

    autos : autos,
}

// console.log (concesionaria.patente);
// console.log (concesionaria.vendido);
// console.log (concesionaria.autos);

console.log (concesionaria.venderAutos('APL123'));
