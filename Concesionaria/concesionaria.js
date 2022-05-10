let autos = require ('./autos');
let persona = require ('./persona');


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

    // venderAuto : function (numPatente){
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

    listaDeVentas : function(){
        let precioVenta = [];
        autos.forEach(auto => auto.vendido == true ? precioVenta.push(auto.precio) : " ");

        return precioVenta;
    },

    totalDeVentas : function (){
        let ventas = this.listaDeVentas();
        let total = ventas.reduce((total, ventas) => total = total + ventas, 0);

        return total;
    },

    puedeComprar : function (auto, persona){
        let costoCuota = auto.precio / auto.cuotas;

        if (costoCuota > persona.capacidadDePagoEnCuotas || auto.precio > persona.capacidadDePagoTotal){
            
            return false;
        } else {
            
            return true;
        }
    },

    autosQuePuedeComprar : function(persona){
        let autosVenta = this.autosParaLaVenta();
        let opciones = autosVenta.filter (auto => this.puedeComprar(auto, persona));

        return opciones;
    },


    autos : autos,
    persona : persona,
}

// console.log (concesionaria.patente);
// console.log (concesionaria.vendido);
// console.log (concesionaria.autos);
console.log (concesionaria.puedeComprar());
