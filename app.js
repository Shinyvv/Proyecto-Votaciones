const express = require ('express');
const app = express();
const port = 4000;

// Motor de plantilla

const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));


//rutas

app.get('/', (req, res) => {
  res.render('inicio', {
  titulo: 'Inicio'});
});

app.get('/NewVotacion', (req, res) => {
  res.render('NewVotacion', {
  titulo:'Crear Votacion',
  descripcion: 'Crea una votacion nueva',
  estado: true });
});
app.get('/ingreso', (req, res) => {
  res.render('ingreso', {
  titulo:'Ingresar',
  descripcion: 'Ingresa como usuario',
  estado: true });
});
app.get('/RegistroListo', (req, res) => {
  res.render('RegistroListo', {
  titulo:'Registro Completado',
  descripcion: 'Gracias por registrarse',
  estado: true });
});
app.get('/registro', (req, res) => {
  res.render('registro', {
  titulo:'Registro',
  descripcion: 'Apartado de registro de usuarios',
  estado: true });
});
app.get('/Resultado 1', (req, res) => {
  res.render('Resultado 1', {
  titulo:'Resultado',
  descripcion: 'Aqui se muestran los resultados',
  estado: true });
});
app.get('/Resultado 2', (req, res) => {
  res.render('Resultado 2', {
  titulo:'Resultado',
  descripcion: 'Aqui se muestran los resultados',
  estado: true });
});
app.get('/Resultado 3', (req, res) => {
  res.render('Resultado 3', {
  titulo:'Resultado',
  descripcion: 'Aqui se muestran los resultados',
  estado: true });
});
app.get('/Resultado 4', (req, res) => {
  res.render('Resultado 4', {
  titulo:'Resultado',
  descripcion: 'Aqui se muestran los resultados',
  estado: true });
});
app.get('/Votaciones', (req, res) => {
  res.render('Votaciones', {
  titulo:'Votaciones',
  descripcion: 'Estado de las votaciones',
  estado: true });
});

app.listen(port, ()=> {console.log('Sv al servicio', port)})
//conexion a DB

const mongoose = require('mongoose');

const user = 'info_usuario';
const password = 'jampF44kGccz0ITi';
const uri = `mongodb+srv://${user}:${password}@cluster0.vcnjpoq.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true })

    .then(()=> console.log('Base de datos conectada'))
    .catch(e=> console.log(e))
