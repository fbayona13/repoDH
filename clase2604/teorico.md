REPASO DE FUNCIONES, CONDICIONALES Y ARRAYS

**variables**
    var --> vamos a poder cambiar el valor de la variable si usamos el mismo nombre
    let --> va a saltar un error cuando tratemos de usar variables con el mismo nombre
    const --> nunca se le va a poder cambiar el valor una vez reservado

**tipos de datos**
    number --> numero entero o decimal;
    strings --> cadena de textos/caracteres;
    bools --> verdadero o falso;

    objetos --> coleccion de datos;
        let persona = {
            nombre = 'javier',
            edad = 34,
            soltero = true,
        }
    array --> coleccion de datos
        let persona = [Nacho, Fer, Facu];

    datos que determinan estados en JS
    NaN --> not a number
    Null --> valor desconocido o vacio
    Undefined --> ausencia de valor

    funcion nativa Number()--> le podemos pasar un string con un numero y nos devolvera el numero
        let unNuevoNumero = Number('50');

    funcion nativa parseInt()--> nos devuelve el valor entero de un dato que le pasemos por parametro
        let valorEntero = parseInt('167.52');

**operadores**
DE ASIGNACIÓN
    El operador "=" sirve para asignar el valor 40 a una variable llamada "edad"

        var edad = 40

ARITMÉTICOS
    Nos permiten hacer operaciones matemáticas

        10 + 15 //---> Suma
        10 - 15 //---> Resta
        10 * 15 //---> Multiplicación
        10 / 15 //---> División
        15++    //---> Incremento de uno en uno: 15 + 1
        15--    //---> Decremento de uno en uno: 15 - 1
        15 % 5  //---> Módulo. El resto obtenido de dividir 15 entre 5: 0
        15 % 2  //---> Módulo. El resto obtenido de dividir 15 entre 2: 1


DE COMPARACIÓN SIMPLE

        10 == 15 //---> Igualdad
        10 != 15 //---> Desigualdad

DE COMPARACIÓN ESTRICTA

        10 === 15 //---> Estrictamente igual (mismo valor y tipo de dato)
        10 !== 15 //---> Compara si los operandos no son iguales y/o no del mismo tipo

OPERADORES RELACIONALES

        15 > 10  //---> Mayor que...
        15 >= 10  //---> Mayor igual que...
        15 < 10  //---> Menor que...
        15 <= 10  //---> Menor igual que...

LÓGICOS
    Permiten combinar valores booleanos y su resultado a la vez también es un booleano

    && Todos sus valores deben evaluar como TRUE
        (10 > 15) && (10 != 20) //---> 

    || (OR) Solo un valor debe evaluar como TRUE para que la expresión sea TRUE

        (10 > 15) || (10 != 20) //---> TRUE porque 10 != 20 es verdadero

    ! (NOT) - Niega la condición, TRUE pasa a FALSE y FALSE a TRUE

        let color = 'Verde';
        let noEsRojo = !(color == 'Rojo'); //---> Esto daría FALSE, pero como está negado, da TRUE

**funciones** 
    estructura basica
        function sumar (a, b){
            return a + b;
        }
        sumar (50, 40);

    un scope es el alcance que tiene una variable, es decir desde donde podemos acceder a ella. En JS los 
    scopes son definidos por las funciones.

        scope local --> cuando declaramos una variable dentro de una funcion, esta variable vive dentro de la funcion nomas
        scope global --> cuando declaramos una variable fuera de cualquier funcion, podemos usarla y accederla desde cualquier lado

**condicionales**
    if / else / if-else

**arrays**
**metodos de array**
    cuando una funcion le pertenece a un objeto (el array), esta funcion se pasa a llamar metodo

    .push() --> permite agregar uno o mas elementos al array (al final)
    .unshift() --> permite agregar uno o mas elementos al array (al principio)
    .pop() --> permite eliminar un elemento del array (el ultimo)
    .shift() --> permite eliminar un elemento del array (el primero)
    .join() --> une todos los elementos del array utilizando el separados que especifiquemos 
        let dias = [Lunes, Martes, Miercoles];
        let separadosPorComa = dias.join() // 'Lunes, Martes, Miercoles'
    
    .indexOf() --> busca en el array el elemento que recibe como parametro, si lo encuentra devuelve la posicion, sino -1
    .lastIndexOf() --> empieza buscando por el final del array (de atras a adelante)
    .includes() --> idem a indexOf(), devuelve un valor booleano si encuentra o no
    