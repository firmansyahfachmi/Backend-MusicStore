const db = require("../configs/connect");

module.exports = {
    getHome: () => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM category", (err, response) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            });
        });
    },

    addCategory: data => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO category SET ?`, data, (err, response) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            });
        });
    },
}