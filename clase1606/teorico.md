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

    