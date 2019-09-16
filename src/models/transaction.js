const db = require("../configs/connect");

module.exports = {
    getTransaction: (uid) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM transaction WHERE id_user = '${uid}'`, (err, response) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            });
        });
    },

    addTransaction: (data) => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO transaction SET ?`, data, (err, response) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            });
        });
    },
}