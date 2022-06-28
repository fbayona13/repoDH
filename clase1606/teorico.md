**INTRODUCCION A MVC**
    Modelo, Vista, Controlador --> es un patron de diseno. conformado por sus tres elementos
        patron de diseno --> conjuntos de reglas que definen la arquitectura de un sistema, es una forma de trabajo

        vistas --> la capa interfaz grafica con la que actua el cliente. La parte visual
        modelo --> relaciona los datos de la aplicacion. Usualmente se lo conoce como logica de negocio. Administrador de informacion de la base de datos
        controlador --> es el que responde a las acciones u eventos generadas en las vistas. El enlace entre vistas y modelos.
    
**CONTROLADORES**
    Los controladores tienen la responsabilidad de cumplir con los pedidos del cliente. Es una capa adicional que se suma a un aplicativo hecho con node para proveer escalabilidad y mayor control sobre el codigo. Adicional a esto permite tener ordenado el sistema y estable.

    1) Lo primero a hacer es crear dentro de nuestro proyecto una carpeta que se llame controllers. Dentro de esta carpeta vamos a tener un controlador por cada uno de los recursos que tiene nuestra aplicacion.
    Un controlador tambien es un modulo de Node.

        const controlador = {
            index: (req, res) => {
                res.sendFile ('funcion index para mostrar todo lo que hay'),
            }
            show: //mostrar detalle de un producto
            create: //enviar datos para agregar un producto
        };

        module.exports = controlador;
    
    2) Vincular el controlador en la hoja de ruta. Dentro del .js con las rutas deberiamos tener

        const controller = require ('../controller/Controller');
        router.get('/', controlador.index);

**RUTAS PARAMETRIZADAS**
    Supongamos que tenemos 1000 productos en un array, en vez de asignarles a cada uno un numero le asignamos una ruta parametrizada (basicamente seria que el navegador busque el producto por un paramentro)

        app.get('/productos/:id', (req, res) => {
            //codigo
        })
    
    Donde :id va a ser el parametro que vamos a usar para buscar. El parametro es obligatorio. 
    Para que el parametro sea optativo usamos un ? al final de la ruta.

    Por logica, si alguien busca el producto con id = 5 necesitariamos esa informacion para mostrar la pagina correspondiente. Eso lo logramos con el metodo REQ

        app.get('/productos/:id', (req, res) => {
            let idProducto = req.params.id
            res.send('elegiste el producto' + idProducto)
        })
        
    Para el caso de que acceder a una ruta fuera optativo

        app.get('/productos/:id/comentarios/:idComentario', (req, res) => {
            if (req.params.idComentario == undefined){

                res.send('elegiste el producto' + req.params.id);
            } else {

                res.send('elegiste el producto' + req.params.id + 'en el comentario ' + req.params.idComentario);
            }
        })
    
    params --> es un objeto literal de propiedad / valor donde propiedad va a ser el nombre del parametro que le hayamos dado en la ruta (para el caso id) y el valor el que diga realmente en la url

**SISTEMA ROUTES**
    Vamos a agregar una carpeta llamada routes que va a funcionar como enrutador de todo. 
    Adentro de la carpeta vamos a crear un archivo .js por cada recurso que queramos manejar.
        El recurso va a ser una seccion de la aplicacion web, que a su vez tendra varias rutas (por ejemplo la seccion de productos tendra ruta para detalle, modificar, crear, etc.)

    Es un modulo que vamos a exportar, y lo vamos a importar despues en el entrypoint (app.js)

        const express = require ('express');
        const router = express.Router();

        //Le tenemos que sacar el /productos porque ya lo definimos en app.use
        router.get('/:idProducto', (req, res){
            let idProducto = req.params.id
            res.send('elegiste el producto' + idProducto)
        })

        module.exports = router;
    
    El metodo router nos va a permitir crear rutas montables y desmontables en nuestra aplicacion. Modularizar el sistema de ruteo.
    Para usarlo en nuestro app.js tenemos hacer un use:

        const rutasProductos = require('./routes/productos.js');
        app.use('/productos', rutasProductos);
    
**EXPRESS-GENERATOR**
    Nos da una estructura de archivos para trabajar. Para usarlo

        npm install express-generator -g

        express myApp --ejs //myApp va a ser el nombre del proyecto

    Adentro de myApp 

        npm install 
    
    Para correrlo con esta estructura tenemos que hacer 

        nodemon bin/www // bin/www --> ejecuta el archivo

    Que es nodemon? Es una herramienta que nos permite monitorizar constantemente el servidor de Node.js. Cada vez que hagamos cambios en el codigo, nodemon se encargara de hacer los 'stops' y 'reloads' del servidor, para no hacerlo manualmente.
    