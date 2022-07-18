**BASE DE DATOS**
    Se guardan en un servidor, y necesitamos para poder accederla 

        nombre de la base de datos
        en que servidor esta 
        tipo de base de datos
        usuario 
        contrasena
        puerto --> cada web vive en un servidor.
    
    Sistema gestor de Base de Datos --> Es el sistema que utilizamos para manipular la base de datos, para el caso vamos a usar MySQL. El mas normal

    SQL --> vamos a usar tablas para organizar la informacion.

    Tablas --> donde vamos a guardar la informacion 

    Clave primaria --> clave (id) que va a tener cada uno de los elementos de las tablas 

**TABLAS**
    Modelamos la estructura de tablas que vamos a tener. Para esto vamos a usar DIAGRAMAS RELACIONALES.
    (Ver foto de diagramas relacionales)

**RELACIONES**
    Dentro de los diagramas relacionales vamos a tener los tipos de relaciones (uno a uno, uno a muchos, muchos a muchos), representados por los vectores entre tablas.

    Las claves foraneas --> son los id de otras tablas en nuestra tabla.

    Tambien tenemos las que son tablas intermedias o pivotes. Que representan un cruce entre un dato de una tabla con un dato de otra tabla. Por lo general tienen su propio id (PK) y los ids de las otras tablas (FK).

**TIPOS DE DATOS**
    Cada columna tiene un tipo de dato. SQL tiene 3 tipos de datos 

        numbers --> int, smallint, bigint, mediumint, tinyint, float, 
            Dentro de los numbers tenemos booleanos, pero lo recomendable es declarar simplemente un 1 / 0.

        text --> char[], varchar, text
        date --> date, time, datetime --> (yyyy-mm-dd)

    Cada uno de estos tienen diferentes pesos, por ende afectan a la eficiencia y velocidad de subida y bajada
    Tambien podemos declarar restricciones sobre las columnas (notnull, unique, default, auto_increment)

**CONSTRAINTS**
    O restricciones en espanol. Limitan el tipo de dato que reciben una tabla. 
    Son de suma importancia porque nos permiten validar el tipo de dato que entran en la columna. Mantener la integridad, precision y fidelidad.
    Si se viola la restriccion simplemente la informacion no va a entrar en la base de datos. 

        not null --> la casilla no puede estar vacia en esa columna particular. 
        unique --> no se pueden insertar dos valores iguales en esa columna. Evita redundancia de datos.
        primary key --> es un identificador unico para cada una de las filas de la tabla (es la columna ID).
        default --> suministrar un valor por defecto a una columna si es que falta. 
        auto_increment --> genera un numero unico y lo va aumentando automaticamente (se usa para el ID por lo general)
    
**CREATE, DROP, ALTER** 
    Nos permiten plasmar organizacion sobre nuestra base de datos

        Create --> crear una tabla desde 0
            CREATE TABLE 'nombre_tabla'

        Drop --> cual es la tabla a borrar (hay que tener cuidado, por si tiene claves foraneas)
            DROP TABLE 'nombre_tabla' 

        Alter --> modificar una tabla
            ADD --> agrega una columna 
            MODIFY --> modifica una columna
            DROP --> borra una columna
    
**FOREIGN KEYS**
    Es una constraint que permite a una columna de una tabla guarde como valor un dato particular que referencia a otra tabla. Conectandolas asi una con la otra. La foreign key de una tabla suele ser la primary key en la otra tabla.

    