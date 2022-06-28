**JSON**
    Java Script Object Notation --> Es un formato de texto (o cadena de texto) que se usa para compartir informacion entre diferentes sistemas.
    todos los lenguajes de programacion puede interpretarlos.
    Todo JSON se puede convertir a un Objeto o Array.

    METODOS: 

        .parse() --> recibe un JSON y lo convierte a Objeto/Array. De JSON a Objeto/Array

        .stringify() --> recibe un Objeto/Array y lo convierte en JSON. De Objeto/Array a JSON

    EJEMPLO 1:
        let amigos = ["Coco", "fran", "teo", "rety"];

        //Array a JSON
        let amigosJSON = JSON.stringify(amigos); // ["Coco", "fran", "teo", "rety"] como string 

        //JSON a Array 
        let amigosOriginal = JSON.parse(amigosJSON); // ["Coco", "fran", "teo", "rety"] como array

    EJEMPLO 2:
        let persona = {
            nombre : "Javier",
            edad : 26,
            domicilio : "calle falsa",
        }

        //Objeto a JSON
        let personaJSON = JSON.stringify(persona); // {nombre: Javier, edad: 26, domicilio: calle falsa} como string 

        //JSON a Objeto 
        let personaOriginal = JSON.parse(personaJSON); // {nombre: Javier, edad: 26, domicilio: calle falsa} como array

**METODOS STRING**
    Para JS un String es un Objeto, que tiene diversos metodos y propiedades. 

        METODOS:

            .length() --> devuelve longitud de una cadena de texto
            .indexOf() --> devuelve la posicion del caracter o el comienzo de la palabra, si no esta devuelve -1
            .slice() --> toma una porcion determinada de la cadena de texto

                .slice(param1, param2) // param1 -> donde comienza, param2 -> donde termina

            .trim() --> elimina los espacios que esten al principio y final del string
            .replace() --> reemplaza una parte del string por otra
            .split() --> si recibe como parametro un espacio, devuelve todos los valores en forma de array que esten divididos por espacios (palabras).
    
**OBJETOS LITERALES**
    Es una estructura de datos que puede contener propiedades y metodos.
    
        let objeto = {
            propiedad1 : valor,
            propiedad2 : valor,
            propiedad3 : valor,
        };

        console.log (objeto.propiedad1);

    Si una propiedad aloja como valor una funcion decimos que es un METODO del objeto

        let objeto = {
            propiedad1 : valor,
            propiedad2 : valor,
            propiedad3 : function(){
                return 'propiedad numero 3';
            },
        };

        console.log (objeto.propiedad3());

    Si queremos trabajar dentro del objeto, usando la palabra THIS hacemos referencia al objeto en si donde estamos parados.

        let objeto = {
            propiedad1 : valor,
            propiedad2 : valor,
            propiedad3 : function(){return 'Hola me llamo: ' + this.propiedad1;},
        };

        console.log (objeto.propiedad3());
    
    FUNCIONES CONSTRUCTORAS (CONSTRUCTORS)
    Los constructors nos permiten armar un molde y luego crear todos los objetos que necesitemos.

        (...)
        function Auto (marca, modelo){
            this.marca = marca;
            this.modelo = modelo;
        };

        let objeto = new Auto (BMW, 1945);

**ARROW FUNCTIONS**
    Son las mismas funciones escritas de otra forma mas compacta. Para ello se usa el operador arrow.

        let sumar = (n1, n2) => n1 + n2;

    Si recibe solo un parametro 

        let doble = numero => numero * 2;

    Para el caso de que lleve un return, tenemos que usar los {}

        let mostrarNombre = () => {return 'Mi nombre es Pipo'};
    
**IF TERNARIO Y SWITCH**
    el if ternario se escribe en una sola linea

        condicion ? expresion para el true : expresion para el false;

    siempre necesita una salida false, por ende si no queremos devolver nada usamos ' ';

        condicion ? expresion para el true : ' ';

    el switch nos permite tener una condicion y varias posibles salidas

        switch (condition){
            case:
            break:

            case:
            break:

            case:
            break:

            default:
        }
    
**REPASO FOR**
