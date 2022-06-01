**INTRODUCCION A FLEXBOX**
    Es una metodologia de CSS que permite maquetear un sitio web utilizando una estructura de filas y columnas.
    Lo tenemos que declarar en el contenedor padre de los elementos que queramos disponer de esta manera. Puede haber excepciones.
    En el elemento contenedor

        .contenedor{
            display: flex;
        }

    Esto lo que hara sera mostrar a todos los elementos hijos dentro del contenedor como flex items, uno al lado del otro. Es indistinto si tiene un width determinado.
    Lo hace asi por la propiedad flex-wrap: nowrap. Para poder cambiarlo y que conserven el width, debemos cambiar el valor a wrap.

        .contenedor{
            display: flex;
            flex-wrap: wrap;
            flex-wrap: nowrap;
            flex-wrap: wrap-reverse;
        }
    
**EJES**
    Nos guiamos por los ejes. 

        Main axis --> x //L-R
        Cross axis --> y //T-B
    
    Dentro de la hoja de estilos .CSS tenemos que agregarle la propiedad al elemento

        elemeto{
            flex-direction: row; //default
            flex-direction: column; //main axis pasa a tener la posicion de cross axis
            flex-direction: row-reverse; //main axis empieza de R-L
            flex-direction: column-reverse; //main axis pasa a tener la posicion de cross axis y empieza de R-L
        }
    
    Flexbox nos da dos propiedades para alinear los elementos

        main axis --> justify-content
            alinea todos los items a lo largo del main axis

        cross axis --> align-items
            alinea todos los items a lo larfo del cross axis
    
        justify-content: flex-start; //se alinean respecto al inicio del main axis
        justify-content: flex-end; //se alinean respecto al final del main axis
        justify-content: flex-center; //se alinean al centro del main axis
        justify-content: space-between; //se distribuyen de manera uniforme
        justify-content: space-arround; //se distribuyen de de manera uniforme, incluyendo los espacios laterales

        align-items: stretch; //se ajustan para abarcar todo el contenedor 
        align-items: flex-start; //se alinean al inicio del cross axis
        align-items: flex-end; //se alinean al final del cross axis
        align-items: center; //se alinean al centro del cross axis
        
**ESTRUCTURA BASICA FLEXBOX**
    --> fue una mezcla de todo lo que vimos hasta recien <--


**LOS ITEMS**
    Los elementos que van a adoptar las propiedades de Flex los llamamos items.
    Ahora vamos a ver propiedades que podemos aplicar directamente sobre los items (elementos)

        order--> nos permite cambiar el orden de ubicacion de un item
            order: -1; //el default esta en 0
        
        align-self--> es lo mismo que align-item, pero afectara solamente al item donde se encuentre.
            align-self: flex-end;
        
        flex-grow--> le permite al item crecer en caso de disponer espacio libre en el contenedor
            flex-grow: 1; //si dos items tienen valor 1, abarcaran el espacio libre en partes iguales


microdesafio paso 2
wrap
basis 100 mobile
basis 50 tablet
basis 25 desktop