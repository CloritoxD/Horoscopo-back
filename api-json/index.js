const express = require('express');
const {urlencoded, json} = require('express');
const router = require('./routes/signos.routes.js');
const cors = require('cors');

const app = express();

app.use(urlencoded({extended: true}))
app.use(json())

app.use(cors())
app.use('/v1/signos', router);

const corsOptions = {
    origin: 'https://horoscopo-front-one.vercel.app', // Cambia este valor a la URL exacta de tu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
    credentials: true // Si estás usando cookies o autenticación
};
app.use(cors(corsOptions));  
app.options('*', cors(corsOptions)); // Habilitar las solicitudes preflight (OPTIONS)
app.listen(4000, ()=>{
    console.log('listening at port 4000');
})