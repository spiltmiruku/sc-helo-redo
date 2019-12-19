// const bcrypt = require('bcryptjs');

module.exports = {
    register: async(req, res) => {

        const {username, password} = req.body;
        // const {session} = req;
        const db = req.app.get('db');

        let user = await db.check_user(username);
        user = user[0];

        if(!user){
            return res.status(400).send('Username not found')
        }

    },

    login: async(req, res) => {

        const {username, password} = req.body;

        const db = req.app.get('db');

        let user = await db.check_user(username);
        user = user[0];

        if(!user){
            return res.status(400).send('Username not found')
        }


    }
}