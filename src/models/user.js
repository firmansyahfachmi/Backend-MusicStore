const db = require("../configs/connect");

module.exports = {
    getUser: id => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM user WHERE id = '${id}'`, (err, response) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            });
        });
    },

    register: (data) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO user SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

    getByEmail: (email) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT id, name, email, level, password FROM user WHERE email = ?', email, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    }
}