**PROMESAS**
Partes del codigo que no sabemos cuando van a ser ejecutadas.
JS al ser asincrono, no espera a que la informacion venga de la BD, puede seguir con el resto del codigo.

        buscarProducto(id)
            .then(function(){
                //con el then solo se va a ejecutar cuando el pedido asincronico haya terminado
            })

            .then(function(){
                //permite la concatenacion de promesas
            })

            .catch(function(err){
                console.log(err)
            })

    Cuando haya un error, tenemos que usar el .catch()

**SEQUELIZE**  
 Es un ORM (object relational mapped) que nos ayuda a conectarnos e interactuar con la BD. Basicamente nos va a permitir usar lenguaje JS para interactuar con la BD

        npm install sequelize-cli -g
        npm install sequelize
        npm install --save mysql2

    Para el lado de la configuracion. En la raiz de nuestra app tenemos que crear un archivo .sequelizerc. En este archivo vamos a decirle a sequelize donde tenemos las carpetas relacionadas a nuestra BD.

        const {resolve} = require('path');

        module.exports = {
            config: resolve('./database/config', 'config.js'),
            'models-path': resolve('./database/models'),
            'seeder-path': resolve('./database/seeder'),
            'migrations-path': resolve('./database/migrations'),
        }

    Recien ahora inicializamos sequelize. Con ella se va a crear la carpeta database

        sequelize init

    Ahora tenemos que configurar database/config/config.js
    database/models/index.js --> la variable db es la que vamos a usar para hacer consultas

**MODELOS**
Tenemos que definir la capa de modelo --> la representacion de los datos. Los datos puros de la aplicacion.
No contienen logica que describa como presentarse los datos a un usuario
El modelo hace una representacion de la tabla.

        Los nombres de los modelos son en UpperCamelCase y singular

    Suponiendo que tenemos models/Usuario.js (aplica a todos los modelos)

        module.exports = (sequelize, DataTypes) => {

            let alias = 'Usuarios';

            let cols = {

                id: {
                    autoIncrement: true,
                    primaryKey: true,
                    type: DataTypes.INTEGER,
                },

                nombre: {
                    allowNull: false,
                    type: DataTypes.STRING,
                },

            };

            let config= {
                tableName: 'usuarios', //No seria necesario por lo general
                timestamp: false, //seguimiento de creacion y actualizacion de los registros. Si no los tiene lo dejamos en false
            };

            const Usuario = sequelize.define(alias, cols, config);
            return Usuario;
        }

    El metodo define() nos permite definir asignaciones entre un modelo y una tabla.
    define(alias, cols, config) donde
        alias --> el nombre de la tabla. Identifica al modelo
        cols --> columnas de la base de datos. Es un objeto con la configuracion de las columnas de la BD
        config --> la configuracion de cada columna. Es un objeto con las configuraciones adicionales

    timestamps --> Son parte del registro. Son campos que guardan la fecha de creacion y ultima edicion. No son necesarios, por eso se setea como false, pero las tablas suelen tenerlos y forman parte del estandar.

        nombre: {
            allowNull: false,
            type: DataTypes.STRING,

            createdAt: {
                type: DataTypes.DATE,
            },
            updatedAt: {
                type: DataTypes.DATE,
            },
        },

**FINDALL / FINDBYPK / FINDON**
    Find va a buscar dentro de la BD, es el equivalente al SELECT.

        const Peliculas = require('model/peliculas.model.js');

    findAll() --> va a buscar todas los registros de Peliculas

        db.Peliculas.findAll() 
            .then(function(peliculas){
                res.render('listadoPeliculas', {peliculas: peliculas})
            })

    findByPk() --> va a buscar los registros por ID(PK), que si lo usamos con req.params.id podemos definir la ruta parametrizada de detalles

        db.Peliculas.findByPk(req.params.id) 
            .then(function(pelicula){
                res.render('detallePelicula', {pelicula: pelicula})
            })

    findOne() --> va a buscar el registro que coincida con los atributos indicados en el objeto literal que recibe el metodo

        db.Peliculas.findOne({
            where: {
                name: 'Tony',
            },
        }).then(function(pelicula){
                res.render('La pelicula', {pelicula: pelicula})
            })
            
    
**WHERE / OPERADORES**
    
    WHERE

        db.Peliculas.findOne({
            where: {
                name: 'Tony',
            },
        }).then();
    
    LIKE
    
        db.Peliculas.findOne({
            where: {
                rating: {[db.Sequelize.Op.like] : 8}
                rating: {[db.Sequelize.Op.lt] : 8}
                rating: {[db.Sequelize.Op.gt] : 8}
                rating: {[db.Sequelize.Op.lte] : 8}
            },
        }).then();


**ORDER / LIMIT**

    ORDER

        db.Peliculas.findOne({
            order: [
                ['precio', 'ASC']
                ['titulo', 'DESC']
            ],
        }).then();

    LIMIT

        db.Peliculas.findOne({
            limit: 5,
        }).then();

    OFFSET

        db.Peliculas.findOne({
            offset: 5,
        }).then();


**CUADRO MACHETE**

    |   SQL    |  JavaScript              |
    |----------|:------------------------:|
    |  SELECT  | find                     |
    |  WHERE   | es lo mismo que SQL      |
    |  LIKE    | [db.Sequelize.Op.like]   |
    |  ORDER   | es lo mismo que SQL      |
    |  LIMIT   | es lo mismo que SQL      |
    |  OFFSET  | es lo mismo que SQL      |