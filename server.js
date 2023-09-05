const express = require('express');
const app = express();

const bodyParser= require('body-parser')
const morgan = require('morgan')

//Validamos que no estemos en ambiente de producción
if(process.env.NODE_ENV != 'production'){
    //Se carga la configuración archivo .env al proceso.env
    require('dotenv').config();
}

app.set('port', process.env.PORT || 5000);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('combined'))

app.use('/api/v1/users', require('./api/v1/routes/users.routes'))
app.use('/api/v1/articles', require('./api/v1/routes/articles.routes'))
app.use('/api/v1/categories', require('./api/v1/routes/categories.routes'))

app.listen(app.get('port'),() =>{
    console.log(`Server running on localhost:${app.get('port')}`);
})