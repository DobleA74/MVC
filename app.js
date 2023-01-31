const express = require('express');
const morgan = require('morgan')
const routerMain = require('./src/routes/mainRouter');
const routerUser = require('./src/routes/userRouter');
const port = process.env.PORT || 3030;

const app = express();

app.set('view engine','ejs');
//configura la carpeta estatica del proyecto
app.use(express.static('public'));

app.use(morgan('dev'));

app.use(routerMain);
app.use(routerUser)

app.listen(port, ()=>console.log(`servidor escuchando en puerto ${port}`));