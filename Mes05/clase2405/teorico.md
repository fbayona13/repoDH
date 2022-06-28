**CSS Y SELECTORES**
    Cascading Style Sheets --> Hojas de estilo en cascada. Todo relacionado en el estilo.
    Para integrarlo en nuestro HTML lo unico que necesitamos es poner en el <head></head>
    
        <link rel="stylesheet" href="../../hojaDeEstilo.css">
    
    REGLAS DE ESTILO
    
        selector{
            propiedad: valor;
        }
    
        - selector --> es el elemento HTML que se le aplicara el estilo CSS
        - propiedad --> la caracteristica visual que queremos modificar
        - valor --> se lo damos a la caracteristica
    
    TIPOS DE SELECTORES

        - Selector de etiqueta--> aplica estilos a cualquier etiqueta HTML que coincida con este nombre

            p{
                font-size: 15px;
            }
        
        - Selector de clase--> es por lo general un atributo clase que podemos agregar a las etiquetas HTML, van en minuscula. Es el mas utilizado

            HTML) <p class= "texto-rojo"> algo escrito aca </p>

            CSS) .texto-rojo{
                color: red;
            }
        
        - Selector descendente--> es una mezcla de los anteriores, buscando dar estilo siempre y cuando cumpla con una condicion determinada

            .noticia h2{
                font-size: 35px;
            }
        
        - Selector combinados--> es una mezcla de todos los anteriores.

        - Selectores ID--> Parecido al de clase, con la diferencia que tiene prioridad este

            HTML) <p id= "texto-rojo"> algo escrito aca </p>

            CSS) #texto-rojo{
                color: red;
            }

**FUENTES**
    Vamos a ver propiedades que nos permitan modificar las tipografias

        color--> aplica color
        font-family--> elegimos que fuente queremos usar. Puede tener varios valores separados por comas
        font-size--> sirve para definir el tamano de la fuente 
        font-style--> el estilo de la fuente
        font-weight--> el peso de la fuente

        text-align--> la alineacion de la fuente en la pagina
        text-decoration--> nos permite agregar o sacar la decoracion de un texto (none, underline, line-throught)
        text-transform--> nos permite transformar el texto (none, uppercase, lowercase)
        line-height--> nos permite generar interlineado (tiene que ser el font-size mas 8px aprox)

**COLORES**
    Vamos a ver formas de usar colores en CSS

        colores por nombre --> 140 colores
        colores por hexadecimal --> el mas utilizado
        colores por RGB --> rgb(red, green, blue)
        colores por RGBA --> agrega alpha, la opacidad. rgba(red, green, blue, alpha<0 - 1>)
    
    color picker en nuestro navegador para buscar colores

**FONDOS**
    CSS nos permite implementar fondos de colores e imagenes

        background-color--> color de fondo
        background-image--> imagen de fondo (necesita una url y una ruta)

            background-image: url(../../image.png);
        
        backgroung-repeat--> es para controlar la imagen de fondo

            background-repeat: repeat;
            background-repeat: no-repeat; 
            background-repeat: repeat-x; //se repite segun el eje-x
            background-repeat: repeat-y; //se repite segun el eje-y
        
        background-position--> controla la posicion de la imagen

            background-position: center bottom; //recibe 2 valores(x, y)

        background-attachment--> nos permite decir que la imagen este estatica o scrolleable

            background-attachment: scroll / fixed;
        
        background-size--> el tamano de la imagen de fondo

            background-size: contain / cover;

        