// let sumar = (num1, num2) => num1 + num2;
// let restar = (num1, num2) => num1 - num2;
// let multiplicar = (num1, num2) => num1 * num2;
// let dividir = (num1, num2) => num1 / num2;

// let calculadora = (num1, num2, operacion) => operacion(num1, num2);

// console.log (calculadora(50, 60, sumar));

/*************************************************************************** */

// function agregarHttp(url) {
//     return 'http://' + url;
// }

// function procesar(urlIncompletas, agregarHttp){
//     let urlCompletas = [];
//     for (let i = 0; i < urlIncompletas.length; i++) {
//         urlCompletas.push(agregarHttp(urlIncompletas[i]));
//     }

//     return urlCompletas;
// }


// let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)
//   console.log(urlCompletas); // imprime [ 'http://www.google.com', 'http://www.yahoo.com' ]

  
/*************************************************************************** */

let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

// let aprobados = estudiantes.filter(estudiantes => estudiantes.aprobado == true);

// let desaprobados = estudiantes.filter(estudiantes => estudiantes.aprobado == false);

// Otra forma de hacerlo
// let aprobados = estudiantes.filter(function(apr){
//     if (apr.aprobado == true){
//       return estudiantes;
//     }
//     });

// console.log(aprobados);
// console.log(desaprobados);

  
/*************************************************************************** */

// let horariosPartida = [12, 14, 18, 21];

// let horariosAtrasados = horariosPartida.map (horariosPartida => horariosPartida - 1);

// console.log (horariosAtrasados);

/*************************************************************************** */

// let vueltas = [5, 8, 12, 3, 22]

// let totalVueltas = vueltas.reduce((estado, vueltas) => estado + vueltas);

// console.log(totalVueltas);

/*************************************************************************** */

// let listaDeSuperMercado = [
//     'Bife de chorizo', 
//     'Coca Cola', 
//     'Bananas', 
//     'Lechuga', 
//     'Chimichurri', 
//     'Lata de tomates', 
//     'Arvejas', 
//     'Cereales', 
//     'Pechuga de pollo', 
//     'Leche'
// ];

// listaDeSuperMercado.forEach(item => console.log(item));

/*************************************************************************** */