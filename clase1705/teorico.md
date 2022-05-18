**ARQUITECTURA CLIENTE-SERVIDOR**
    Es el modelo de comunicacion que vincula varios dispositivos (clientes) con un servidor a travez de una red (internet).

        cliente: es el dispositivo que realiza las peticiones de servicios y recursos a un servidor
        servidor: es el equipo que brinda servicios y recursos a los dispositivos conectados a una misma red. Es una computadora.
    
    Una misma computadora puede funcionar como cliente y servidor. Sirve para hacer pruebas.

    request / response --> Si a un navegador (el cliente) le escribimos la direccion de una pagina, le estamos pidiendo (request) al buscador que nos devuelva esa pagina. Entonces el servidor va a procesar el pedido y nos va a devolver la pagina (response) 

    javascript del lado del servidor --> backend.

**INTRODUCCION A HTTP**
    Hyper Text Transfer Protocol --> el protocolo cliente-servidor que sirve para gestionar la comunicacion entre dos maquinas conectadas a internet. Basicamente nos permite navegar a traves de direcciones www y enlaces.

        el protocolo permite la transferencia de informacion en la web a traves de las URI's (Uniform Resource Identifier). Las URI's estan compuestas de dos partes las URL's y las URN's.

        http://www.localhost:3000/un-path/de-recurso

            - http:// --> el protocolo
            - localhost --> host
            - 3000 --> puerto 
            - un-path/de-recurso --> path de recurso
    
    La informacion requerida por el cliente y el servidor, por protocolo viaja oculta en el Header.

    METODOS DE PETICION HTTP
    metodos = acciones. Son verbos que indican una accion determinada para un recurso determinado. Cada metodo implementa una funcionalidad diferente. 

        GET --> Solicitar un recurso especifico
        POST --> Enviar datos al servidor (es mas seguro que GET, se usa para loggers)
        PUT --> Parecido al POST, la diferencia esta en que reemplaza la informacion de un recurso
        PATCH --> Realiza modificaciones parciales en el servidor
        DELETE --> Borra un recurso presente en el servidor

    CODIGOS DE ESTADO HTTP 
    Cada vez que se hace un request, se emite un codigo de estado que indica el estado del response HTTP. Existen 5 tipos de response

        - 1-- respuesta informativa
        - 2-- respuesta exitosa
        - 3-- redirecciones
        - 4-- errores del cliente
        - 5-- errores del servidor
    
HTTPS --> es el protocolo HTTP mejorado. El servidor codifica la sesion con un certificado digital.


**INTRODUCCION A EXPRESS**
    Es un framework. Es una infraestructura para aplicaciones hechas en Node. Nos permite elaborar una aplicacion web y mobiles de manera rapida y sencilla.
    Para instalarlo en un proyecto, en la carpeta del proyecto:
        
        npm install express --save
    
    Ahora lo requerimos en nuestra entry point (app.js para el caso) y guardamos el resultado de la invocacion

        const express = require ('express');
        const app = express();
    
    Es en app donde van a estar disponibles todos los metodos de express.

    Un framework es un entorno de trabajo que trae resueltas una serie de tareas, automatizando asi el desarrollo de cualquier aplicacion.

**SERVIDORES WEB CON EXPRESS**
    Para levantar un servidor con express tenemos que usar el metodo listen 

        const express = require ('express');
        const app = express();
        app.listen(3000, () => {
            console.log ('Servidor corriendo');
        });

    Si ahora abriesemos localhost:3000 veriamos un error 'cannot get /', y es porque todavia no especificamos una ruta. Para resolverlo:

        app.get('/', (req, res) => {
            res.send ('Hola mundo');
        });
    
**INTRODUCCION A ROUTING Y RESPONSE**
    Route System --> Definir como responde nuestra aplicacion a los distintos request que hace un cliente.

        app.METHOD(PATH, HANDLER);
            - app --> variable que guarda la ejecucion de Express
            - METHOD --> es el metodo de HTTP que queremos atender 
            - PATH --> es un string que lleva el nombre de la ruta en si 
            - HANDLER --> callback, que sucede cuando accedemos a esa ruta
        
        ejemplo) app.get('/contact', function (req, res){res.send('Algo')});
            - el callback se encarga de que es lo que sucede una vez hecha la peticion del cliente
            - req --> es el pedido, es un objeto literal
            - res --> es la respuesta, es un objeto literal
            - {} --> la logica que va a manejar la ruta. Lo mas comun es armar la respuesta que va a ver el cliente en su navegador.

**ESTRUCTURA DE CARPETAS**
    Inicialmente empezamos con 2 carpetas: public y scr

        mkdir public src
            - mkdir --> para crear carpetas por terminal
            - src --> toda la logica de la aplicacion
            - public --> todos los recursos que vamos a usar (fotos, imagenes, fuentes, logos)
    
    dentro de public vamos a tener css y assets

        mkdir css assets
            - css --> estilos graficos y beautify
            - assets --> los recursos (fotos, imagenes, fuentes, logos)
    
    dentro de src vamos a tener views y index.js

        mkdir views
            - views --> distintas vistas html que vamos a tener 
    

    TRUCO_1)
    Vamos a hacer un script para la terminal. Para ahorrarnos el trabajo de escribir "node src/index.js"
    En package.json:

        "scripts": {
            "test": "node src/index.js"
        },

    Ahora solo por terminal tenemos que poner

        npm test
    

