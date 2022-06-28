**INTRODUCCION A HTML**
Es la estructura de las paginas webs (lo podriamos pensar como huesos de un cuerpo).

Hyper Text Markup Language --> o lenguaje de marcado de hipertexto, es un estandar para la elaboracion de paginas web. Define una estructura basica y un codigo (HTML) para la definicion de contenido de una pagina web(texto, imagenes, videos, juegos, etc).

**ETIQUETAS Y ATRIBUTOS**
etiquetas --> porciones de texto que al ser interpretadas por el navegador dan un resultado visual particular

        <h1></h1>
        - <h1> --> etiqueta de apertura
        - </h1> --> etiqueta de clausura

    etiquetas + contenido --> elemento HTML

    atributos --> caracteristicas de las etiquetas que nos permite darle estilos a los elementos
        - nombre del atributo
        - un signo igual (=)
        - el valor del atributo entre comillas

    Por ejemplo) align se usa para alinear el texto

        <h1 align="center"> Hola mundo </h1>

    ESTRUCTURA BASICA HTML (tiene que estar presente en todo archivo html)
    Dicha estructura le permite al navegador entender que va a recibir un documento html y que debera visualizarlo de manera correcta

        <!DOCTYPE html> --> Define la version del lenguaje que se esta utilizando
        <html lang="en"> --> Define que todo su contenido interno sera HTML. El inicio de la pagina
        <head> --> Define toda la informacion referente al documento (como la codificacion de caracteres). Configuracion de la pagina

            <meta charset="UTF-8"> --> meta es bastante amplio, para el caso de charset define la codificacion de caracteres en el documento
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title> --> Define el titulo de pestana en el navegador

        </head>
        <body> --> Todas las demas etiquetas que generan contenido visual. Contenido de la pagina

        </body>
        </html> --> Fin de la pagina

**ELEMENTOS DE LINEA Y BLOQUE (inline / block)**
Cuando hablamos de la visualizacion y el comportamiento de los elementos de HTML, tenemos dos grupos.

        - Elementos de bloque: Son aquellos elementos que a pesar de su contenido interno, ocupara todo el espacio que dispone a lo ancho, sin permitir que otros elementos se posicionen a sus laterales. Visualmente generan un salto de linea

            <div></div> un ejemplo de etiqueta block, permite generar divisiones

        - Elementos de linea: Todo lo contrario al anterior, estos elementos ocupan todo el espacio condicionado por su contenido interno. Pueden convivir uno al lado del otro, y si se acaba la linea siguen abajo.

            <span></span> un ejemplo de etiqueta inline, permiten contener una porcion de texto y poder determinarle un estilo independiente al bloque de codigo que pertenecen

    Para identificarlos lo mejor es obsevar su comportamiento dentro del navegador.

    PORQUE ES IMPORTANTE CONOCER LAS DIFERENCIAS?
        Al momento de diagramar el sitio web, necesitamos disponer etiquetas que corten el flujo de elementos (generen un salto de linea). El objetivo es poder tener un esquema visual mas organizado y funcional para el usuario.


    PROPIEDAD DISPLAY (CSS)
        Nos permite cambiar la disposicion del elemento que queremos. Recibe valores block, inline, inline-block, none

            .en-linea {display : inline;} --> define un elemento con comportamiento inline, no recibe propiedades del modelo de caja

            .de-bloque {display : block;} --> define un elemento con comportamiento block, puede recibir propiedades del modelo de caja

            .de-bloque-en-linea {display : inline-block;} --> define un elemento con comportamiento de semiblock, puede recibir propiedades del modelo de caja y elementos de linea

            .oculto {display : none;} --> oculta un elemento, no elimina la estructura HTML sino que desaparece de la vista

**ETIQUETAS DE TEXTO**
h = headings --> Representan titulares, van de diferentes tamanos tipograficos nomas

        <h1></h1> --> El H1 es de mayor nivel, mayor importancia. Solo se puede usar una vez
        <h2></h2>
        <h3></h3>
        <h4></h4>
        <h5></h5>
        <h6></h6>

    p = paragraph --> sirven para generar bloques de texto, parrafos

        <p></p>

    estilar textos en HTML, tenemos dos etiquetas

        <em></em> --> para poner el texto en cursiva
        <strong></strong> --> para poner el texto en negrita

    br = break line --> sirve para generar saltos de linea entre diferentes textos en un parrafo

        <br/>

**LISTAS**
Al igual que en un documento de texto, HTML nos permite generar listas de items.
Las listas pertenecen a los elementos de bloque (block) dada la distribucion que poseen.

        Listas ordenadas: generan una lista de vineta numerica
        Lista desordenada: generan una lista de bullet o punto
        Listas anidadas: podemos generar varios niveles de jerarquia y organizacion. Se pueden anidar como queramos y generar los niveles que necesitemos

    ETIQUETAS DE LISTAS

        <ol></ol> --> listas ordenadas
            <ol type="1">...</ol> --> nos permite cambiar el tipo de vineta
            <ol start="20">...</ol> --> nos permite decirle en donde empezar la numeracion
            
        <ul></ul> --> listas desordenadas
            <ul type="disc">...</ul> --> nos permite cambiar el tipo de vineta
            
    cada elemento de la lista tiene que ir con la etiqueta

        <li></li> --> list item, hace referencia a cada item de la lista

**RUTAS HIPERVINCULOS E IMAGENES**
    Con HTML tambien podemos generar imagenes o vinculos entre diferentes archivos.
    Route --> un trayecto que un documento HTML debe realizar para llegar a un determinado recurso

        Relative Route --> Coordenadas parciales. Contienen la informacion necesaria de la ruta determinada que queremos realizar (por ejemplo una direccion de archivo)

        Absolut Route --> Coordenadas totales. Contienen toda la informacion de la ruta determinada que queremos realizar (por ejemplo una URL)

    ETIQUETA PARA REFERENCIAR UNA IMAGEN

        <img src="..." alt:"..."></img> 
            - src: el origen de la imagen que queremos usar. Podemos escribir relative / absolut routes 
            - alt: texto alternativo y descriptivo que queremos mostrar sobre la imagen

    ETIQUETAS PARA ENLACES O HIPERVINCULOS

        <a href="..." target="...">texto que queremos mostrar al usuario como el enlace</a>
            - href: aca va la ruta que queremos vincular
            - target: define donde se va a abrir el documento (_blank abre en una pestana nueva)

**INTRODUCCION A SEMANTICA**
    Semantica --> estudio de diferentes aspectos del significado, sentido o interpretacion de diferentes signos linguisticos. En HTML hace referencia a las buenas practicas que podemos llevar a cabo para que le sea mas facil (y mejor) de interpretar a un buscador

    - usos de titulares
        h1 --> titulo principal
        h2 --> subtitulo
    
    - <div> --> Se dejo de usar tanto, ahora tenemos mas etiquetas para evitar redundancias
        - <header> --> cabecera
        - <nav> --> barra de navegacion
        - <footer> --> pie de pagina 
        - <section> --> seccion de contenido monotematica (header y footer si fuera necesario)
        - <article> --> porcion de contenido dentro de un section

**ESTRUCTURA DE UN SITIO WEB**
    1) Contenedores de elementos / contenido
    2) Dentro de los contenedores podemos meter mas contenedores 
    3) La primer pagina html se llama index.html