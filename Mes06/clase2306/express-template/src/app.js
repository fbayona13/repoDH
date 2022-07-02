const express = require('express')
const path = require('path')
const app = express()
const {port, callback} = require('./modules/port')

app.listen (port, callback);
const public = require ('./modules/public');
app.use (express.static(public));

//Esenciales para usar EJS
app.set('views', path.resolve (__dirname, 'views'));
app.set('view engine', 'ejs')

app.use('/', require ('./routes/main.routes'));