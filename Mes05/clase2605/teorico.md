**MODELO DE CAJA (BOX MODEL)**
    Hace referencia a los comportamientos que toma un elemento determinado dependiendo de las propiedades que lo afecten, y si son elementos de linea o bloque.
    Cualquier elemento de HTML poseera siempre 4 costados:

        Superior
        Lateral derecho
        Inferior
        Lateral izquierdo
    
    PROPIEDADES DEL BOX MODEL 

        display --> permite cambiar los comportamientos originales de los elementos de linea y bloque 

            block --> convierte un elemento de linea en un elemento de bloque 
            inline --> convierte un elemento de bloque en un elemento de linea (no se recomienda)
            inline-block --> convierte un elemento de bloque en un elemento de linea, pero con propiedades adicionales de elementos de bloque 
        
        (solo cuando sean elementos de bloque o semibloque)

            width --> permite asignar ancho a un elemento (px, %)
            height --> permite asignar alto a un elemento (px, %)
            padding --> permite asignar un espacio de separacion entre el contenido del elemento y los costados que lo rodean (px)
                padding-top
                padding-right
                padding-bottom
                padding-left
            
            border --> permite asignar una linea decorativa en el contorno del elemento. requiere 3 param (width, style, color)
                por ejemplo) border: 5px solid red;

            margin --> permite asignar los margenes a un elemento. Es el espacio entre el elemento y el resto de elementos. Parecido al padding
                margin-top
                margin-right 
                margin-bottom
                margin-left

                margin: auto;
            
            box-sizing --> permite configurar el valor border-box, evita que el elemento se amplie mas alla del width y height.

                Se usa un selector universal para simplificar el trabajo en css, se escribe asi:
                *{
                    box-sizing : border-box;
                }

**VIEWPORT**
    La etiqueta <meta></meta> viewport da al browser instrucciones de como se debe dimensionar y escalar la pagina web antes de cargarse (el area visible de nuestra pagina web). Primer paso para que el sitio sea RESPONSIVE.

        <meta name="viewport" content="width=device-width, initial-scale=1">
            name --> nos permite usar la etiqueta meta para configurar el viewport
            content --> nos permite configurar width (ancho contenido = ancho dispositivo)
            initial-scale --> configura la escala inicial, zoomin
    
**MEDIDAS RELATIVAS**
    Son aquellas que tienen en cuenta el contexto donde se encuentran.
    Segun de que medida estemos hablando, el numero que pongamos sera relativo a:

        el contenedor padre
        el tamanio de la fuente del sitio
        el tamanio de la fuente del contenedor padre
        el tamanio del viewport
    
    PORCENTAJES
    Cualquier medida expresada en porcentaje siempre estara relacionada con la medida del elemento padre que la contiene.
    No usar para el alto de un elemento.

        .elementoContenedor {width: 300px};
        .elementoInterior {width: 30%};
    
    EM / REM
    Los em son siempre relativos al elemento padre. Tomaran como valor de referencia la propiedad font-size (por defecto es 16px).

        p{font-size: 1.5em} // 16px * 1.5 = 24px

    Podemos asignarle otro valor a font-size, y despues este sera tomado en cuenta en el elemento. Tambien podemos usar em cuando queremos que las funciones varien segun el tamano de las fuentes.

        p{
            font-size: 20px;
            line-height: 2em;
            padding: 1.5em;
        }
    
    Los rem toman como valor base el tamano del font-size del elemento HTML. Por lo que este no modifica elementos hijos y no se ve afectado por elementos padres. Se recomienda usar REM
    padding margin font-size border box-shadow --> recomendados para usar REM y EM

    VW / VH
    Como vimos antes, el viewport es el espacio visible que tiene el navegador para mostrar el sitio web. Por lo que podemos usar medidas relativas al espacio para determinar el tamano de ciertos elementos. Se expresan como porcentajes del total, osea que 50vh sera equivalente al 50% del alto disponible en el viewport.

        VW --> viewport width, es relativo al ancho total del viewport
        VH --> viewport height, es relativo al alto total del viewport

**MEDIA QUERIES**
    Son un conjunto de reglas de CSS que nos permiten cambiar los estilos de los elementos en funcion de las caracteristicas del dispositivo que este visualizando nuestro sitio.
    Es una regla de estilo que va en la hoja de estilos y que contendra un conjunto de otras reglas que se aplicaran si y solo si se cumlple una condicion determinada.
    
        @media(condicion){
            /* reglas de estilo */
        }
    
    Se recomienda escribirlas al final de la hoja de estilos.
    Las medias queries nos permiten optar entre 

        mobile first (recomendado) --> desarrollar primero la version mobil y a partir de esta adaptarla a los demas dispositivos
        mobile last --> viceversa a la anterior
    
    Si pensamos en el camino de mobile first, nuestras queries cambian un poco

        Desde este ancho, para arriba
        @media (min-width: Npx){
            /* mis reglas de estilo */
        }

        Desde este ancho, para abajo
        @media (max-width: Npx){
            /* mis reglas de estilo */
        }

        Desde este ancho, para arriba y ademas que el dispositivo este en posicion vertical/horizontal
        @media (min-width: Npx) and (orientation: landscape){
            /* mis reglas de estilo */
        }
        

    min-width --> Le indica al navegador que si la resolucion de salida del viewport tiene como minimo n-pixeles, se deberan aplicar las reglas de estilo.

    CUANDO ES BUENO DEFINIR UNA MEDIA QUERIE?

        Breakpoint --> si tu sitio se ve mal en una resolucion de salida 

    CUANTAS SON MUCHAS MEDIAS QUERIES?

        Mas de 4 ya se considera que estamos haciendo algo mal. Tendriamos que pensar en solo mobile, tablet, desktop.
