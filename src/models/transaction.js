const db = require("../configs/connect");

module.exports = {
    getTransaction: (uid) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT t.id,  t.id_user, t.created_date ,t.quantity,  p.name, p.id_category, p.id_branch, p.price  FROM transaction AS t INNER JOIN user AS u ON (t.id_user = u.id)INNER JOIN products AS p ON (t.id_product = p.id) WHERE u.id = '${uid}'`, (err, response) => {
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