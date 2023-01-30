const express = require('express');
const morgan = require('morgan')
const routerMain = require('./src/routes/mainRoute');
const routerUser = require('./src/routes/userRoute');
const port = process.env.PORT || 3030;

const app = express();

app.use(morgan('dev'));
app.use(routerMain);
app.use(routerUser)
app.listen(port, ()=>console.log(`servidor escuchando en puerto ${port}`));