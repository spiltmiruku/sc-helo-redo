const express = require('express');

const ctrl = require('./controller');

app = express();

app.use(express.json());

port = 7654

app.listen(port, () => console.log(`Gotta catch them on ${port}`));