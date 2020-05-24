require('./server/config/config.js');

const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Configuracion global de rutas
app.use(require('./server/routes/index.js'));

let renderHTML = path.resolve(__dirname, './public/index.html');
app.get('/', function (req, res) {
    res.sendFile(renderHTML);
})

mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) throw err;        
    console.log("Base de datos online para " + process.env.NODE_ENV);
});

app.listen(process.env.PORT, ()=> {
    console.log("Escuchando en puerto " + process.env.PORT);
})