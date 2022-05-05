**GIT / GITHUB**
    Los commits en github son para escribir un comentario de los cambios que se hicieron en el repositorio.

        git init --> crea el repositorio local, en la computadora

        git config user.name "nombreUsuario" --> agrega nuestra identidad
        git config user.name --> nos muestra la identidad registrada
        git config user.email "email@gmail.com" --> agrega nuestro email
        git config user.email --> nos muestra el email registrado
    
    si le agregamos --global dejamos asentado que todos los proyectos que salgan de esta computadora tienen que ir con
    ese email y usuario

        git remote add origin https://github.com/DH/repoRemoto --> apunta al repositorio remoto, en Github.

        git add --> agrega los archivos que queremos subir al remoto 
        git add . --> agrega todos los archivos 
        git commit -m "" --> commitea los cambios de los archivos 
        git push origin main --> envia los archivos al repositorio remoto
        git status --> seguimiento del estado de los archivos 



