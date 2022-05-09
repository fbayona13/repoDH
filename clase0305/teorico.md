**CALLBACKS**
    Es una funcion que se pasa como parametro de otra funcion

    callback definido: la funcion la definimos antes y la usamos adentro de otra funcion
    callback anonimo: es una funcion que se define directamente adentro de otra funcion 

        funcionHijo (param1, param2) {}

        funcionPadre (param3, callback) {}

        console.log (funcionPadre(10, funcionHijo)),

    si lo vemos en un ejemplo seria algo asi: 

        let sumar = (num1, num2) => num1 + num2;
        let restar = (num1, num2) => num1 - num2;
        let multiplicar = (num1, num2) => num1 * num2;
        let dividir = (num1, num2) => num1 / num2;

        let calculadora = (num1, num2, operacion) => operacion(num1, num2);

        console.log (calculadora(50, 60, sumar)); // 110

**METODOS DE ARRAY II**
    Para empezar recordamos la sintaxis de un callback anonimo:
     
        function padre(function(){     
            //sentencia de codigo        //--> function() es el callback
            return a;
        });
    
    .map() --> Recorre un array y devuelve un nuevo array modificado (pero con la misma cantidad de elementos). Las modificaciones seran aquellas que tengamos en el callback.

        array.map(function (elemento){
            //Definimos las modificaciones que queremos aplicar sobre cada elemento del array
        });

    .filter() --> Recorre el array y filtra los elementos segun una condicion que exista en el callback. Devuelve un nuevo array solo con los elementos que hayan cumplido con esa condicion.

        array.filter(function(elemento){
            //Definimos la condicion que queremos aplicar como filtro para cada elemento del array
        });

    .reduce() --> Recorre el array y devuelve un unico valor, su finalidad es reducir el array. El callback va a recibir dos parametros: un acumulador y el elemento actual que este recorriendo. 

        array.reduce(function(acumulador, elemento){
            //Definimos el comportamiento que queremos implemetar sobre el acumulador y el elemento.
        });
    
    .forEach() --> Itera sobre el array. El callback recibe un solo parametro. No va a devolver nada.

        array.forEach(function(element){
            //Definimos el comportamiento que queremos implementar sobre cada elemento
        });
    
    .forOf()
    .forIn()

**OBJETO DATE**
    Es un objeto para mostrar fecha y tiempo en irl. 

        let fechaActual = new Date();

    Si instanciamos el objeto, cuando usemos metodos sobre la variable nos va a devolver la info instanciada en el objeto:

        let miCumple = new Date(1997, 04, 30);
    
    .getDay() --> cuando lo usamos sobre la variable nos va a devolver el numero que hace referencia al dia de la semana (para JS la semana empieza el domingo(0))

    .getDate() --> cuando lo usamos sobre la variable nos va a devolver el numero que hace referencia al dia del mes 

    .getMonth() --> cuando lo usamos sobre la variable nos va a devolver el numero que hace referencia al mes (para JS los meses empiezan 0 tambien, enero = 0).

    .getFullYear() --> cuando lo usamos sobre la variable nos va a devolver el numero que hace referencia el anio completo. 

**DESTRUCTURING**
    ASIGNACION POR DESTRUCTURACION. Nos permite extraer datos de arrays y objetos literales de una manera mas sencilla y facil de implementar. La desestructuracion no modifica el array u objeto, solo copia los valores de una forma practica y rapida

        let colores = ['rojo', 'azul', 'amarillo']; //para el caso de arrays
        let auto = {marca: 'Ford", modelo: 'camry', anio: 1998}; //para el caso de objetos

        //JS le va a asignar cada parametro del array colores a cada variable, respetando el orden original.
        let [color1, color2, color3] = colores; 

        //si sacamos una variable (color2), esta se saltea en el destructuring
        let [color1, , color3] = colores; //no muestra el azul
        
        //Parecido a los arrays, con la diferencia que aca podemos elegir las propiedades que queremos extraer
        let {marca, anio} = auto; 

**SPREAD OPERATOR Y REST PARAMETER** 
    OPERADOR DE PROPAGACION --> ...
    Nos va a permitir esparcir o "propagar" todos los elementos de un array dentro de otro array nuevo. 

        let frutasUno = ["banana", "manzana", "pera"];
        let frutasDos = ["melon", "ciruela", "naranja"];

        let todasFrutas = [...frutasUno, ...frutasDos];
        console.log(todasFrutas); //--> devuelve [banana, manzana, pera, melon, ciruela, naranja]

    Aplica tambien para los Objetos.

        let cursada = {
            curso : 'Full Stack',
            horario : 18,
            estaIniciada : true,
        }

        let alumno = {
            nombre : 'Facundo',
            email : 'email@email.com',

            ...cursada, //--> en este caso, hereda todo lo de cursada en alumnos
        }

    PARAMETRO REST
    Tambien lo podemos usar en la declaracion de parametros de una funcion. Esto le va a permitir a la funcion ejecutar (1, 2, ..., n) parametros. Indiferentemente de cuantos parametros se pasen, estos seran pasados por JS como Arrays.

        let variosParams (...params){};
    
