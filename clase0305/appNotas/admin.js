const fs = require ("fs");
const admin = (accion, tareas) =>{
	switch (accion){
        case "listar": 
            // for (let index = 0; index < tareas.length; index++) {
            //     const tarea = tareas[index];
            //     console.log(tarea);
            // } 

            tareas.forEach ((element) => {
                console.log(element);
            });
            
            // forEach() solo recorre el array, map() y filter() crean un nuevo array
        break;

        case "crear":
            let titulo = process.argv[3];
            let nuevaTarea = {
                titulo: titulo,
                estado: "Pendiente",
            }
            tareas.push(nuevaTarea);
            fs.writeFileSync ('tareas.json', JSON.stringify(tareas, null, 2));
        break;

        case "filtrar":
            let estado = process.argv[3];
            let statusTarea = tareas.filter(element => estado === element.estado);
            statusTarea.forEach(element => console.log(element.titulo, '-->', element.estado));
        break;

        case "actualizar":
            let tareaIndice = parseInt (process.argv[3]);
            let tareaNuevoEstado = process.argv[4];
            let tareasActualizadas = tareas.map((element, index) => index === tareaIndice ? Object({...element, estado: tareaNuevoEstado}) : element);
            fs.writeFileSync('tareas.json', JSON.stringify (tareasActualizadas, null, 2));
        break;

        case 'mostrar':
            let tareaIndiceMostrar = parseInt(process.argv[3]);
            let tareaMostrar = tareas.find((elemento,indice) => indice === tareaIndiceMostrar);
            console.log(tareaMostrar);
        break;

        case undefined:
            console.log("Atención - Tienes que pasar una acción.")
        break;

        default:
            console.log("No entiendo qué quieres hacer.")          
	}
}


module.exports = admin
