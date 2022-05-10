let autos = require ('./autos');

let concesionaria = {
    patente : function (){
        return autos.patente;
    },

    vendido : function (){
        return autos.vendido;
    },

    //find devuelve valor booleano 
    // buscarAuto : function (numPatente){
    //     let buscarPorPatente = autos.find(function (autos){
    //         if (autos.patente == numPatente){

    //             return autos;
    //         } else {

    //             return null;
    //         }
    //     });

    //     return buscarPorPatente;
    // },

    buscarAuto : function(numPatente){
        let buscarPorPatente = this.autos.find(auto => auto.patente === numPatente ? auto : undefined);
        
        if (buscarPorPatente == undefined){
            return null;
        } else {
            return buscarPorPatente;
        }

    },

    // venderAutos : function (numPatente){
    //     let autoVender = this.buscarAuto(numPatente);
    //     let cambioEstado = autos.map(autos => autos == autoVender ? Object({...autos, vendido: true}) : autos);

    //     return cambioEstado;
    // },

    venderAuto : function (numPatente){
        let autoVender = this.buscarAuto(numPatente);
        let cambioEstado = autos.filter(function (auto){
            if (auto == autoVender){
                return auto.vendido = true;
            }
        })

        return cambioEstado;
    },

    autosParaLaVenta : function (){
        let autosDisponibles = autos.filter(function (auto){
            return auto.vendido == false;
        })
        return autosDisponibles;
    },

    autosNuevos : function (){
        let autosKm = this.autosParaLaVenta();
        return autosKm.filter(auto => auto.km < 100)
    },


    autos : autos,
}

// console.log (concesionaria.patente);
// console.log (concesionaria.vendido);
// console.log (concesionaria.autos);
//console.log (concesionaria.venderAutos('JJK116'));
