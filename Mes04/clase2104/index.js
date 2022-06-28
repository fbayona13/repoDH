let facuBayona = require ('./facuBayona');
let otraPers = require ('./otraPers');
let datos = [facuBayona, otraPers];

//creamos un for que va a leer el array de DATOS
for (let index = 0; index < datos.length; index++) {
    let persona = datos[index];

    //como cada dato del array DATO al mismo tiempo es un array, tenemos que mostrar la info de la PERSONA adecuada
    let text = 'Hola soy ' + persona[0] + ' disfruto ' + persona[1] + ' y soy de ' + persona[2];
    console.log (text);
}
