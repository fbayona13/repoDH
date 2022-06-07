**POSITION**
Es una propiedad que nos permite acomodar nuestros elementos dentro del HTML. Desplaza el elemento por el documento.
Sirve para solucionar problemas como el superposicionamiento de elementos.

        position: static;

        position: fixed;
            cuando queremos que el elemento quede fijo en la posicion del sitio web y siga al usuario a medida que se desplaza

        position: relative;
            permite desplazar el elemento de su posicion original a una nueva posicion. No altera la posicion de otros elementos
            para desplazarlo, usamos las propiedades top / right / bottom / left

        position: absolute;
            se desplaza tomando como referencia los costados del body, segun como se hayan configurado las propiedades top / right / bottom / left.
            con absolute cambiamos la posicion original del elemento, el lugar que ocupaba queda vacio por lo que otro elemento puede ocuparlo.

    Position relative + absolute
        si tenemos un elemento hijo con position absolute dentro de un elemento padre con position relative, los elementos hijos se moveran dentro de los limites del padre.

            div{
                position: relative;
            }

            .caja-2{
                position: absolute;
                right: 100px;
                top: 50px;
            }

        esto lo usamos cuando queremos sacar un elemento del flujo normal y posicionarlo en un punto fijo con respecto a su elemento contenedor (como el autito en mercadoLiebre)

**Z-INDEX**
Suponiendo que tenemos varios elementos apilados, con z-index podemos decir que elemento se mostrara por encima de los demas. Hace referencia al eje de profundidad del plano cartesiano.
A mayor valor de z-index, mas arriba se posicionara el elemento.
Si tienen el mismo valor, el elemento que ira por encima sera el que este ultimo en el HTML.
z-index funcionara solo en los elementos posicionados (position).

**TRANSICIONES**
Efectos que le podemos dar a determinados elementos en determinadas acciones.
Esto lo conseguimos gracias a :hover

        buttom{
            color
            background-color
        }

        buttom :hover{
            color
            background-color
        }

    Las transiciones las define el programador.
    Las transiciones son cambios progresivos del estado inicial al estado que queremos tener. Para lograr que los cambios sean progresivos lo hacemos con la propiedad transition.
    Con transition podemos usar

        transition-property
            para definir los nombres de las propiedades CSS en las que el efecto de la transicion deba aplicarse.

        transition-duration
            para establecer el tiempo que debe durar la transicion.
            
    Por ejemplo

        buttom{
            color
            background-color
            transition: border-radius 450ms;
            transition: all 0.5s;
        }

    Siempre va en la regla de estilo que no tenga la clase :hover

**ANIMACIONES**
    Hoy podemos hacer animaciones con CSS. La diferencia con las transiciones, es que las animaciones no estan ligadas a un evento en particular.

    Parte uno) creacion de la animacion

        @keyframes nombre-animacion{
            0%{
                //estado inicial de la animacion
            }
            100%{
                //estado final de la animacion
            }
        }
    
    Parte dos) aplicacion de la animacion

        un-elemento{
            animation-name: nombre-animacion;
            animation-duration: 1000ms;
            animation-itiration-count: infinite; //cantidad de veces que se reproducira la animacion
            animation-duration: alternate; //como se vera la animacion cuando se este reproduciendo
        }