const express = require('express');
const routes = require('./routes');
require('./database')

const app = express();

app.use(express.json());
app.use(routes);
console.log('Listen in port 3333')
app.listen(3333);