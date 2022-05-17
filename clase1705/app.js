//importamos express
let express = require ('express');

//al ser una funcion, declaramos una variable, y le asignamos la funcion express
let app = express();


// console.log(app);

/**********************************************************************************/
//LEVANTANDO UN SERVIDOR WEB CON EXPRESS


// app.listen(3000, () => console.log('Servidor arriba'));

// app.get ('/', function(req, res){
//     res.send('Bienvenidos a mi pagina');
// });

/**********************************************************************************/
//ROUTE SYSTEM 

app.listen(3000, () => console.log('Esto fue existoso'));


app.get('/', function(req, res){
    res.send('Bienvenidos al sitio');
});

app.get('/contacto', function(req, res){
    res.send('Dejanos tu contacto');
});

// No es lo mismo .get que .post, podriamos tener la misma ruta con el mismo nombre pero debemos conocer como responde cada metodo
//
// app.post('/contacto', function(req, res){
//     res.send('Dejanos tu contacto');
// });

app.get('/un-array', function(req, res){
    res.send([1, 2, 3, 4]);
});

app.get('/un-objeto', function(req, res){
    res.send({nombre: 'Dario', edad: 34});
});

/**********************************************************************************/
