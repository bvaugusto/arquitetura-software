const express = require('express');
const app = express();
const router = express.Router();

//Rotas
const index = require('./routes/index');
const songLyricRoute = require('./routes/songLyricRoute');
app.use('/', index);
app.use('/songLyric', songLyricRoute);
module.exports = app;

const express = require('express');
const app = express();
const router = express.Router();

//Rotas
const index = require('./routes/index');
const songLyricRoute = require('./routes/songLyricRoute');
app.use('/', index);
app.use('/songLyric', songLyricRoute);
module.exports = app;