const express = require ('express');
const app = express();

const port = 4000;

app.use(express.static(__dirname + "/public"));

app.use((req, res, next)=> {res.status(404).sendfile(__dirname +"/public/404.html")})

app.listen(port, ()=> {console.log('Sv al servicio', port)})

// Motor de plantilla
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

//rutas

app.get('/', (req, res)=>{res.render('index', {titulo: 'Inicio'})})

//conexion a DB

const mongoose = require('mongoose');

const user = 'info_usuario';
const password = 'jampF44kGccz0ITi';
const uri = `mongodb+srv://${user}:${password}@cluster0.vcnjpoq.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true })

    .then(()=> console.log('Base de datos conectada'))
    .catch(e=> console.log(e))
