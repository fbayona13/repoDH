**SESSIONS**
    Nos referimos a las sesiones de informacion que se crean a partir del momento que ingresamos a la pagina y se guardan para todo el sitio web. 
    Por ejemplo) El idioma (ESP / ING) o la moneda en un ecommerce.

        Session --> es una variable global que se usa en toda la pagina. Esta en el servidor.
        Cookie --> es informacion que guardamos de forma local en el equipo del cliente para hacer uso de la session

    Como hacemos una session?

        1) npm install express-session --save
        2) const session = require ('express-session')
        3) lo indicamos como middleware a nivel de aplicacion (que todas las paginas usen session)
        
            app.use(session({secret: 'Shh, es un secreto'}));

        4) hacer uso de session a travez del request

            por ejemplo) si en un controlador queremos definir el idioma 

                req.session.idioma = "Espanol";
    