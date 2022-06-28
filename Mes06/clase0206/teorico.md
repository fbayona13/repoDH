**FORMULARIOS EN HTML**
    
    <form action="" method=""></form>
        permite definir algunas cosas basicas y necesarias para procesar la informacion recibida del formulario. Todos los campos que querramos implementar iran dentro de esta etiqueta.

            action--> sirve para definir la ruta donde se va a procesar la informacion de los campos 
            method--> define como se enviara la informacion 
    
    <label></label>
        sirve para implentar un texto que acompane a cada campo de formulario. Describe la informacion que esperamos recibir
    
    <input type=""></input>
        etiqueta multifuncion. Podemos generar diferentes campos dependiendo del type

            type--> es la propiedad que nos permite definir el campo. Existen infinidad de campos que podemos usar
    
    <textarea></textarea>
        basicamente es un area de texto en el cual podemos escribir parrafo. Como si fuera un comentario

    <select></select>
        nos permite generar una cajita con opciones para elegir (sexo, ano, pais, etc)

            <option></option>
                Las opciones de la cajita
        
    <button type=""></button>
        es el boton. Tambien tiene la propiedad type

            type= submit --> enviar el formulario a la ruta que definimos en el form
            type= reset --> borrar todo lo que ingresamos en el form
    
    OTROS ATRIBUTOS QUE ENTRAN EN CUALQUIER CAMPO DE FORMULARIO
    
        name--> todos los campos deberian tener su nombre
        value--> en los campos que no permiten incersion de texto por parte del usuario
        required--> todos los campos en los que sean necesarios la incersion de texto. Lo hace obligatorio.
        placeholder--> es un texto de ejemplo que ayuda al usuario a entender de que es el formulario
        
    
**RADIO BUTTON / CHECKBOXES**
    tanto radio button como el checkbox se generan con la etiqueta <input>

        <input type="radio"></input>
    
    para poner la frase o palabra que acompanara al boton, podemos usar label 

        <label>
            <input type="radio"></input>
            texto que acompana el mismo
        </label>
    
    con el atributo name de input podemos referenciar que solo una opcion sea elegida del mismo campo
    
        <label>
            <input type="radio" name="nombre"></input>
            texto que acompana el mismo
        </label>
    
    para lo mismo para el checkbox, con la diferencia que este permite elegir mas de una opcion por mas que usemos el name para el campo

    con value podemos agregar el tipo de valor que queremos procesar cuando se envie el formulario. En el backend nos llegaria los valores de value.

        <label>
            <input type="radio" name="nombre" value="random"></input>
            texto que acompana el mismo
        </label>
    
**FORMULARIOS AVANZADOS**
    Tambien lo vamos a hacer con la etiqueta <input>

        <input type="date" name="fechaNacimiento" value="1985-08-28"></input>
            genera un calendario para elegir una fecha determinada(por ejemplo nacimiento). Si usamos el value se usa el formato americano

        <input type="file" name="imagenDePerfil" multiple accept=".jpg .png">
            genera un boton para cargar un archivo (por ejemplo una foto de perfil). Se puede personalizar con CSS. Con multiple le decimos que queremos subir mas de un archivo. Con accept le decimos que tipo de archivos aceptaremos.
        
    Cuando tenemos un formulario con campos obligatorios, por lo general se arma con un span que indicara que es obligatorio

        <label>
            <input type="text" name="nombreUsuario"></input>
            <span class="feedback"></span>

            texto que acompana el mismo
        </label>

**PSEUDO-SELECTORES**
    En CSS, los selectores que se suelen aplicar sobre un selector ya existente. Se ultilizan para modificar el comportamiento de algun elemento de HTML. 
    Se dividen en dos clases 

        pseudo-clases --> se aplican sobre un selector especifico. Existe una amplia cantidad de pseudo-clases, algunas se pueden aplicar a todos los elementos HTML, mientras que otras son especificas.

            .selector :pseudo-clase{
                //codigo
            }

            :visited --> para darle estilo a las clases de enlaces que ya hayan sidos visitados
            :hover --> para darle estilo diferente a las clases cuando el cursor pasa por encima de las mismas
            :focus --> para centrar el foco del cursor sobre la clase. Se suele aplicar a los campos de un usuario, los inputs y textareas.
            :active --> aplica estilo a los enlaces <a></a> que esten siendo clickeados por el usuario
            :disable --> aplica cuando un elemento esta deshabilitado. Que no se pueden alterar


        pseudo-elementos --> se encargaran de manipular el contenido de un elemento presente en HTML
        
            .selector ::pseudo-elemento{
                //codigo
            }

            ::before / ::after --> pueden agregar contenido antes o despues desde CSS, en un elemnto HTML. Necesitan un content
