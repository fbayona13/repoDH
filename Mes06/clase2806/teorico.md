**QUE ES UN CRUD**
Es un acronimo para Create, Read, Update, Delete.
Es el proceso que nos permite crear, leer, actualizar y borrar registros de nuestra base de datos.
Lo vamos a hacer a traves del metodo HTTP.

**REPASO DE HTTP**
Los protocolos HTTP gestionan la informacion entre cliente y servidor.
Los metodos HTTP eran GET y POST.
Lo ideal es implementar un sistema de routeo.

        GET --> Las peticiones hechas con get solo deberian traer la informacion que le pedimos al servidor.
                Solo las rutas que usen el metodo get podran ser accedidas desde la URL o enlace.

        POST --> Las peticiones hechas con post solo podran enviar informacion al servidor (sirven para crear registros en la aplicacion).
                La informacion no puede ser accedida desde la URL o enlace, esta oculta.

        PUT --> Se usa para reemplazar la informacion de un registro ya presente en el servidor.

        DELETE --> Se usa para borrar la informacion de un registro ya presente en el servidor.

    Por lo general vamos a usar el ID de un registro que queramos modificar, eliminar, postear, o pedirle al servidor.
    Los formularios HTML no soportan los metodos PUT, PATCH, DELETE, por lo que en los frameworks tienen prestaciones para simularlos.

**PROCESAMIENTO GET**
    Cuando queremos mostrar informacion, o un enlace

        router.get('/', productController.mostrarTodos);
        router.get('/:id', productController.mostrarProductoPorId);
        router.get('/crear', productController.crearProducto);

            router.get --> la ruta solo va a tomar pedidos por get
            '/' --> parametro string del recurso que vamos a visitar
            productController.mostrarTodos --> callback de la peticion. Suele venir del controlador, donde vamos a definir la logica a implementar


    Query String --> es una cadena de consulta. Texto que contiene informacion dinamica que puede ser utilizada dentro de los controladores para consultar datos.

        https://amazon.es/autores?lang=es&keywords=borges

            el query string seria lang=es&keywords=borges
            inicia con ?
            los parametros se dividen con &

    Con el metodo GET podemos guardar los links en marcadores (permalinks). La url guarda la info necesaria para mostrar el resultado especifico.

    Como podemos acceder desde un controlador a la informacion presente en el query string?
        con una propiedad llamada REQ.QUERY

    En que caso usamos query string? En formularios que nos piden informacion. Por ende en el controlador tendriamos algo como

        search: function (req, res){
            let loQueBuscoElUsuario = req.query.search;
            res.send(loQueBuscoElUsuario);
            //Va a mostrar los datos que se obtengan por metodo get de un formulario con input name="search"
        }

**PROCESAMIENTO POST**
    Cuando queremos enviar informacion sensible.

        router.get('/crear', productController.crearProducto);
        router.post('/crear', productController.guardarProducto);

    Podemos tener el mismo nombre de ruta, sin embargo tienen funciones diferentes. Una se encargara de mostrar el producto nuevo (traerlo del servidor) y el otro de guardarlo (enviarlo al servidor).

    Como mandamos informacion al servidor con el metodo post? A travez de un formulario.

        <form action="/usuario/guardar" method="post"></form>
            action --> a donde va a mandar la informacion
            method --> como viajara la informacion

    En APP.JS, definimos estas dos lineas que deseamos capturar todo lo que venga de un formulario como objeto literal y a su vez convertir dicha data en JSON si asi lo queremos. Esto es si no estamos usando express-generator.

        app.use(express.urlencoded({ extended: false }));
        app.use(express.json());

    Dentro de request vamos a tener body, un objeto literal clave / valor que trae toda la informacion del formulario. El nombre de la clave sera el name dentro de un input. El valor sera lo que el cliente haya puesto en el campo.

        <input type="text" id="name" name="name">

**PROCESAMIENTO PUT / DELETE**
    Cuando queremos actualizar o eliminar un registro. Son muy parecidos al metodo POST.

        PUT --> nos permite mandar informacion de forma segura al servidor y ACTUALIZAR un registro
        Necesitamos una ruta GET para mostrar el registro que vamos a modificar (la cual llamamos editar generalmente)

            router.get('/:id/editar', usuariosController.editar);
            router.put('/:id/editar', usuariosController.actualizar);
    
    El method del form solo permite GET y POST, como podemos usar PUT y DELETE? Con la dependencia de node method-override

        npm install method-override --save
    
    y lo requerimos en APP.JS

        const methodOverride = require ('method-override');
        app.use(methodOverride('_method'));
    
    Con esto sobreescribimos el methodo del formulario para usar PUT / DELETE.
    Al final lo que tenemos que hacer en el formulario es agregar en action un query string

        <form action="/usuarios/../actualizar?_method=PUT" method="POST"></form>
    
    con eso le decimos que no importa el metodo, lo que nosotros estamos tratando de usar es un PUT para enviar la informacion.

        DELETE --> nos permite eliminar un registro de forma segura. Funciona de la misma manera que PUT
    





