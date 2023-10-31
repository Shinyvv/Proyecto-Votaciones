const express = require('express')
const app = express

const port = process.env.port || 3000;

//conexion a DB

const mongoose = require('mongoose');

const user = '';
const password = '';
const uri = '';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true })

    .then(()=> console.log('Base de datos conectada'))
    .catch(e=> console.log(e))



//Motor de plantillas

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.use(express.static(__dirname + '/public'));

//rutas web
