require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      gradient = require('gradient-string'),
      { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env,
      ctrl = require('./controller');

app = express();
app.use(express.json());

massive(CONNECTION_STRING)
    .then(database => {
        app.set('db', database)
        console.log(gradient.morning('DB is up and running'));
    })

const port = SERVER_PORT;

app.listen(port, () => console.log(gradient.retro(`Gotta catch them all on ${port}`)));