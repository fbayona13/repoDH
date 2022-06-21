**TEMPLATE ENGINE**
    una plantilla es basicamente es un archivo con estructura HTML predefinida, el cual nos ayuda a generar varios archivos mas a partir del mismo.

    un motor de plantillas nos permite generar una plantilla en si, para que nuestra aplicacion pueda usarla. Nosotros usamos EJS (embbeded JavaScript)
    Otra particularidad es que nos permite generar archivos dinamicos que contengan informacion proveniente de los controladores.

    Se elige EJS porque usa la misma sintaxis de HTML con la diferencia que en ves de ser .html ahora seran .ejs


**INSTALACION E IMPLEMENTACION**
    El metodo .set() permite definir configuraciones de Express. Este se ejecuta sobre la variable que tenga asociada la ejecucion de Express, en la mayoria llamada app.js

**PRIMERA VISTA**

        const controller = {
            mostrarProductos : (req, res) => {
                res.render ('nombre del archivo que queremos usar')
            }
        }

**TAGS EN EJS**
    Cuando tenemos que generar un archivo para muchos objetos con sus propios parametros, EJS nos proporciona tags que nos permiten implementar logica JS en HTML.

        <%%> --> controles de flujo, condicionales y estructuras de JS

            <% for(i = 0, i < 10, i++){ %>

                <!--Todo lo que queramos escribir-->

            <% } %>
        
        <%= %> --> Los mismo que antes, con la diferencia que el igual nos dice que todo sera impreso de manera literal dentro del contenido HTML. Lo usamos para variables dinamicas (como el i del for). Sirve para imprimir el resultado de una expresion o un valor.

            <% for(i = 0, i < 10, i++){ %>

                <!--Todo lo que queramos escribir--> <%= i %>

            <%> } <%>
        
**PARAMETROS COMPARTIDOS**
    Como pasar informacion desde los controladores hacia las vistas. 

    EN EL CONTROLADOR
        mostrarTodos: (req, res) => {
            personas = [
                'Dario'
                'Maria'
                'Javier'
                ],

            res.render('user-list', {
                'personas': personas
            });
        }
    
    De esta forma podes enviar un dato a la vista definida con el controlador.

    EN LA VISTA
        <% for(let persona of personas) { %>

            Hola, Soy <%= persona.nombre + " " + persona.apellido %>. Naci en <%= persona.pais %>
        
        <% } %>
    
**VISTA PARCIALES** 
    