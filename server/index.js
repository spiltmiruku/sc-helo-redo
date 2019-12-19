require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      gradient = require('gradient-string'),
      { SERVER_PORT, SESSION_SECRET, CONNECTION_SERVER } = process.env,
      ctrl = require('./controller'),
      app = express();

app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60},
    secret: SESSION_SECRET
}))


massive(CONNECTION_SERVER)
    .then(database => {
        app.set('db', database)
        console.log(gradient.morning('DB is up and running'));
    })

    // console.log(ctrl)
app.post('/api/auth/register', ctrl.register);
app.post('/api/auth/login', ctrl.login);


// Test features

app.post('/api/profile/', ctrl.newPic);
app.put('/api/profile/', ctrl.editPic)

const port = SERVER_PORT;

app.listen(port, () => console.log(gradient.retro(`Gotta catch them all on ${port}`)));