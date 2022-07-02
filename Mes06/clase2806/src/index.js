let express = require ('express');
let path = require ('path');
let app = express();
let{port, start} = require ('./modules/port');

app.listen(port, start());
app.set ('views', path.resolve(__dirname, 'views')); //donde ubicar las plantillas
app.set ('views engines', 'ejs'); //formato de plantilla que el motor tiene que buscar
app.use(require('./modules/public.js'));
app.use(require ("./routes/main.routes"));

//COMPLETAR LA ORGANIZACION
//
// app.get("/login", (req, res) =>
//   res.sendFile(resolve(__dirname, "/views/login.ejs"))
// );
// app.get("/register", (req, res) =>
//   res.sendFile(resolve(__dirname, "/views/register.ejs"))
// );
// app.get("/list", (req, res) =>
//   res.sendFile(resolve(__dirname, "/views/list.ejs"))
// );
// app.get("/detail", (req, res) =>
//   res.sendFile(resolve(__dirname, "/views/detail.ejs"))
// );
